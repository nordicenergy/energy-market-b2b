require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: '8545',
      network_id: '*'
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNENOMIC,
          `https://rinkeby.infura.io/v3/1fda4e6f00554d6abb0a77319097c08c`
        );
      },
      network_id: '4',
      gasPrice: 20000000000, // 20 GWEI
      gas: 3716887 // gas limit, set any number you want
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
