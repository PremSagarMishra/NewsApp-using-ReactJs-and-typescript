import React, { useState } from 'react'
import "./Style.css"
import { log } from 'console';

const Navbar:React.FC = () => {

    const [loggedIn,setLoggedIn]=useState<true | false>(true);
  return (
    <div className='navbar'>
        <div className='logo'>News Apps</div>
        <button className={loggedIn? "logout-btn":"login-btn"} >{
            loggedIn? "Logout" : "Login"}</button>
            
    </div>
  )
}

export default Navbar