import React from 'react'
import StakedAmount from './StakedAmount'
import RewardRate from './RewardRate'
import EarnedReward from './EarnedReward'
import StakeToken from '../stakeToken/StakeToken'
import TokenApproval from '../stakeToken/TokenApproval'
import Stake from '../Stake/Stake'
import Approval from '../Stake/Approval'
import Withdraw from '../Withdraw/Withdraw'
import Footer from '../footer/Footer'

const DisplayPanel = () => {
  return (
   <div className='mt-20'>
     <div className='flex justify-around'>
      <div className='text-4xl font-bold'>
        <h1>Connected Account</h1>
      </div>

      <div className=''>
        <h2 className='text-4xl font-bold'>Connected Account</h2>
        <p className='text-center mt-3  text-2xl'>Unsupported</p>
      </div>
    </div>

    <div className='flex justify-around px-40 mt-20'>
<StakedAmount/>
<RewardRate/>
<EarnedReward/>
    </div>

    <div className='flex justify-around mt-20'>
      <StakeToken/>
      <TokenApproval/>
    </div>

    <div className='flex justify-around mt-10'>
      <Stake/>
      <Approval/>
    </div>


    <div className='ml-80 mt-20'>
      <Withdraw/>
    </div>

    <div>
      <Footer/>
    </div>
   </div>
  )
}

export default DisplayPanel