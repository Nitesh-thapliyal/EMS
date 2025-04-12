
import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex screen justify-between gap-5'>
        <div className='rounded-xl mt-10 w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semi-bold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl mt-10 w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semi-bold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl mt-10 w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semi-bold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl mt-10 w-[45%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semi-bold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber