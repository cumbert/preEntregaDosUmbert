import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/ravennaJeans.png';
import './NavBar.css';

const NavBar = ({ text }) => {

  return (
    <nav className='navbar'>
      <div>
        <img className='logo' src={logo} alt="ravenna_jeans_logo" />
      </div>
      <div className='menu-botones'>
        <button className="boton-menu active" >HOME</button>
        <button className="boton-menu" >JEANS</button>
        <button className="boton-menu" >REMERAS</button>
        <button className="boton-menu" >CAMISAS</button>
      </div>

      <CartWidget />

    </nav>
  )
}

export default NavBar;