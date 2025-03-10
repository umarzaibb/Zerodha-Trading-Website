import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from "../src/landingPage/Home/HomePage";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage></HomePage>
  </StrictMode>,
)
