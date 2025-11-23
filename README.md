# Arbitrum Sepolia Faucet CLI

**Version:** 1.0.0

A simple and efficient command-line interface tool for claiming free test ETH on the Arbitrum Sepolia testnet. Perfect for developers building and testing decentralized applications on Arbitrum's Layer 2 scaling solution.

## What is This?

This CLI tool provides an easy way to get test ETH on Arbitrum Sepolia without navigating complex web interfaces or dealing with multiple faucet services. Simply install the package globally and claim your testnet tokens directly from your terminal with a single command.

## Features

- **Fast Claims**: Get 0.005 ETH per claim instantly
- **Anti-Abuse Protection**: Built-in 24-hour cooldown period per Ethereum address
- **Balance Tracking**: Automatically displays faucet balance before sending
- **Simple CLI**: Clean, straightforward command interface
- **Reliable**: Uses official Arbitrum Sepolia RPC endpoints
- **Open Source**: Fully transparent and community-driven

## Installation

Install the package globally using npm:
```bash
npm install -g arbitrum-sepolia-faucet
```

After installation, the `faucet` command will be available system-wide in your terminal.

## Usage

Once installed, claiming test ETH is as simple as running:
```bash
faucet <your-ethereum-address>
```

**Example:**
```bash
faucet 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```

**What happens when you run the command:**

1. The tool checks the current faucet balance
2. Verifies if your address is eligible (24-hour cooldown check)
3. Sends 0.005 ETH to your specified address
4. Returns a transaction hash for verification
5. Confirms the next available claim time

## Why Arbitrum Sepolia?

Arbitrum Sepolia is the official testnet for Arbitrum, Ethereum's leading Layer 2 scaling solution. Developers use this testnet to:

- Test smart contracts before mainnet deployment
- Experiment with DApp features without risking real funds
- Validate gas optimization strategies
- Conduct integration testing for Layer 2 applications

## Requirements for Faucet Operators

If you're running your own instance of this faucet, you'll need to set up a `.env` file in your project directory with the following variables:
```env
PRIVATE_KEY=your_faucet_wallet_private_key
ARBITRUM_RPC=https://sepolia-rollup.arbitrum.io/rpc
```

**Important:** Keep your private key secure and never commit it to version control. Use a dedicated wallet for faucet operations with limited funds.

## Development

Want to contribute or run the faucet locally? Here's how:
```bash
# Clone the repository
git clone https://github.com/Aditya-alchemist/Arbitrum-testnet-Faucet-Claim-cli.git

# Navigate to the directory
cd Arbitrum-testnet-Faucet-Claim-cli

# Install dependencies
npm install

# Run locally
node cli.js 0xYourTestAddress
```

## Troubleshooting

**Common Issues:**

- **"Address already claimed"**: Wait 24 hours between claims
- **"Insufficient faucet balance"**: The faucet needs to be refilled by the operator
- **"Invalid address"**: Ensure you're using a valid Ethereum address format

## Contributing

Contributions are welcome! Feel free to:

- Report bugs or issues
- Suggest new features
- Submit pull requests
- Improve documentation

## Support the Project

If you find this faucet useful for your development workflow:

- ⭐ Star the repository on GitHub
- 🐛 Report bugs to help improve the tool
- 🤝 Share it with other developers
- 💡 Suggest features or improvements

## Repository

GitHub: [Arbitrum-testnet-Faucet-Claim-cli](https://github.com/Aditya-alchemist/Arbitrum-testnet-Faucet-Claim-cli)

## License

MIT License - feel free to use, modify, and distribute as needed.

---

Built with ❤️ for the Arbitrum developer community
