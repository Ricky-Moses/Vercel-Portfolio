import { lazy, Suspense } from "react"
import CustomCursor from "./Components/CustomCursor"
import { RouterProvider, Routes, Route, createBrowserRouter } from 'react-router-dom'
import Header from "./Layouts/Header"
// Pages
const Home = lazy(() => import('./Pages/Home'))
const About = lazy(() => import('./Pages/About'))
const Skill = lazy(() => import('./Pages/Skill'))
const Project = lazy(() => import('./Pages/Project'))
const Contact = lazy(() => import('./Pages/Contact'))
// Animation Component
import Animation from "./Components/Animation"

const App = () => {
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
        { path: '/skill', element: <Skill /> },
        { path: '/project', element: <Project /> },
        { path: '/contact', element: <Contact /> },
      ]
    }
  ])
  return (
    <>
      <CustomCursor />
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App