import React from 'react';
import './NavBar.css';

const NavBar = ({text}) => {

  return (
    <div>
   
        <button class="boton-menu boton-categoria active" >{text}</button>       
    
    </div>
  )
}

export default NavBar;