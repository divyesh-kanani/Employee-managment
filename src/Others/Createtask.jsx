/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'

const Createtask = (idx) => {

    const [Tasktitle, setTasktitle] = useState('')
    const [Taskdiscription, setTaskdiscription] = useState('')
    const [Taskdate, setTaskdate] = useState('')
    const [Assigneto, setAssigneto] = useState('')
    const [Catagory, setCatagory] = useState('')

    const [Task, setTask] = useState([])

    const submithandler = (e) => {
        e.preventdefault()
        // console.log(Tasktitle, Taskdiscription, Taskdate, Assigneto, Catagory)
          setTask({Tasktitle, Taskdiscription, Taskdate, Assigneto, Catagory,active:false,NewTask:true,FailedTask:false})
          console.log(Task)

    }


    return (
        <div id={idx}>
            <div className=' px-5 py-[14px] '>
                <form onSubmit={(e) => { submithandler(e) }} className='flex  flex-wrap gap-6 bg-gray-800 p-6 rounded-lg shadow-lg'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-medium'>Task</h3>
                        <input
                            value={Tasktitle}
                            onChange={(e) => { setTasktitle(e.target.value) }}
                            type="text"
                            placeholder='Task Name'
                            className='bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'

                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-medium'>Description</h3>
                        <textarea
                            value={Taskdiscription}
                            onChange={(e) => { setTaskdiscription(e.target.value) }}
                            placeholder='enter description'
                            className='bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 h-24'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-medium'>Date</h3>
                        <input
                            value={Taskdate}
                            onChange={(e) => { setTaskdate(e.target.value) }}
                            type="date"
                            className='bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-medium'>Assign to</h3>
                        <input
                            value={Assigneto}
                            onChange={(e) => { setAssigneto(e.target.value)} }
                            type="text"
                            placeholder='enter name'
                            className='bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-white font-medium'>Priority</h3>
                        <input
                             value={Catagory}
                            onChange={(e) => { setCatagory(e.target.value) }}
                            type="text"
                            placeholder='enter priority'
                            className='bg-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                    <button type='submit' className='self-end px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
                        Add Task
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Createtask
