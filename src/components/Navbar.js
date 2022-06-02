import React from "react"
import Logo from "../images/d2.png"

export default function Navbar(){
    return(
        <nav>
            <img
            src={Logo}
            alt="sandal Logo" 
            className="nav-icon"
            />
            <h3 className="nav-logo_text">React facts</h3>
      
       
        </nav>
    )
}