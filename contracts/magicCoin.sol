pragma solidity ^0.4.25;

contract magicCoin {
    address public owner;
    mapping (address => uint) public balances;
    event Delivered(address from, address to, uint amount);

    constructor() public {
        owner = msg.sender;
    }

    //adds balance to the owner's account
    function create (address receiver, uint amount) public {
        require(msg.sender == owner, 'Unauthorized creator.');

        balances[receiver] += amount;
    }

    //transfers coins from owner to receiver
    function transfer (address receiver, uint amount) public {
        require(balances[msg.sender] >= amount, "You don't have enough balance." );

        balances[msg.sender] -= amount;
        balances[receiver] += amount;

        emit Delivered(msg.sender, receiver, amount);
    }
}