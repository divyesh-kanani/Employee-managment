import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='scrollbarhide w-52 h-56  bg-[#e3b4ff] rounded-md flex-shrink-0 p-2 overflow-auto'>
            <div className='flex justify-between h-8  ' >

                <h2 className='bg-[#f37a7a] text-white px-2 py-1 w-fit max-w-28 overflow-x-auto rounded-md ' >{data.category}</h2>
                <div className='p-0 m-0 w-fit gap-0'>
                    <p className=' text-xs'>Complated</p>
                    <h3 className='text-[#5c5858] text-sm'>{data.task_date}</h3>
                </div>

            </div>
            <div className="task">
                <h2 className='pt-1 font-mono font-semibold
         text-[#2c1d75]'>
                    {data.task_title}
                </h2>
                <p className='text-[#393737] text-sm h-[7rem]' >{data.task_description}</p>
            </div>
            <div className='flex justify-between pt-2 pl-[6.5rem] '>

                <button className='bg-[#f37a7a] text-white px-2  rounded-md hover:bg-purple-700'>Complited</button>
            </div>

        </div>
    )
}

export default CompleteTask