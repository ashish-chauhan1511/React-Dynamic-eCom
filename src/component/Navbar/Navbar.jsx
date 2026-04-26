import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar =() => {
     const [menuOpen, setMenuOpen] = useState(false);
    return(
    //    
     <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="logo">Spor<span className="hilit">T</span>z</Link>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li><Link to="">Home</Link></li>
          <li><Link to="">Shop</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Contact</Link></li>
        </ul>

        {/* Right Side */}
        <div className="nav-icons">
          <div className="cart">
            🛒 <span className="cart-count">2</span>
          </div>

          {/* Hamburger */}
          <div
            className="menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>

      </div>
    </nav>
    );
   

}
export default Navbar