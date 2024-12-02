// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { Authcontext } from '../Context/Authprovider'


const Alltask = () => {

    const Authdata = useContext(Authcontext)
    // console.log(Authdata)

    return (
        
        <div key={Authdata.employees.id}>
        <div  className='bg-gray-700 p-3 mx-5  rounded-md flex justify-between items-center' >
                <h2 className='w-[25%]' >Name</h2>
                <h4 className='w-[25%]' >NewTask</h4>
                <h5 className='w-[25%]' >Actived Task</h5>
                <h5 className='w-[25%]' >Completed</h5>
                <h5  >Failed</h5>
            </div>
                < div className='bg-[#2c2a2a] p-5 rounded-md overflow-auto h-52 scrollbarhide' >
            {Authdata.employees.map(function (elem) {
                // console.log(elem.tasksCounts);

                return <div key={elem.id} className='bg-gray-700 p-3 mb-3 rounded-md flex justify-between items-center' >
                    <h2 className='w-[25%]' >{elem.first_name}</h2>
                    <h4 className='w-[25%]' >{elem.tasksCounts.newTask}</h4>
                    <h5 className='w-[25%]' >{elem.tasksCounts.active}</h5>
                    <h5 className='w-[25%]' >{elem.tasksCounts.completed}</h5>
                    <h5  >{elem.tasksCounts.failed}</h5>
                </div>
            })}

        </div>
        </div>
    )
}

export default Alltask
