import { ethers } from "ethers";
import * as fs from "fs";
import * as ini from "ini";
import { createInterface, logger } from "./helpers";
import { Transaction } from "./types";

const roninProvider = new ethers.JsonRpcProvider(
  "https://api.roninchain.com/rpc"
);

const stageTypePublicMint = 1;
const stageTypeAllowListMint = 2;
const additionnalBalanceForGas = "3";

export const generateTx = async (options: {
  signer: ethers.Wallet;
  public: boolean;
  stageIndex: number;
  pricePerMint: number;
  maxMint: number;
  mintAmount: number;
  nftContract: string;
  weiPerTx: number;
  gasLimit: number;
}): Promise<Transaction> => {
  try {
    const contractInterface = createInterface();
    const executeInterface = new ethers.Interface([
      "function execute(uint8 stageType, bytes calldata data) external payable returns (bytes memory)",
    ]);

    const orderData = {
      nftContract: options.nftContract,
      stageIndex: options.stageIndex || 255,
      recipient: options.signer.address,
      mintQuantity: options.mintAmount,
      isMintAllPossible: options.public ? true : false,
      extraData: "0x00",
    };

    const settleOrderData = contractInterface.encodeFunctionData(
      options.public ? "mintPublic" : "mintAllowList",
      [orderData]
    );

    const stageType = options.public
      ? stageTypePublicMint
      : stageTypeAllowListMint;
    const executeData = executeInterface.encodeFunctionData("execute", [
      stageType,
      settleOrderData,
    ]);
    const launchpadContractAddress =
      "0xa8e9fdf57bbd991c3f494273198606632769db99";
    const tx = {
      to: launchpadContractAddress,
      value: BigInt(options.pricePerMint) * BigInt(options.mintAmount),
      gasLimit: options.gasLimit,
      gasPrice: options.weiPerTx,
      chainId: 2020,
      data: executeData,
    };
    return tx;
  } catch (error: any) {
    throw new Error(error);
  }
};

const readStageInfosFromIni = (filePath: string) => {
  const config = ini.parse(fs.readFileSync(filePath, "utf-8"));
  if (!ethers.isAddress(config.nftContract)) {
    throw new Error(`check variable: nftContract`);
  }
  return {
    stageIndex: parseInt(config.stageIndex, 10),
    public: config.public,
    pricePerMint: parseInt(config.pricePerMint, 10),
    maxMint: parseInt(config.maxMint, 10),
    mintDate: config.mintDate || "2100-01-01T00:00:00Z",
    customRpcs: config.customRpcs?.split(",") || undefined,
    mintAmount: parseInt(config.mintAmount, 10) || 1,
    nftContract: config.nftContract,
    weiPerTx: parseInt(config.gweiPerTx, 10) || 60000000000,
    gasLimit: parseInt(config.gasLimit, 10) || 2000000,
  };
};

const createTransaction = async (
  pk: string,
  customRpcs: ethers.JsonRpcProvider,
  stageInfos: {
    stageIndex: number;
    public: boolean;
    pricePerMint: number;
    maxMint: number;
    mintAmount: number;
    nftContract: string;
    weiPerTx: number;
    gasLimit: number;
  }
): Promise<{
  transactionToSign: Transaction;
  signer: ethers.Wallet;
}> => {
  const signer = new ethers.Wallet(pk, customRpcs);
  // logger(`Wallet used ${signer.address}`);

  const transactionInput = await generateTx({
    signer,
    ...stageInfos,
  });
  //   const nonce = await signer.getNonce();
  const transactionToSign = { ...transactionInput };
  return {
    transactionToSign,
    signer,
  };
};

const monitorTime = () => {
  return setInterval(async () => {
    try {
      const latestBlock = await roninProvider.getBlock("latest");
      if (latestBlock) {
        const blockTime = new Date(latestBlock.timestamp * 1000);
        logger(
          `Latest block: #${
            latestBlock.number
          }, Block time: ${blockTime.toISOString()}`
        );
      }
    } catch (error) {
      console.error("Error fetching latest block:", error);
    }
  }, 5000);
};

