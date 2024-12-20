import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
// import '../index.css'
const AppLayout = ({children}) => {
  return (
    <div>
      <NavBar />
      <main className=''>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout