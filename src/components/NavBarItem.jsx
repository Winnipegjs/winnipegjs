import React from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = ({ label, href, active }) => {
  return <li>
    <Link to={href} className={active ? "active" : null}>{label}</Link>
  </li>
}

export default NavBarItem