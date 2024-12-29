import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Search from './Search'
import { ToastContainer, toast } from 'react-toastify';
// import '../index.css'
const AppLayout = ({children}) => {
  return (
    <div className=''>
      <NavBar />
      <main className='max-w-[1440px] mx-auto'>
        {children}
      </main>
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default AppLayout