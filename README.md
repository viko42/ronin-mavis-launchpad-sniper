# Ronin-mavis-launchpad-sniper

[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/451508253810098187)

This project provides a script to automate minting NFTs on Mavis launchpad.

## Setup

1. **Manage Wallets**
   Use the `manage_wallets.ts` script to create and send funds to your wallets. This step is crucial for preparing your wallets for the minting process.

   ```
   ts-node manage_wallets.ts
   ```

2. **Configure Launchpad Information**
   Edit the `lib/config.ini` file with the necessary launchpad information:
   - Price per mint
   - Number of mints per wallet
   - Custom RPCs
   - NFT contract address
   - Mint date
   - Custom gas limit and price

   Example `config.ini`:
   ```ini
   pricePerMint=1000000000000000000
   mintAmount=2
   customRpcs=https://api.roninchain.com/rpc,https://api-gateway.skymavis.com/rpc
   nftContract=0x1234567890123456789012345678901234567890
   mintDate=2023-04-15T14:00:00Z
   gasLimit=2000000
   gweiPerTx=60000000000
   ```

3. **Run the Script**
   Once your wallets are ready and the configuration is set, you can start the minting script:

   ```
   ts-node lib/index.ts
   ```

   The script will wait until the specified mint date and then attempt to mint NFTs for all configured wallets.

## Important Notes

- Ensure you have sufficient funds in your wallets before running the script.
- Double-check all configuration parameters in `config.ini` before starting the script.
- The script uses the Ronin blockchain. Make sure you're familiar with Ronin's specifics.

## Disclaimer

Use this script at your own risk. Be aware of the risks associated with automated trading and minting scripts.
