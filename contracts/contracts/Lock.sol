// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    // uint storeData = 0;
    // string name = "Ade";
    // bool istrue = false;


    uint storeData;

    function setter(uint x) public {
        storeData = x;

    }

    function getter()public view returns(uint){
        return storeData;
}
}