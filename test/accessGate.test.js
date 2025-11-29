const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFT Access Protocol", function () {
    let owner, user;
    let MembershipNFT, AccessGate, nft, gate;

    beforeEach(async () => {
        [owner, user] = await ethers.getSigners();

        // Deploy the NFT contract with initial owner
        MembershipNFT = await ethers.getContractFactory("MembershipNFT");
        nft = await MembershipNFT.deploy(owner.address);
        await nft.deployed();

        // Deploy the AccessGate contract
        AccessGate = await ethers.getContractFactory("AccessGate");
        gate = await AccessGate.deploy(nft.address);
        await gate.deployed();
    });

    it("should deny access if user has no NFT", async () => {
        await expect(
            gate.connect(user).accessPremiumFeature()
        ).to.be.revertedWith("Access denied: NFT required");
    });

    it("should allow access after NFT is minted", async () => {
        await nft.mintNFT(user.address, "ipfs://example-uri");
        const message = await gate.connect(user).accessPremiumFeature();
        expect(message).to.equal("Welcome, NFT holder! You have access.");
    });
});
