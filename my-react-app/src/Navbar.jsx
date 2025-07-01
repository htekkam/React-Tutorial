

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navSection">
        <ul>
            <Link to="/first"><li>First Page</li></Link>
            
            <Link to="/second"><li>Second Page</li></Link>
            
            <Link to="/third"> <li>Third Page</li></Link>
           
            <Link to="/fourth"><li>Fourth page</li></Link>

            <Link to="user-details"><li>User Details</li></Link>
            
        </ul>
      </div>
    </div>
  )
}

export default Navbar
