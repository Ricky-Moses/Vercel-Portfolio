import { useEffect, useState } from "react"
import Mobile from './Mobile/Header'
import Desktop from './Desktop/Header'

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992)

    useEffect(() => {
        const handleResponsive = () => {
            setIsMobile(window.innerWidth < 992)
        }

        window.addEventListener('resize', handleResponsive)

        return () => window.removeEventListener('resize', handleResponsive)
    }, [])
  return isMobile ? <Mobile /> : <Desktop />

}

export default Header