# 🌟 StarStake
**StarStake** is a decentralized Ethereum staking platform that empowers users to stake Ether securely, pool funds for shared goals, and withdraw if conditions aren’t met. Built on the Sepolia Testnet, this DApp showcases the potential of decentralized finance (DeFi) and Ethereum smart contracts.

## 🛡️ Features
- **Trustless Staking**: Stake Ether into a decentralized smart contract.
- **Goal Automation**: Funds execute automatically if staking thresholds are met.
- **Fair Withdrawals**: Withdraw your stake if thresholds aren’t achieved.
- **User-Friendly Interface**: A clean, responsive Web3 app built with modern tools.

## 🛠️ Tech Stack
- **Frontend**: React, Next.js, Tailwind CSS
- **Blockchain**: Ethereum, Solidity
- **Development**: Hardhat
- **Deployment**: Vercel (Frontend) & Sepolia Testnet (Smart Contracts)

## ✅ Live Demo
Check out the live app here: [StarStake](https://starstake-bay.vercel.app/)

## 🤖 How to Use
1. **Connect Wallet**: Use <a href="https://metamask.io/">MetaMask</a> or any Web3 wallet to connect to the platform.
2. **Get Test ETH**: Use the <a href="https://www.alchemy.com/faucets/ethereum-sepolia">Sepolia Faucet</a> to get test Ether.
3. **Stake Funds**: Click "STAKE 0.01 ETHER!" to stake and confirm the transaction.
4. **Monitor Progress**: Check if the goal threshold is met or withdraw your stake if it isn’t.
5. **Disconnect Wallet**.
   
## 🔧 Developer Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/9juanjuan7/challenge-1-decentralized-staking.git
2. Navigate to the project directory:
   ```bash
   cd challenge-1-decentralized-staking
3. Install dependencies:
   ```bash
   yarn install
4. Start the Local Blockchain: Open a new terminal and run:
   ```bash
   yarn chain
5. Deploy the Smart Contracts: In a second terminal window, run:
   ```bash
   yarn deploy
6. Start the Frontend: In a third terminal window, run:
   ```bash
   yarn start
7. Access the App: Open your browser and navigate to:
   ```bash
   http://localhost:3000
   
## 📜 License
- This project is licensed under the [MIT License](LICENCE).

# 🏗 About Scaffold-ETH 2
Scaffold-ETH 2 was used as the foundation for building StarStake. It's an open-source, up-to-date toolkit for building decentralized applications (dapps) on the Ethereum blockchain.

Key Features of Scaffold-ETH 2:
- ✅ **Contract Hot Reload**: Your frontend auto-adapts to your smart contract as you edit it.
- 🪝 **[Custom hooks](https://docs.scaffoldeth.io/hooks/)**: Collection of React hooks wrapper around [wagmi](https://wagmi.sh/) to simplify interactions with smart contracts with typescript autocompletion.
- 🧱 [**Components**](https://docs.scaffoldeth.io/components/): Collection of common web3 components to quickly build your frontend.
- 🔥 **Burner Wallet & Local Faucet**: Quickly test your application with a burner wallet and local faucet.
- 🔐 **Integration with Wallet Providers**: Connect to different wallet providers and interact with the Ethereum network.

For more information: 
<h4 align="left">
  <a href="https://docs.scaffoldeth.io">Documentation</a> |
  <a href="https://scaffoldeth.io">Website</a>
</h4>
