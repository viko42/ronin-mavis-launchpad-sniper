import { ethers } from "ethers";
import { abi } from "./abi";

export const logger = (d: any, ...rest: any) => {
    console.log(`${new Date().toISOString()}:`, d, ...(rest.length ? rest : []));
}

export function createInterface() {
    return new ethers.Interface(abi);
  }
  
