import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { ThemeProvider } from "styled-components"

import { Home } from "./pages/Home.jsx"
import { theme } from "./style/theme.js"
import { GlobalStyle } from "./style/global.js"


const router = createBrowserRouter([

  {
    path: "/",

    element: <Home/>


  }


])

export function App() {
  return (
    <ThemeProvider theme={theme}> 
      
      <RouterProvider router={router} /> 
      <GlobalStyle/>
    
    
    </ThemeProvider>
  )
}
