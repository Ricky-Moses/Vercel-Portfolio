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
  const navigate = useNavigate()
  const location = useLocation()
  const [activeIcon, setActionIcon] = useState(location.pathname)

  useEffect(() => {
    setActionIcon(location.pathname)
  }, [location.pathname])

  const navigatePage = (route) => {
    setActionIcon(route)
    navigate(route)
  }
  return (
    <>
      <div className="mobile-header">
        <div className=" w-full h-full flex items-center justify-center gap-1 !px-2">
          {iconsArr?.map(({ id, Icon, route, label }) => (
            <ExpandableButton
              key={id}
              icon={Icon}
              label={label}
              isActive={activeIcon === route}
              onClick={() => navigatePage(route)}
            />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Header