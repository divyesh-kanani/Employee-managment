import React from 'react'
import Header from '../../Others/Header'
import TasklistNumbers from '../../Others/TasklistNumbers'
import Tasklist from '../../TaskList/Tasklist'
import Declaration from 'postcss/lib/declaration'

const EmployeeDashboard = ({data}) => {

   
    


    return (
        <div className='p-9 h-screen bg-[#2c2a2a]'>
            {/* <h1>Employee Dashboard</h1> */}
            <Header data = {data} />
            <TasklistNumbers data={data} />
            <Tasklist data = {data} />


        </div>
    )
}

export default EmployeeDashboard
