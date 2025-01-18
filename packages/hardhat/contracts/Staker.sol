// SPDX-License-Identifier: MIT
pragma solidity 0.8.20; //Do not change the solidity version as it negatively impacts submission grading

import "hardhat/console.sol";
import "./ExampleExternalContract.sol";

/// @dev Allows users to withdraw only their own staked balance after the deadline if withdrawals are open.
contract Staker {
    ExampleExternalContract public exampleExternalContract;

    constructor(address exampleExternalContractAddress) {
        exampleExternalContract = ExampleExternalContract(exampleExternalContractAddress);
    }

    // Collect funds in a payable `stake()` function and track individual `balances` with a mapping:
    // (Make sure to add a `Stake(address,uint256)` event and emit it for the frontend `All Stakings` tab to display)

    // After some `deadline` allow anyone to call an `execute()` function
    // If the deadline has passed and the threshold is met, it should call `exampleExternalContract.complete{value: address(this).balance}()`

    // If the `threshold` was not met, allow everyone to call a `withdraw()` function to withdraw their balance

    // Add a `timeLeft()` view function that returns the time left before the deadline for the frontend

    // Add the `receive()` special function that receives eth and calls stake()
    mapping ( address => uint256 ) public balances;

    uint256 public constant threshold = 0.05 ether;
    uint256 public deadline = block.timestamp + 72 hours; //tracks the deadline for staking
    bool public openForWithdraw; //indicates if a user can withdraw funds


    event Stake(address indexed user, uint256 amount); // logs staking
    event Execute(bool success, uint256 balance); // logs execution
    modifier notCompleted() {
        require(!exampleExternalContract.completed(), "Operation not allowed; contract already completed.");
        _;
    }

    function stake() public payable {
        require(msg.value > 0, "Must stake a positive amount");

        // Update user's balance and total staked amount
        balances[msg.sender] += msg.value;

        //Emit an event for transparency
        emit Stake(msg.sender, msg.value);
    }
    function execute() public notCompleted {
        require(block.timestamp >= deadline, "Deadline not reached");
        require(!exampleExternalContract.completed(), "Already executed");

        if (address(this).balance >= threshold) {
            exampleExternalContract.complete{value: address(this).balance}();
        } else {
        openForWithdraw = true;
        emit Execute(false, address(this).balance);
        }
    }

    //Allows user to withdraw their funds
    function withdraw() public notCompleted {
        require(block.timestamp >= deadline, "Deadline not reached");
        require(openForWithdraw, "Withdrawals not allowed");
        uint256 userBalance = balances[msg.sender];
        require(userBalance > 0, "No balance to withdraw");

        balances[msg.sender] = 0;
        (bool sent, ) = msg.sender.call{value: userBalance}("");
        require(sent, "Failed to send Ether");   
    }
    // Returns how much time is left
    function timeLeft() public view returns (uint256) {
        if (block.timestamp >= deadline) {
            return 0;
        } else {
            return deadline - block.timestamp;
        }
    }
    // Accepts ETH sent to the contract and calls stake() to update balances
    receive() external payable {
        if (exampleExternalContract.completed() || openForWithdraw) {
        revert("Contract is finalized; cannot accept new funds.");
        }
        stake();
    }
}