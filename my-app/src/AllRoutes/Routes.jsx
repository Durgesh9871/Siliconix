import {Routes , Route} from "react-router-dom" 
import React from 'react'
import { ProductPage } from "../Page/Durgesh_Folder/Pages/ProductPage" 
import { SinglePageProduct } from "../Page/Durgesh_Folder/Pages/SinglePageProduct" 
import {HomePage} from "../Page/Durgesh_Folder/Pages/homePage"
import { SearchBar } from "../Page/Manisha_Wadhe_Folder/SearchBar"



const AllRoutes = () => {
  return (
    <div >
      <Routes >
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/productLaptop" element={<ProductPage />}></Route>
        <Route path="/productLaptop/:id" element={<SinglePageProduct/>}></Route>
        <Route path="/search" element={<SearchBar />}></Route>
      </Routes>

    </div>
  )
}

export  {AllRoutes}


