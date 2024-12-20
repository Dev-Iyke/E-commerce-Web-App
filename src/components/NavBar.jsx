import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { RocketIcon } from '@radix-ui/react-icons'
import { ShoppingCartIcon } from 'lucide-react'

const NavBar = () => {
  const [productsSectionClicked, setProductsSectionClicked] = useState(false)
  return (
    <header className='shadow-md py-4 sm:py-6 fixed w-full scroll-mb-24 z-10 bg-[#F2F0F1]'>
      <div className='flex items-center justify-between w-[95%] md:w-[90%] lg:w-[85] mx-auto'>
        <a href="/" className='font-integral_bold text-3xl'>
          SHOP.CO
        </a>
        <nav className='hidden md:flex items-center gap-6'>
          <NavLink 
            to="/" 
            onClick={() => setProductsSectionClicked(false)}
            className={({ isActive }) =>
              isActive && !productsSectionClicked ? 'border-b-2 border-blue-500' : ''
            }
          >
            Home
          </NavLink>
          <a 
            href="#products" 
            onClick={() => setProductsSectionClicked(true)}
            className={`${productsSectionClicked ? 'border-b-2 border-blue-500' : ''}`}
            
          >
            Products
          </a>
          <NavLink 
            to="/checkout" 
            onClick={() => setProductsSectionClicked(false)}
            className={({ isActive }) =>
              isActive && !productsSectionClicked ? 'border-b-2 border-blue-500' : ''
            }
          >
            Checkout
          </NavLink>
        </nav>
        <div className="md:flex hidden w-[30%] lg:w-full max-w-sm items-center space-x-2 ">
          <Input type="text" placeholder="Search for products" />
          <Button type="submit"> Search <RocketIcon /></Button>
        </div>
        <NavLink to='/checkout'>
          <ShoppingCartIcon />
        </NavLink>
      </div>
    </header>
  )
}

export default NavBar