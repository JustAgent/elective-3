require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: process.env.ES,
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000000,
    },
  },
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY}`,
      accounts: [process.env.PK],
    },
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_GOERLI}`,
      accounts: [process.env.PK],
    },
  },
};
