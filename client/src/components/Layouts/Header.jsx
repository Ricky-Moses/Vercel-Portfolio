import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const routes = ['/', '/about', '/skill', '/project', '/contact']
  const title = ['Home', 'About', 'Skill', 'Project', 'Contact']

  const currentIndex = routes.indexOf(location.pathname)
  const currentTitle = title[currentIndex] || ''

  const handleClickLeft = () => {
    if(currentIndex > 0) navigate(routes[currentIndex - 1])
  }
  const handleClickRight = () => {
    if(currentIndex < routes.length - 1) navigate(routes[currentIndex + 1])
  }

  return (
    <>
      <div className='header w-dvw h-fit flex items-center justify-between !py-1 !px-5'>
        <div className="logo">Rm</div>
        <div className="menu flex items-center gap-2">
          <div className="cursor-pointer" onClick={handleClickLeft}>───</div>
          <div className="menu-link w-13 xs:w-16 sm:w-19 md:w-19 lg:w-20 text-center">
            <div key={currentTitle} className="text-link">{currentTitle}</div>
          </div>
          <div className="cursor-pointer" onClick={handleClickRight}>───</div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Header