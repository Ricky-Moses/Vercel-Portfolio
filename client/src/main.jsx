import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Sass
import './main.scss'
import FetchedDataProvider from './Context/UseContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchedDataProvider>
      <App />
    </FetchedDataProvider>
  </StrictMode>
)
