# Solidity & Ethereum in React (Next JS): The Complete Guide

[Tutorial](https://www.udemy.com/course/solidity-ethereum-in-react-next-js-the-complete-guide/) 


## git commands
truffle migrate --reset
truffle console

## truffle console
```js
const instance = await Faucet.deployed()

// add Funds
instance.addFunds({value: "1000000000000000000"})
// from specific account, otherwise defaults to accounts[0]
instance.addFunds({value: "2000000000000000000", from: accounts[1]})

// same as above
// data: "0xa26759cb" = addFunds()
// web3.eth.sendTransaction({from: accounts[0], to: "0x570113B91702Aa34bcF7fdc05925F663289C5F9a", data: "0xa26759cb", value: "1000000000000000000"})

instance.getFunderAtIndex(0)
instance.getAllFunders()

```







## old-code-with-notes
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    // this is a special function
    // it's called when you make a transaction that doesn't specify function name to call

    // external functions are part of the contract interface, which means they can be called via contracts and other transactions
    
    receive() external payable {}
    function addFunds() external payable {}

    // Transactions - can generate state changes and require gas fees    
    // JSON-RPC http calls - talk to node on the network to make a transaction

    // pure, view - read-only call, no gas fee
    // view - indicates that the function will not alter the storage state in any way 
    // pure - even more strict, it won't even read the storage state

    // private vs internal
    // private -> can be accessible only within the smart contract
    // internal -> can be accessible within smart contract and also derived smart contracts (less strict than private)

    // mapping(key => value)

}