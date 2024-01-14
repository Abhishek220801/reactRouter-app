// import React from 'react'
import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet /> {/*dynamically changing part while others remain static*/}
      <Footer/>
    </div>
  )
}

export default Layout
