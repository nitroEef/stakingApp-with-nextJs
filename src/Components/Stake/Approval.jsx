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
      <h1 onClick={handleToast}>Approval</h1>
    </div>
  )
}

export default Approval
