import { Outlet } from 'react-router-dom'
import Footer from '../comman/footer/Footer'
import Header from '../comman/header/Header'
import React from 'react'

const Theme = () => {
  return (
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Theme