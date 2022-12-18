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
    <Box className='container'>
        <h1>SearchBar</h1>
        <Box className='input'>
            <input type="text" placeholder='Search Products' onChange={(e)=> 
                 setSearchTitle(e.target.value)} />
       </Box>
      
       <Box id='DisplayDataBox'  style={{border:"1px  green" , height:"auto" , width:"100%"}} >
          <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 4,'2xl': 4,}} spacingY={10}   >
           
        

{loading? (<div className='img'><img src='https://media.tenor.com/wpSo-8CrXqUAAAAj/loading-loading-forever.gif'/></div>) : (
            
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
    </Box>
  )
}

export  {SearchBar}