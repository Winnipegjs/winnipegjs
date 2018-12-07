import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarItem = ({ label, href }) => {
  return (
    <li>
      <NavLink to={href} activeClassName="active" exact>
        {label}
      </NavLink>
    </li>
  );
};

export default NavBarItem;
