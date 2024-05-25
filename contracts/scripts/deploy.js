const hre = require ("hardhat");

async function main() {
    const StakeToken = await hre.ethers.getContractFactory("stakeToken");
    const stakeToken = await StakeToken.deploy(100);
}