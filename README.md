# smartContractExample
A smart contract that allows you to create and transfer a dummy digital currency called Magic Coin.

Coding Instructions:

Creating a smart contract
    - `mkdir smartContractExample`
    - `cd smartContractExample`
    - `truffle init`
    - Create and edit contracts/magicCoin.sol. Add functions of your choice.
    - `truffle compile`
    - On a separate terminal, run `ganache-cli`
    - Create and edit migrations/2_deploy_contracts.js
    - In the project directory, run `truffle migrate`
    
Testing a smart contract:
    - create test directory
    - create and edit test/magicCoin.js
    - `truffle test ./test/magicCoin.js`


