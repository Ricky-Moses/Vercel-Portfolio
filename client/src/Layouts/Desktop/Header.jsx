import { FaHome } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { GiFilmProjector } from "react-icons/gi";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiBloggerFill } from "react-icons/ri";
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import ExpandableButton from "../../Components/ExpandableButton";

// Icons
const iconsArr = [
    { id: 'home', Icon: FaHome, route: '/', label: 'Home' },
    { id: 'about', Icon: FaUserCog, route: '/about', label: 'About' },
    { id: 'project', Icon: GiFilmProjector, route: '/project', label: 'Project' },
    { id: 'contact', Icon: MdConnectWithoutContact, route: '/contact', label: 'Contact' },
    { id: 'blog', Icon: RiBloggerFill, route: '/blog', label: 'Blog' },
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
            <div className="desktop-header h-dvh">
                <div className=" w-full h-full flex flex-col items-center justify-center gap-10 !px-2">
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