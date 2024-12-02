// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovider from './Context/Authprovider.jsx'



// localStorage.clear()
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <div >
      <Authprovider>

        <App />
      </Authprovider>

      

     
    </div>
  // </StrictMode>,
)
