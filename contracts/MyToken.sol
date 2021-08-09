//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// https://levelup.gitconnected.com/deploying-smart-contracts-with-hardhat-e1a76212df94

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
  constructor (string memory _name, string memory _symbol) ERC20(_name, _symbol) {
    _mint(msg.sender, 10000);
  }
}
