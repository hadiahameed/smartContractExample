var magicCoin = artifacts.require("magicCoin");
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const json = require('./../build/contracts/magicCoin.json');
let accounts;
let auction;
let manager;
const interface = json['abi'];
const bytecode = json['bytecode'];
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  receiver = accounts[1];
  auction = await magicCoin.deployed();

});
describe('MagicCoin Smart contract', () => {
  it('Creating a coin:', async () => {
    const auctionManager = await auction.owner.call();
    await auction.create(auctionManager,100);
    const senderBalance = await auction.balances.call(auctionManager);
    assert.equal(100, senderBalance.toNumber(), "Coin Created.")
  });

  it('Transfering coin:', async () => {
    await auction.transfer(receiver,5);
    const receiverBalance = await auction.balances.call(receiver);
    assert.equal(5, receiverBalance.toNumber(), "Coin Transferred.")
  });
});