const ProofOfExistence1 = artifacts.require('./Contracts/ProofOfExistence3.sol');

module.exports = function(deployer) {
    deployer.deploy(ProofOfExistence1);
};