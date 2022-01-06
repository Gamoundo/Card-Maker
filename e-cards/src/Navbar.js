import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const link = {
        width: '50px',
        padding: '4px',
        margin: '0 6px 6px',
    
        textDecoration: 'none',
        color: 'black',
      }
    return(
        <div className='nav' >
            <NavLink style={link} to='/'>Home</NavLink>
            <NavLink style={link} to='/Cards'>Cards</NavLink>
        </div>
    )
}

export default Navbar;