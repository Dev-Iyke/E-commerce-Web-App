import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify';
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