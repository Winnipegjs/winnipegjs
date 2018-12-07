import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
  return <ul id="nav">
    <NavBarItem href="/" label="Home" active />
    <NavBarItem href="/events" label="Events" />
    <NavBarItem href="/forum" label="Forum" />
    <NavBarItem href="/resources" label="Resources" />
  </ul >
}

export default NavBar