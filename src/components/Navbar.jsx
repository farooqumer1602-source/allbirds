import React from 'react'
import logo from "../assets/logo.png"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link ,NavLink} from 'react-router-dom';
import Cart from '../pages/Cart';
import useCart from '../hooks/useCart';

const Navbar = () => {
  const {cart} = useCart();
  return (
    <div className='sticky  top-2 z-30'>
      <div className='grid grid-cols-3 lg:bg-red-700 md:bg-amber-600 sm:bg-green-600 sm:w-full bg-white rounded-2xl w-[80%] m-auto shadow-2xl  h-15 px-10'>
          <div className=''>
           <NavLink to={"/"}> <img  className='w-25 h-11' src={logo} alt="" /></NavLink>
          </div>
          <div className='flex justify-center  items-center '>
            <ul className='flex text-[12px] gap-3.5 uppercase'>
              <NavLink to={"/Mens"} className={({isActive})=>
              isActive && "border-b-red-600 border-b"} ><li className="hover:font-semibold hover:scale-105 transition-all duration-300">Men</li></NavLink>
             <NavLink to={"/Womens"} className={({isActive})=>
              isActive && "border-b-red-600 border-b"}> <li className="hover:font-semibold hover:scale-105 transition-all duration-300">Women</li></NavLink>
            </ul>
          </div>
          <div className='flex items-center justify-end '>
            <ul className='flex gap-3.5'>
              <NavLink to={"/"} className={({isActive})=>
              isActive && "border-b-red-600 border-b"}><li className="hover:font-semibold hover:scale-105 transition-all duration-300">Home</li></NavLink>
              <li>About</li>
               <Link to={"/Cart"}> <li className='relative'><LocalMallIcon/>
               {
                cart.length > 0 && (

                  <span className='bg-red-600 w-4 h-4 flex justify-center items-center p-2.5 text-white text-[12px] -top-1  -right-2 rounded-full absolute '>{cart.length}</span>
                )
               }
               </li>
               </Link>
                <li className='justify-center items-center flex '>
                    <SignedOut>
        <SignInButton />               
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
                </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar
 