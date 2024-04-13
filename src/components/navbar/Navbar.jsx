import React from 'react'

function Navbar() {
  return (
    <div className='h-12 bg-[#003580] flex justify-center '>
        <div className=' w-full max-w-5xl text-white flex items-center justify-between'>
<span className='text-2xl'>FireBooking</span>
<div className=''>
    <button className='ml-5 border-none py-2 px-3 text-[#003580] bg-white'>Register</button>
    <button className='ml-5 border-none py-2 px-3 text-[#003580] bg-white'>Login</button>
</div>
        </div>
    
        
        
    </div>
  )
}

export default Navbar