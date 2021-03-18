import React from 'react'
import NavbarOptions from "./NavbarOptions.js"
import "./Navbar.css"
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

function Navbar() {
    return (
        <div className="navbar">
            <h1> I am Navbar</h1>
            {/* navbar options */}
            <NavbarOptions text="My Workouts" />
            <NavbarOptions text="New Workout" />
            <NavbarOptions text="Workouts" />
            <NavbarOptions text="Exercises" />            
            
        </div>
    )
}
    //     <div className= "navBar">
    //         <Nav>
    //             <NavLink to="/">
    //                 <h1> My Workouts</h1>
    //             </NavLink>
    //             <Bars />
    //             <NavMenu>
    //                 <NavLink to="/workouts/new" activeStyle>
    //                     New Workout 
    //                 </NavLink>
    //                 <NavLink to="/workouts" activeStyle>
    //                     Workouts
    //                 </NavLink>
    //                 <NavLink to="/exercises" activeStyle>
    //                     Exercises 
    //                 </NavLink>
    //                 <NavLink to="/sign-up" activeStyle>
    //                     Sign Up
    //                 </NavLink>
    //             </NavMenu>
    //             <NavBtn>
    //                 <NavBtnLink to='/signin'> Sign In</NavBtnLink>
    //             </NavBtn>
    //         </Nav>
    //     </div>
     


export default Navbar
