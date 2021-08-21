import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <h1 className="heading">Lorem ipsum</h1>
             <ul>
            <li>
              <NavLink to="/" style={{textDecoration: 'none',color: "grey"}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/about" style={{textDecoration: 'none',color: "grey"}}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/service" style={{textDecoration: 'none',color: "grey"}}>Cuisine</NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{textDecoration: 'none',color: "grey"}}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{textDecoration: 'none',color: "grey"}}>Contact</NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{textDecoration: 'none',color: "grey"}}>Book</NavLink>
            </li>
          </ul>
          <button className="btn">Cart</button>
        </div>
    )
}

export default Sidebar
