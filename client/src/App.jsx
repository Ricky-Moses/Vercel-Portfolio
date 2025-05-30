import { lazy, Suspense, useEffect, useState } from "react"
import CustomCursor from "./Components/CustomCursor"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Layouts
import Header from "./Layouts/Header"
// Pages
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Project = lazy(() => import('./Pages/Project'))
const Contact = lazy(() => import('./Pages/Contact'))
const Blog = lazy(() => import('./Pages/Blog'))
// Animation Component
import Animation from "./Components/Animation"

const App = () => {
  const [tablet, setTablet] = useState(window.innerWidth > 992)

  useEffect(() => {
    const handleResize = () => {
      setTablet(window.innerWidth > 992)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <Header>
          <Animation />
        </Header>,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/project', element: <Project /> },
        { path: '/contact', element: <Contact /> },
        { path: '/blog', element: <Blog /> }
      ]
    }
  ])
  return (
    <>
      {tablet && <CustomCursor />}
      <Suspense fallback={<div className="text-white h-dvh">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App