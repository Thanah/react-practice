import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { UseGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar, openSubmenu, closeSubmenu, closeSidebar} = UseGlobalContext();
  return (
    <nav className='nav'>
      <div className="nav-header">
        <ul className="nav-links">
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
