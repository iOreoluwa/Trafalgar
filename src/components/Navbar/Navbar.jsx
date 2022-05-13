import React, {useState} from 'react';
// import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import Logo from "../../assets/Logo.png"


//fragments
const Menu = () => (
  <>
    <ul>
      <li>Home</li>
      <li>Find a doctor</li>
      <li>Apps</li>
      <li>Testimonials</li>
      <li>About us</li>
    </ul>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar container'>
        <div className="nav_logo">
          <img src={Logo} alt="" srcset="" />  
        </div>
        <div className="nav_items">
					<Menu />
        </div>
        <div className='nav_items_menu'>
          {/* if toggle menu, to close the menu */}
          {toggleMenu
            ? <RiCloseLine color="#ccc" size={27} onClick={() => setToggleMenu(false)} />
            //if it is not currently open, it will open it
            : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="nav_items_res scale-up-center">
              <Menu />  
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar;
