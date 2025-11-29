// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./MembershipNFT.sol";

contract AccessGate {
    MembershipNFT public membership;

    constructor(address _nftAddress) {
        membership = MembershipNFT(_nftAddress);
    }

    modifier onlyMember() {
        require(membership.balanceOf(msg.sender) > 0, "Access denied: NFT required");
        _;
    }

    function accessPremiumFeature() public view onlyMember returns (string memory) {
        return "Welcome, NFT holder! You have access.";
    }
}
