var magicCoin = artifacts.require("magicCoin");
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
let accounts;
let magicCoincontract;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  receiver = accounts[1];
  magicCoincontract = await magicCoin.deployed();

});

describe('MagicCoin Smart contract', () => {
  it('Creating a coin:', async () => {
    const owner = await magicCoincontract.owner.call();
    await magicCoincontract.create(owner,100);
    const senderBalance = await magicCoincontract.balances.call(owner);
    assert.equal(100, senderBalance.toNumber(), "Coin Created.")
  });

  it('Transfering coin:', async () => {
    await magicCoincontract.transfer(receiver,5);
    const receiverBalance = await magicCoincontract.balances.call(receiver);
    assert.equal(5, receiverBalance.toNumber(), "Coin Transferred.")
  });
});