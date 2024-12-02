import React, { useContext, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/DashBoard/EmployeeDashboard'
import AdminDashboard from './Components/DashBoard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utilities/LocalStorage'
import { useEffect } from 'react'
import Authprovider, { Authcontext } from './Context/Authprovider'
import { data } from 'autoprefixer'
const App = (idx) => {


  // useEffect(() => {
  //   setLocalStorage()

  //   getLocalStorage()
  // }, [])


  const [user, setUser] = useState(null)
  const [Loggedinuserdata, setLoggedinuserdata] = useState(null)
  const Authdata = useContext(Authcontext)

  useEffect(() => {
    const loggeduser = localStorage.getItem('Loggedinuser')

    if (loggeduser) {
      const userdata = JSON.parse(loggeduser)
      setUser(userdata.role)
      setLoggedinuserdata(userdata.data)
    }
  }, [])





  const handleLogin = (Email, Password) => {
    if (Email === "admin@me.com" && Password === "123") {
      const admin = Authdata.admin.find(admin => admin.email === Email && admin.password === Password)
      // console.log('this is admin');
      setUser('admin')
      setLoggedinuserdata(admin)
      localStorage.setItem('Loggedinuser', JSON.stringify({ role: 'admin', data: admin }))
    }
    else if (Authdata) {
      const employee = Authdata.employees.find(employee => employee.email === Email && employee.password === Password)
      console.log('this is employee');
      if (employee) {
        setLoggedinuserdata(employee)
        setUser('employee')
        localStorage.setItem('Loggedinuser', JSON.stringify({ role: 'employee', data: employee }))
      }
    }
    else if (Email === "" && Password === "") {
      setUser('')
    }
    else {
      alert('invalid login')
    }
  }





  return (
    <div key={idx}>

      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === 'employee' ? <EmployeeDashboard data={Loggedinuserdata} /> : ""}
      {user === 'admin' ? <AdminDashboard data={Loggedinuserdata} /> : ""}
    
    </div>
  )
}

export default App
