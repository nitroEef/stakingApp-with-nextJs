
const hre = require("hardhat");

async function main() {
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy("0xf97fEbAaC7e1e34981Ab6531c3025E095e67CA95", "0xf001c01E763f554611f7DfDe7557a78E3f77e900"); // deploy and reward

  console.log("Staking contract deploy to:", staking.target);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0xd5f920d11BdC624E5Ea62Cd5E99185e815878f2C // staking