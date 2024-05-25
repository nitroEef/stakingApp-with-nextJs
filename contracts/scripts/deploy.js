const hre = require("hardhat");

async function main() {
  const StakeToken = await hre.ethers.getContractFactory("stakeToken");
  const stakeToken = await StakeToken.deploy(1000);

  console.log("StakeToken contract deploy to:", stakeToken.target);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
