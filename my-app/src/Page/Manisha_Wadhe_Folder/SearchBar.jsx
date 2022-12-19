import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./SearchBar.css";
import { Box, Input, SimpleGrid, Spinner } from '@chakra-ui/react';
import { DisplayProductMainData } from '../Durgesh_Folder/Components/DisplayProductMainData';
import { SearchIcon } from '@chakra-ui/icons';
import { LoadingIndicator } from './LoadingIndicator';

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
    },[])

  

  return (
    <Box className='container'>
        <Box className='input' >
            <SearchIcon fontSize="20px" position="relative" left="30px" />
            <Input shadow="base" pl={9} fontSize="20px" type="search" width={{base:"80%", sm: "60%", md: "64%", lg: "50%",xl: "50%",'2xl': "50%"}} placeholder='Search the Products' onChange={(e)=>  setSearchTitle(e.target.value)}  height="50px" border="2px solid blue" /> 
            
       </Box>  

      {loading && <LoadingIndicator />}
      
       <Box id='DisplayDataBox'  style={{border:"1px  green" , height:"auto" , width:"100%"}} >
          <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 4,'2xl': 4,}} spacingY={10}   >
            
         
         

{!loading  &&   (
            
            post.filter((value)=>{
                if(searchTitle === ""){
                    return value;
                }else if(value.title.toLowerCase().includes(searchTitle.toLowerCase())){
                    return value;
                }
            })
            .map((item)=>{
                return (
         <DisplayProductMainData key= {item.id} id={item.id} src={item.Images} name={item.title} model={item.brand}    price={item.price}  review={item.rating}  realPrice={item.realPrice} isLaptopLoading={true} allData ={item}/>

                )
            })
            
        )}

 
       
       


         </SimpleGrid>
        </Box>
    </Box>
  )
}

export  {SearchBar}