"use client"

import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Approval = () => {
    const handleToast = () => {
        toast.error('iro lo te', {
            icon: '🙄',
            duration: 2000
        })
    }
  return (
    <div>
      <h1  className='font-semibold cursor-pointer 'onClick={handleToast}>Token Approval</h1>
    </div>
  )
}

export default Approval
