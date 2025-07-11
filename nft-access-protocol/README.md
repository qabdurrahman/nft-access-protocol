# NFT Access Protocol

A Solidity-based NFT token gating protocol that restricts access to premium functions based on ERC-721 ownership.

## 🧠 Overview

- **MembershipNFT.sol** — ERC-721 token with on-chain metadata URI, mintable by owner.
- **AccessGate.sol** — Contract with access-restricted logic. Only NFT holders can access specific functions.

## 🚀 Features

- Token-gated access using `balanceOf()`
- Custom access modifier `onlyMember`
- Modular design with clean separation of logic
- Fully tested with Hardhat

## 🧪 Testing

```bash
npx hardhat test
