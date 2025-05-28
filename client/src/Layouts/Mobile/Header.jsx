import { FaHome } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { PiPersonSimpleSkiLight } from "react-icons/pi";
import { GiFilmProjector } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import ExpandableButton from "../../Components/ExpandableButton";

// Icons
const iconsArr = [
  { id: 'home', Icon: FaHome, route: '/', label: 'Home' },
  { id: 'about', Icon: FaUserCog, route: '/about', label: 'About' },
  { id: 'skill', Icon: PiPersonSimpleSkiLight, route: '/skill', label: 'Skill' },
  { id: 'project', Icon: GiFilmProjector, route: '/project', label: 'Project' },
  { id: 'contact', Icon: MdConnectWithoutContact, route: '/contact', label: 'Contact' },
]
const Header = () => {
  return (
    <>
      <div className="mobile-header">
        
      </div>
      <Outlet />
    </>
  )
}

export default Header