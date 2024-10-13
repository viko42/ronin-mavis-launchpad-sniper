import { BigNumberish } from "ethers";

export type Transaction = {
    to: string;
    value: BigNumberish;
    gasLimit: number;
    gasPrice: number;
    chainId: number;
    data: string;
    nonce?: number;
  };
