import React from 'react'
import Login from '../Components/Auth/Login'

const Header = ({data}) => {

    // console.log(data)

    const logout = () => {
        localStorage.removeItem('Loggedinuser')
        window.location.reload()
    }
    
    return (
        <div className='flex justify-between items-center p-3'>
            <h1 className='text-white text-4xl font-bold' >Hello <br /> <span className='text-purple-600 text-5xl'> {data.first_name}👋 </span> </h1>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700' onClick={() => 
                logout()
                }>Logout</button>
        </div>
    )
}

export default Header
