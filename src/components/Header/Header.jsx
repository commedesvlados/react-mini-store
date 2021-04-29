import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

const Header = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/" className="logo text-dark" >ReStore</Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default Header;