require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {

    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/6eU35ojLK-SsaJFx0qI1RPa8wPmNgkGr',
      accounts: ['']
    },
    mumbai: {
      url:'https://polygon-mumbai.g.alchemy.com/v2/Z2dhBl2k_S-2bamZm444JaXl3mmhGvprs',
      accounts: ['']
    } 

  }
};
