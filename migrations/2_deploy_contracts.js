var magicCoin = artifacts.require('magicCoin');

module.exports = function(deployer) {
    deployer.deploy(magicCoin);
}