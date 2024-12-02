import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({ data }) => {




    return (
        <div>
            <div id='tasklist' className='bg-[#00000063] p-3 rounded-md h-64 w-full flex items-center justify-start gap-4 flex-nowrap overflow-x-auto  ' >

            {data.tasks.map((elem)=>{
                if(elem.active){
                    return <AcceptTask key={elem.id} data={elem} />
                }
                else if(elem.completed){
                    return <CompleteTask key={elem.id} data={elem} />
                }
                else if(elem.failed){
                    return <FailedTask key={elem.id} data={elem} />
                }
                else{
                    return <NewTask key={elem.id} data={elem} />
                }
                
            })}







            </div>
        </div>
    )
}

export default Tasklist
