pragma solidity ^0.4.25;

contract magicCoin {
    address owner;
    mapping (address => uint) public balances;
    event Delivered(address from, address to, uint amount);

    constructor() public {
        owner = msg.sender;
    }

    function create (address receiver, uint amount) public {
        require(msg.sender == owner, 'Unauthorized creator.');
        balances[receiver] += amount;
    }

    function transfer (address receiver, uint amount) public {
        require(balances[receiver] >= amount, "You don't have enough balance." );
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Delivered(msg.sender, receiver, amount);
    }
}