// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Staking is ReentrancyGuard {
    IERC20 public s_stakingToken;
    IERC20 public s_rewardToken;

    uint public constant REWARD_RATE=1e18;
    uint private totalStakedTokens;
    uint public rewardPerTokenStored;
    uint public lastUpdateTime;

    mapping(address=>uint) public stakedBalance;
    mapping(address=>uint) public rewards;
    mapping(address=>uint) public userRewardPerTokenPaid;

    event Staked(address indexed user, uint256 indexed amount);
    event Withdrawn(address indexed user, uint256 indexed amount);
    event RewardsClaimed(address indexed user, uint256 indexed amount);

    constructor(address stakingToken, address rewardToken) {
        // IERC20 public s_stakingToken;
        // IERC20 public s_rewardToken;

        s_stakingToken=IERC20(stakingToken);
        s_rewardToken=IERC20(rewardToken);        
    }
    function rewardPerToken() public view returns(uint) {

        if(totalStakedTokens == 0) {
            return rewardPerTokenStored;
        }
        uint totalTime = block.timestamp - lastUpdateTime;
        uint totalRewards = REWARD_RATE *totalTime;
        return rewardPerTokenStored + totalRewards / totalStakedTokens;

    }

    function earned(address account) public view returns(uint) {
        return stakedBalance[account] * (rewardPerToken() -userRewardPerTokenPaid[account] + rewards[account]);
    }

    modifier updateReward(address account) {
        rewardPerTokenStored = rewardPerToken();
        lastUpdateTime = block.timestamp;
        rewards[account] = earned(account);
        userRewardPerTokenPaid[account] = rewardPerTokenStored;
        _;
    }

     function stake(uint amount) external updateReward(msg.sender) {
        require((amount > 0, "Amound must be greater than zero"));
        totalStakedTokens+=amount
        stakedBalance[msg.sender]+=amount;
        emit Staked(msg.sender, amount);
        bool success = s_stakingToken.transferFrom(msg.sendr, address(this), amount);
        require(success, "transfer failed");

}

    function getreward() external nonReentrant updateReward (msg.sender) {
        unit reward = rewards [msg.sender];
        require(reward>=0, "no reward to claim");
        rewards[msg.sender] = 0;

        emit RewardsClaimed(msg.sender, reward)

        bool success= s_rewardToken.transfer(msg.sender, reward);
        require(success, "transfer failed")
    }
}