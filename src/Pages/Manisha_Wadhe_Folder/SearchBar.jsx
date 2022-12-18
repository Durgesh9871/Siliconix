import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./SearchBar.css";
import { Box, SimpleGrid } from '@chakra-ui/react';
import { DisplayProductMainData } from '../Durgesh_Folder/Components/DisplayProductMainData';

const SearchBar = () => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(()=>{
        const loadPosts = async ()=>{
            setLoading(true);
            const response = await axios.get('https://long-pear-giraffe-gown.cyclic.app/api/AllProductsData');
            setPost(response.data);
            setLoading(false)
        }
        loadPosts();
    },[]);
  

  return (
    <div className='container'>
        <h1>SearchBar</h1>
        <div className='input'>
            <input type="text" placeholder='Search Products' onChange={(e)=> setSearchTitle(e.target.value)} />
       </div>
       <Box border="2px solid red">
      
          <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 3,'2xl': 3,}} spacingY={10}  >
           
           {/* {productArrayLaptop.length > 0 && productArrayLaptop.map((item)=>{
             return (
           <DisplayProductMainData key= {item.id} id={item.id} src={item.Images} name={item.title} model={item.brand}    price={item.price}    review={item.rating}  realPrice={item.realPrice} isLaptopLoading={isLaptopLoading} allData ={item}/>
           
             )
           })} */}

{loading? (<div className='img'><img src='https://media.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif'/></div>) : (
            // post.map((item)=><h5 key={item.id}>{item.title}</h5>)
            post.filter((value)=>{
                if(searchTitle === ""){
                    return value;
                }else if(value.title.toLowerCase().includes(searchTitle.toLowerCase())){
                    return value;
                }
            })
            .map((item)=>{
                return (
         <DisplayProductMainData key= {item.id} id={item.id} src={item.Images} name={item.title} model={item.brand}    price={item.price}    review={item.rating}  realPrice={item.realPrice} isLaptopLoading={true} allData ={item}/>

                )
            })
            
        )}

 {/* <div key={item.id}>
            //     <img src={item.Images[0].imageFront}/>
            //     <h5 >Name:{item.title}</h5>
            //      <h5>Discount:{item.discount}</h5>
            //      <h5>Price:{item.realPrice}</h5>
            //      <hr></hr>

            // </div> */}
       
       


         </SimpleGrid>
        </Box>
    </div>
  )
}

export  {SearchBar}