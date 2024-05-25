const hre = require("hardhat");

async function main() {
  const RewardToken = await hre.ethers.getContractFactory("RewardToken");
  const reward = await RewardToken.deploy(1000000);

  console.log("RewardToken contract deploy to:", reward.target);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });