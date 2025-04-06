import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
// import { useState } from 'react'

function App() {


  return (
    <>
      <div className='fixed bottom-5 right-5 z-1 lg:bottom-15 lg:right-15' >
        <Cart></Cart>
      </div>
      <div className='sticky top-0 z-1 w-full'>
        <Navbar></Navbar>
      </div>
      <div className='max-w-[1320px] m-auto px-4 md:px-4 lg:px-0'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
