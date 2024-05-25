// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract stakeToken is ERC20 {
    constructor(uint initialSupply) ERC20("RewardToken", "RWD") {
        _mint(msg.sender, initialSupply* 10**18);
    }
}