"use client"
import React from 'react'
import toast,{ Toaster } from 'react-hot-toast'

const Withdraw = () => {

    const handleToast = () => {

    toast.error('pls enter a valid number')
    }
  return (
    <div>
      <h1> Amount to Withdraw</h1>
      <input type='text'/>

    <h2 className='ml-10 cursor-pointer font-semibold mt-7' onClick={handleToast}> Withdraw your stake</h2>
    <Toaster/>
,    </div>
  )
}

export default Withdraw
