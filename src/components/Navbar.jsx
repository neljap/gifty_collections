import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingBag} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='flex justify-between align-middle py-4 px-2'>
        <h2>Logo</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <div>
            <FaShoppingBag />
            <span>0</span>
        </div>
    </div>
  )
}

export default Navbar