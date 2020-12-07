import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1> My Workouts</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/workouts/new" activeStyle>
                        New Workout 
                    </NavLink>
                    <NavLink to="/workouts" activeStyle>
                        Workouts
                    </NavLink>
                    <NavLink to="/exercises" activeStyle>
                        Exercises 
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'> Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
