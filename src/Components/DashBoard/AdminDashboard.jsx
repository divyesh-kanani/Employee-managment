import React from 'react'
import Header from '../../Others/Header'
import Tasklist from '../../TaskList/Tasklist'
import Createtask from '../../Others/Createtask'
import Alltask from '../../Others/Alltask'

const AdminDashboard = ({data,idx}) => {
    
    
    return (
        <div key={idx}>
            <div  className='h-screen w-full bg-[#2c2a2a]'>
                <Header data = {data}/>
                <Createtask/>


                <div className='mx-5'>

                   <Alltask/>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
