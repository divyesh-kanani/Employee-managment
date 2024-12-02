import React from 'react'

const TasklistNumbers = ({data}) => {
    return (
        <div className='flex justify-between items-center p-3'>
            <div className='w-[25vw] h-[25vh] flex flex-col justify-center items-center bg-purple-600 text-white  rounded-md  mt-5 hover:bg-purple-700'>
                <h1 className='text-6xl font-bold'>{data.tasksCounts.newTask}</h1>
                <p className='text-2xl'>New Tasks</p>
            </div>
            <div className='w-[25vw] h-[25vh] flex flex-col justify-center items-center bg-purple-600 text-white  rounded-md ml-20 mt-5 hover:bg-purple-700'>
                <h1 className='text-6xl font-bold'>{data.tasksCounts.completed}</h1>
                <p className='text-2xl'>Completed Tasks</p>
            </div>
            <div className='w-[25vw] h-[25vh] flex flex-col justify-center items-center bg-purple-600 text-white  rounded-md ml-20 mt-5 hover:bg-purple-700'>
                <h1 className='text-6xl font-bold'>{data.tasksCounts.active}</h1>
                <p className='text-2xl'>Accepted Tasks</p>
            </div>
            <div className='w-[25vw] h-[25vh] flex flex-col justify-center items-center bg-purple-600 text-white  rounded-md ml-20 mt-5 hover:bg-purple-700'>
                <h1 className='text-6xl font-bold'>{data.tasksCounts.failed}</h1>
                <p className='text-2xl'>Failed Tasks</p>
            </div>
        </div>
    )
}

export default TasklistNumbers
