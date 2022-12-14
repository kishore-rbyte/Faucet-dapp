require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {

    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/6eU35ojLK-SsaJFx0qI1RPa8wPmNgkGr',
      accounts: ['d40984b4ee6ed8aefe9121bfbab1777f7439acc8f3d02fff43ed57e720ed0ea9']
    },
    mumbai: {
      url:'https://polygon-mumbai.g.alchemy.com/v2/Z2dhBl2k_S-2bamZm444JaXl3mmhGvprs',
      accounts: ['d40984b4ee6ed8aefe9121bfbab1777f7439acc8f3d02fff43ed57e720ed0ea9']
    } 

  }
};
