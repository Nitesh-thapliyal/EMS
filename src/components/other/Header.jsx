import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Nitesh 👋</span></h1>
        <button className='bg-red-500 text-white  px-5 py-2 rounded-sm text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header