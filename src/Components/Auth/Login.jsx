import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Login = (props) => {

    // console.log(props.handleLogin);
    
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        
        props.handleLogin(email, password)
        setEmail('')
        setPassword('')
    }




    return (
        <div className='flex justify-center items-center h-screen w-screen bg-gray-900'>
            <div className='border border-gray-700 rounded-lg shadow-2xl bg-gray-800 p-8 w-96'>
                <form className='flex flex-col justify-center items-center gap-6' onSubmit={(e) => {
                    submitHandler(e)
                }} >

                    <h2 className='text-2xl font-bold text-white mb-2'>Login</h2>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Enter Your Email'
                        className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md 
                        text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                    />
                    <input
                        required
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        type="password"
                        placeholder='Enter Your Password'
                        className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md 
                        text-white placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                    />
                    <button
                        type='submit'
                        className='w-full bg-purple-600 text-white py-2 px-4 rounded-md 
                        hover:bg-purple-700 hover:shadow-lg
                        transition-all duration-200 font-medium'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired
}

export default Login
