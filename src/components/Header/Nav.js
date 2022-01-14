import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../images/logo.png";
import './Script';

// website navbar

const Nav = () => {

//   const navbar = document.querySelector('#navbar');
// console.log(navbar);
//   window.addEventListener("scroll",function(){
//     const scrollHeight =  window.pageYOffset;
//     const navbarHeight = navbar?.getBoundingClientRect().height;

//     if(scrollHeight > 500){
//       // navbar?.classList.add('fixed-top')
//     }
//   })

  return (

    <nav className="d-flex justify-content-between mt-3" id="" >
      <aside className="ms-md-5 d-flex align-items-center">
        <img src={logo} alt="" />
        <h2 className="webTitle" style={{ color: "#06043D" }}>
          Passion<span style={{ color: "#146ECF" }}>Education</span>
        </h2>
      </aside>

      <aside className="nav-item">
        <NavLink
          activeStyle={{ color: "#146ECF" }}
          to="/home"
        >
          Home
        </NavLink>

        <NavLink
          activeStyle={{ color: "#146ECF" }}
          to="/about"
        >
          About Us
        </NavLink>

        <NavLink
          activeStyle={{ color: "#146ECF" }}
          to="/service"
        >
          Service
        </NavLink>

        <NavLink
          activeStyle={{ color: "#146ECF" }}
          to="/team"
        >
          Our Team
        </NavLink>

        <NavLink
          activeStyle={{ color: "#146ECF" }}
          to="/contact"
        >
          Contact Us
        </NavLink>

      <Link to="/login">
        Log in ?
      </Link>

      </aside>
    </nav>
  );
};

export default Nav;
