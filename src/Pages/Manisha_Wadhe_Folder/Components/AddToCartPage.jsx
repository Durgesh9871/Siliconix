import React from 'react'
import "./AddToCartPage.css"
import {useState} from "react"
import Navbar from './Navbar'


const AddToCartPage = () => {
    const [product, setProduct] = useState([
     {
        id:1,
        url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464594_sd.jpg",
        name:"Samsung - Galaxy Watch4 Aluminum Smartwatch 44mm BT - Black",
        rating:"4",
        price:"169.99",
     },
     {
        id:2,
        url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505113_sd.jpg",
        name:"Apple - iPhone 14 128GB - Blue (Verizon)",
        rating:"5",
        price:"1619.99",
     },
     {
        id:3,
        url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505113_sd.jpg",
        name:"Apple - iPhone 14 128GB - Blue (Verizon)",
        rating:"5",
        price:"1619.99",
     },
     {
        id:4,
        url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6505/6505113_sd.jpg",
        name:"Apple - iPhone 14 128GB - Blue (Verizon)",
        rating:"5",
        price:"1619.99",
     },
     {
        id:5,
        url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514030_sd.jpg",
        name:"Fitbit - Inspire 3 Health & Fitness Tracker - Midnight Zen",
        rating:"3",
        price:"79.9",
     },
     {
        id:6,
        url:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426002_sd.jpg",
        name:"Fitbit - Sense Advanced Health Smartwatch - Graphite",
        rating:"5",
        price:"159.99",
     },
    ]);
   
   
    const AddLocalstorage = (value) =>{
      let getitem = JSON.parse(localStorage.getItem("CartItem")) || [];
      getitem.push(value)
      localStorage.setItem("CartItem", JSON.stringify(getitem))
    }

  return (
    <div>
      <Navbar />

        <h1>AddToCartPage</h1>
        
       <div className='main-cart'>
        <div className='cart'>
          {
            product.map((productItem,productIndex)=>{
                return(
                    <div >
                        <div className='cart-p'>
                            <div className='img'>
                               <img src={productItem.url} margin="auto" width="150px" height='150px'/>
                            </div>
                            <div className='content'>
                               <p>{productItem.name}</p>
                               <p>Rating:-{productItem.rating}</p>
                               <p style={{marginBottom:"20px"}}>Price :-${productItem.price}</p>
                               <div className='button'><button onClick={()=>{AddLocalstorage(productItem)}}>Add To Cart</button></div>
                              </div>
                              
                           </div>
                    </div>
                )
            })
          }
          </div>
        </div> 
        
    </div>
    
  )
}

export default AddToCartPage