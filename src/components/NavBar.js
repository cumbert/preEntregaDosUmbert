import React from 'react';
import './NavBar.css';

const NavBar = ({text}) => {

  return (
    <div>   
        <button className ="boton-menu boton-categoria" >{text}</button>           
    </div>
  )
}

export default NavBar;