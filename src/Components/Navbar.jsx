import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
 
  return (
    <nav className='flex justify-around bg-slate-700 text-white items-center py-2'>
        <div>
            <span className='font-black sm:text-3xl text-xl mx-9'>iTask</span>
        </div>
     <ul className='flex gap-4 mx-9'>
        <li className=' cursor-pointer hover:font-bold transition-all duration-150 sm:text-xl text-[15px]'><Link to="/Home">Home</Link></li>
        
        <li className=' cursor-pointer hover:font-bold transition-all duration-150 sm:text-xl text-[15px]'><Link to="/">Your Tasks</Link></li>
     </ul>
    </nav>
  )
}

export default Navbar
