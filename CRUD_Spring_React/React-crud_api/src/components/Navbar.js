import React from 'react'
import { NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 flex items-center px-8">
        <p className='text-white font-bold'>
          <NavLink to="/">Employee Management</NavLink></p>
      </div>
    </div>
  )
}

export default Navbar