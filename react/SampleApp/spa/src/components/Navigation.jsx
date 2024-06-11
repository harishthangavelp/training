import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <Link to="/home"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/personaldetails"> Personal Details </Link>
        {/* <Link to="/navigation"> Navigation </Link> */}
    </nav>
  )
}

export default Navigation