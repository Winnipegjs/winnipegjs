import React from 'react'

const NavBarItem = ({ label, href, active }) => {
  return <li>
    <a href={href} className={active ? "active" : null}>{label}</a>
  </li>
}

export default NavBarItem