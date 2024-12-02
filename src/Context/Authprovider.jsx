import React, {  useState, createContext   } from 'react'
import { getLocalStorage } from '../Utilities/LocalStorage'
import { useEffect } from 'react'

export const Authcontext = createContext()

const Authprovider = ({ children ,idx }) => {




  const [Userdata, setUserdata] = useState(null)
  
  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUserdata({ employees, admin })
  }, [])
  


  return (
    
    <div  key={idx}>
      <Authcontext.Provider value={Userdata }>
      {children}
      </Authcontext.Provider>
    </div>
    
  )
}

export default Authprovider
