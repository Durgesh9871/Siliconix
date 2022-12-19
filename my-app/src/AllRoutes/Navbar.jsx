import React from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-around" , border:"2px solid red" , height: "10vh"}} >
      <Link to="/">Home Page Link</Link>
      <Link to="/productLaptop">Product Page Link</Link>
      <Link to="/SinglePage">Single Page</Link>
    </div>
  )
}

export  {Navbar}
