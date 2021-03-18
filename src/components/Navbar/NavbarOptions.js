import React from 'react'
import './NavbarOptions.css'

function NavbarOptions({ active, text}) {
    return (
        <div>
            <div className={`NavbarOption ${active && 'NavbarOption--active'}`}>
          
          <h2>{text}</h2>  
        </div>
            
        </div>
    )
}

export default NavbarOptions
