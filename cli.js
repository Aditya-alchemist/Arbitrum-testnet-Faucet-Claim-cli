#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { ethers } = require('ethers');
require('dotenv').config();

const CLAIM_AMOUNT = '0.005'; // ETH
const CLAIM_INTERVAL = 24 * 60 * 60 * 1000; // 24h in ms
const CLAIMS_FILE = path.join(__dirname, 'claims.json');

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 1) {
    console.error('Usage: faucet <address>');
    process.exit(1);
  }

  const toAddress = args[0];
  if (!ethers.utils.isAddress(toAddress)) {
    console.error('Invalid Ethereum address');
    process.exit(1);
  }

  const rpcUrl = process.env.ARBITRUM_RPC;
  const privateKey = process.env.PRIVATE_KEY;
  if (!rpcUrl || !privateKey) {
    console.error('Set ARBITRUM_RPC and PRIVATE_KEY in .env');
    process.exit(1);
  }

  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  // Show faucet balance
  const balance = await wallet.getBalance();
  console.log(`Faucet balance: ${ethers.utils.formatEther(balance)} ETH`);

  // Support message
  console.log('\n💖 If you like this faucet, consider supporting it at https://github.com/yourrepo\n');

  // Load claims file
  let claims = {};
  if (fs.existsSync(CLAIMS_FILE)) {
    claims = JSON.parse(fs.readFileSync(CLAIMS_FILE, 'utf-8'));
  }

  const now = Date.now();
  const lastClaim = claims[toAddress] || 0;
  if (now - lastClaim < CLAIM_INTERVAL) {
    const waitSeconds = Math.ceil((CLAIM_INTERVAL - (now - lastClaim)) / 1000);
    console.error(`You can claim again in ${waitSeconds} seconds.`);
    process.exit(1);
  }

  try {
    const tx = await wallet.sendTransaction({
      to: toAddress,
      value: ethers.utils.parseEther(CLAIM_AMOUNT)
    });

    console.log(`Transaction sent. Hash: ${tx.hash}`);
    await tx.wait();
    console.log('Transaction confirmed.');

    claims[toAddress] = now;
    fs.writeFileSync(CLAIMS_FILE, JSON.stringify(claims, null, 2));
  } catch (error) {
    console.error('Transaction failed:', error.message);
    process.exit(1);
  }
}

main();
