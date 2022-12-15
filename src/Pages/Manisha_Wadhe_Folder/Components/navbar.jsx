import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {

    const Navigate = useNavigate();

  return (
    <div style={{width:"100%",
    backgroundColor:"gray", 
    height:"50px", 
    justifyContent:"space-between",
    display:"flex",
    color:"white"}}>

        <div>Product</div>
        <div onClick={()=>{Navigate("/cart")}}>CART<sup>4</sup></div>
    </div>
  )
}

export default Navbar;

console.log('hello')
