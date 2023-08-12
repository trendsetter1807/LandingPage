import React from 'react';
import './Navbar.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/LOGO.svg'
// import {ReactComponent as MySVGIcon} from './chevron-down-solid.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">
        <img src={logo} alt="Logo" />
        </a>
       {/* <span className="t"> <MySVGIcon/></span> */}
      </div>
      <ul className="nav-links">
      <button type="submit" className="xyz"><i className="fa fa-search"></i></button>
        <li><a href="#">Log In</a></li>
        <li ><a href="#" className='blueBtn'>Join Now</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;