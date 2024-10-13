import * as ethers from "ethers";
import * as fs from "fs";
import * as readline from "readline";
import * as ini from "ini";

function loadConfigFile(filename: string) {
  try {
    const configContent = fs.readFileSync(filename, "utf-8");
    const config = ini.parse(configContent);
    return config;
  } catch (error: any) {
    console.error(`Error loading config file: ${error.message}`);
    return null;
  }
}

const config = loadConfigFile("./lib/config.ini");
const customRpcs = config?.customRpcs?.split(",") || []
const provider = new ethers.JsonRpcProvider(customRpcs.length > 0 ? customRpcs[0] : "https://api.roninchain.com/rpc");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateWallets(count: number) {
  const wallets: { privateKey: string; address: string }[] = [];
  for (let i = 0; i < count; i++) {
    const wallet = ethers.Wallet.createRandom();
    wallets.push({
      address: wallet.address,
      privateKey: wallet.privateKey,
    });
  }
  return wallets;
}

function saveWalletsToFile(
  wallets: { privateKey: string; address: string }[],
  filename: string
) {
  const data = JSON.stringify({ wallets }, null, 2);
  fs.writeFileSync(filename, data);
  console.log(`Wallets saved to ${filename}`);
}

function loadWalletsFromFile(
  filename: string
): { privateKey: string; address: string }[] {
  if (fs.existsSync(filename)) {
    const data = fs.readFileSync(filename, "utf8");
    return JSON.parse(data).wallets;
  }
  return [];
}

const sendRonFromAllWallets = async (
  privateKeys: string[],
  recipient: string
) => {
  for (const key in privateKeys) {
    const pk = privateKeys[key];
    const wallet = new ethers.Wallet(pk, provider);
    const balance = await provider.getBalance(wallet.address);
    const amountToKeep = ethers.parseEther("0.00042");
    const amountToSend = balance > amountToKeep ? balance - amountToKeep : 0n;
    if (amountToSend > 0n) {
      const tx = {
        to: recipient,
        value: amountToSend,
        gasPrice: ethers.parseUnits("20", "gwei"),
        gasLimit: 21000,
      };

      try {
        const txResponse = await wallet.sendTransaction(tx);
        await txResponse.wait();
        console.log(
          `Transaction sent: ${txResponse.hash}`
        );
      } catch (error: any) {
        console.error(`Error sending transaction: ${error.message}`);
      }
    } else {
      console.log(`Insufficient balance for wallet ${wallet.address}`);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};
const sendRonToAllWallets = async (
  privateKey: string,
  recipients: string[],
  amount: string
) => {
  const wallet = new ethers.Wallet(privateKey, provider);
  const amountToSend = ethers.parseEther(amount);

  for (const recipient of recipients) {
    const balance = await provider.getBalance(wallet.address);

    if (balance >= amountToSend) {
      const tx = {
        to: recipient,
        value: amountToSend,
        gasPrice: ethers.parseUnits("20", "gwei"),
        gasLimit: 21000,
      };

      try {
        const txResponse = await wallet.sendTransaction(tx);
        await txResponse.wait();
        console.log(
          `Transaction sent: ${txResponse.hash}`
        );
      } catch (error: any) {
        console.error(
          `Error sending transaction to ${recipient}: ${error.message}`
        );
      }
    } else {
      console.log(`Insufficient balance to send ${amount} RON to ${recipient}`);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
};

async function manageWallets() {
  const filename = "wallets.json";
  let wallets = loadWalletsFromFile(filename);

  while (true) {
    console.log("\nWallet Management Menu:");
    console.log("1. Generate new wallets");
    console.log("2. View existing wallets public addresses");
    console.log("3. Scatter funds to wallets");
    console.log("4. Collect funds from wallets");
    console.log("5. Exit");

    const choice = await askQuestion("Enter your choice (1-5): ");

    switch (choice) {
      case "1":
        const count = await askQuestion(
          "How many wallets do you want to generate? "
        );
        const newWallets = generateWallets(parseInt(count));
        wallets = [...wallets, ...newWallets];
        saveWalletsToFile(wallets, filename);
        break;
      case "2":
        if (wallets.length === 0) {
          console.log("No wallets found.");
        } else {
          console.log(`Existing wallets [${wallets.length}]:`);
          wallets.forEach((wallet, index) => {
            console.log(`${index + 1}. Address: ${wallet.address}`);
          });
        }
        break;
      case "3":
        if (wallets.length < 2) {
          console.log("You need more than 1 wallet.");
        } else {
          const balance = await provider.getBalance(wallets[0].address);
          console.log(
            `Your main wallet ${
              wallets[0].address
            } currently has ${ethers.formatEther(balance)} $RON.`
          );
          const amountPerWallet = balance / BigInt(wallets.length);
          console.log(`You could send ${ethers.formatEther(amountPerWallet)} $RON to each of your ${wallets.length - 1} other addresses.`);
          const maxAmountPerWallet = balance / BigInt(wallets.length);
          let amountToSend;
          do {
            amountToSend = await askQuestion(
              `How much $RON do you want to send to each of your ${wallets.length - 1} other addresses? ${wallets[0].address} will send the funds. Available balance: ${ethers.formatEther(balance)} $RON, max amount per wallet: ${ethers.formatEther(maxAmountPerWallet)} $RON: `
            );
            if (ethers.parseEther(amountToSend) > maxAmountPerWallet) {
              console.log(`Amount exceeds the maximum available per wallet. Please enter a value up to ${ethers.formatEther(maxAmountPerWallet)} $RON.`);
            }
          } while (ethers.parseEther(amountToSend) > maxAmountPerWallet);

          const privateKey = wallets[0].privateKey;
          const recipients = wallets.slice(1).map((wallet) => wallet.address);

          const continueScatter = await askYes(`You going to send a total of ${Number(amountToSend) * recipients.length} $RON to ${recipients.length} addresses.`);
          if (!continueScatter) break;

          await sendRonToAllWallets(privateKey, recipients, amountToSend);
        }
        break;
      case "4":
        if (wallets.length < 2) {
          console.log("You need more than 1 wallet.");
        } else {
          const continueScatter = await askYes(
            `All your addresses will send the remaining $RON to ${wallets[0].address}`
          );
          if (!continueScatter) break;

          const recipient = wallets[0].address;
          const privateKeysToSendFunds = wallets
            .slice(1)
            .map((wallet) => wallet.privateKey);
          await sendRonFromAllWallets(privateKeysToSendFunds, recipient);
        }
        break;
      case "5":
        console.log("Exiting wallet management.");
        rl.close();
        return;
      default:
        console.log("Invalid choice. Please try again.");
    }

    await askQuestion(`\nPress any key for the menu...`)
  }
}

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function askYes(question: string): Promise<boolean> {
  return new Promise((resolve) => {
    rl.question(`${question} (yes/no): `, (answer: string) => {
      resolve(answer.toLowerCase() === "yes");
    });
  });
}

manageWallets();