const waitUntilTime = async (targetTime: Date) => {
  const updateInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = targetTime.getTime() - now.getTime();
    const hoursLeft = Math.floor(timeLeft / 3600000);
    const minutesLeft = Math.floor((timeLeft % 3600000) / 60000);
    const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
    logger(
      `Waiting until ${targetTime.toISOString()} - Time left: ${hoursLeft} hour(s), ${minutesLeft} minute(s), and ${secondsLeft} second(s)`
    );
  }, 10000); // Update every second

  while (new Date() < targetTime) {
    await new Promise((resolve) => setTimeout(resolve, 100)); // Check every 100ms
  }

  clearInterval(updateInterval);
  logger(`Target time reached!`);
};

const loadWallets = () => {
  let wallets: { address: string; privateKey: string }[] = [];
  try {
    const walletsData = fs.readFileSync("./wallets.json", "utf8");
    const parsedData = JSON.parse(walletsData);
    if (Array.isArray(parsedData.wallets)) {
      wallets = parsedData.wallets;
      logger(`Loaded ${wallets.length} wallet(s) from wallets.json`);
    } else {
      console.error(
        "Invalid format in wallets.json. Expected an array of wallets."
      );
    }
  } catch (error) {
    console.error("Error loading wallets.json:", error);
  } finally {
    return wallets;
  }
};

const initRpcProviders = (rpcUrls: string[]) => {
  if (!rpcUrls || rpcUrls.length === 0)
    throw new Error(`Custom RPCs are not configured`);

  const providers = rpcUrls.map((url) => new ethers.JsonRpcProvider(url));
  return providers;
};

const processOneTransaction = async (
  signer: ethers.Wallet,
  transaction: Transaction
): Promise<void> => {
  try {
    const pendingTx = await signer.sendTransaction(transaction);
    const tx = await pendingTx.wait();
    logger(`Transaction confirmed with hash: ${tx?.hash}`);
  } catch (err) {
    console.error(err);
  }
};
const sendAllTransactions = async (
  transactions: {
    transactionToSign: Transaction;
    signer: ethers.Wallet;
  }[]
) => {
  const promises: Promise<void>[] = [];
  for (const keyTx in transactions) {
    const txData = transactions[keyTx];
    promises.push(
      processOneTransaction(txData.signer, txData.transactionToSign)
    );
  }
  await promises;
};

const worker = async () => {
  const stageInfos = readStageInfosFromIni("./lib/config.ini");
  const targetTime = new Date(stageInfos.mintDate);
  const startTime = new Date(targetTime.getTime());
  const timeMonitor = monitorTime();
  const wallets = loadWallets();
  const transactions: {
    transactionToSign: Transaction;
    signer: ethers.Wallet;
  }[] = [];

  const customProviders = initRpcProviders(stageInfos.customRpcs);

  for (const keyWallet in wallets) {
    const wallet = wallets[keyWallet];

    const customProvider =
      customProviders[Number(keyWallet) % customProviders.length];
    const { transactionToSign, signer } = await createTransaction(
      wallet.privateKey,
      customProvider,
      stageInfos
    );
    const balance = await roninProvider.getBalance(signer.address);
    const requiredAmount =
      BigInt(stageInfos.mintAmount) * BigInt(stageInfos.pricePerMint) +
      ethers.parseEther(additionnalBalanceForGas);

    if (balance < requiredAmount) {
      throw new Error(
        `Insufficient balance for wallet ${
          signer.address
        }. Required: ${ethers.formatEther(
          requiredAmount
        )}, Available: ${ethers.formatEther(balance)}`
      );
    }

    logger(`Wallet: ${signer.address} have ${Number(ethers.formatEther(balance)).toFixed(2)} $RON`);
    transactions.push({
      transactionToSign,
      signer,
    });
  }

  // logger(transactions);
  logger(`Waiting started.`);
  await waitUntilTime(startTime);
  logger(`Waiting finished.`);
  await sendAllTransactions(transactions);
  clearInterval(timeMonitor);
};

worker();
