import { Box , Image , Container , Link , Text , Button , Divider , Heading} from "@chakra-ui/react"
import Carousel from 'react-multi-carousel';
import { productData,productData2, responsive , Ourfeaturedoffers  , Holidayhosting , GiftIdeas , Holidaysolutions , data , Newarrivals} from "./Data";
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from "react-router-dom";
import "./Home.css"





function Home(){
    const Navigate = useNavigate();


    return(<Box className="mainbox">
        <Box width={"100%"} >
            <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221217_031712.png?raw=true"></Image>
        </Box>


        <Box backgroundColor={"#ffeb2c"} h="100px" color={"black"} >
            <Container padding={"20px"} maxW='70%' fontSize={"1rem"} >Shop all hoilday deals by category</Container>
        </Box>


        <Box >
            <Container  maxW='70%' id="Box1"  marginTop="-40px" >
                {data.map((item)=>(<Box key={item.id} onClick={()=>Navigate(`/${item.link}`)}><Link color={"#f9dc04"}><Box overflow='hidden' backgroundColor="white" borderRadius={"50%"} padding={"20px"}  border={"3px solid #4c7ee9"}><Image  src={item.image}/></Box><Text marginTop="10px" textAlign={"center"}  color={"blue"} fontSize='sm'>{item.title}</Text></Link></Box>))}
            </Container>
        </Box>


        <Box id="Box2" border="2 px solid red" marginTop="40px">
            {Newarrivals.map((item)=>(<Box key={item.id} border={"1px solid #dfe2e7"} padding="30px"><Link color='teal.500'><Box backgroundColor="white" ><Image height={"120px"} margin="auto" src={item.image}/></Box><Text marginTop="20px" color={"blue"} fontSize='sm'>{item.title}</Text></Link></Box>))}
        </Box>



        <Box  className="box3"  marginTop={"20px"}   padding="20px">
        <Box  border={"1px solid #dfe2e7"} className="box3item"  padding={"20px"}>
            <Box backgroundColor={"blue"} width="100px" color="white" paddingBottom="0.5rem" paddingTop={"0.5rem"} marginBottom="1.5rem">Outlet Deals</Box><br/>
            <Box display={"flex"} gap="3rem" marginTop={".5rem"} paddingLeft={"3rem"} paddingRight="3rem">
                <Box marginTop={"0.5rem"}>
                    <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/ClearanceOpenBox_White-217158.png;maxHeight=230;maxWidth=330" />
                </Box>
                <Box  >
                    <p border={"1px solid red"}  width="160px" >Save when you shop the Best Buy Outlet for clearance, open-box, refurbished and pre-owned items.</p>
                    <Button   variant='outline' fontSize={"12px"}  >View Outlet Deals</Button>
                </Box>
            </Box>
        </Box>
        <Box  border={"1px solid #dfe2e7"} className="box3item" padding={"20px"} textAlign="center">
            <Box border={"1px solid red"} width="100px" paddingBottom="0.5rem" paddingTop={"0.5rem"}  backgroundColor={"red"} color="white" transform={"skew(-30deg)"} ><b>Top Deals</b></Box><Divider marginBottom="1.5rem" />
            <Box display={"flex"} gap="3rem" marginTop={".5rem"} paddingLeft={"3rem"} paddingRight="3rem">
                <Box marginTop={"0.5rem"} >
                    <Image src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4901/4901809_sd.jpg;maxHeight=182;maxWidth=330" />
                </Box>
                <Box  >
                    <Link color={"blue"}  width="160px" >Apple - 10.2-Inch iPad with Wi-Fi - 64GB - Space Gray</Link><br/>
                    <Button  fontSize={"12px"} backgroundColor="white"  >Shop all Top Deals</Button>
                </Box>
            </Box>
        </Box>    
        </Box>



        <Box border="2 px solid red" marginTop={"20px"}>
            <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221217_112430.png?raw=true" width={"100%"}/>
        </Box>


        <Box display={"grid"} border="2 px solid red" gridTemplateColumns="repeat(3, 1fr)" gap={"20px"}  marginLeft="10px" marginRight={"10px"} marginTop="40px" >
            <Box><Image height={"480px"} src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-606618-bf-mappls-cc48c3c0-5d58-4d66-87d6-7b21b6c77ca4.jpg;maxHeight=960;maxWidth=960"></Image></Box>
            <Box><Image height={"480px"}  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-76777-ghp-dotd-102422-1382f08e-adf4-4e20-9dd3-034ecd8b7066.jpg;maxHeight=960;maxWidth=960"></Image></Box>
            <Box border={"1px solid #dfe2e7"}><Image height={"480px"}  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-588432-outlet-ea2b69c3-e9a7-4eee-a507-04c149472ab8.png;maxHeight=960;maxWidth=960"></Image></Box>
        </Box>



        <Box  marginTop="40px"   zIndex="-10" >
            <Box fontSize={"20px"}><b>Deals inspired by your shopping</b></Box>
            <Divider marginTop="10px" marginBottom={"20px"}/>
            <Carousel id="Box2"  responsive={responsive} >
                {productData.map((el)=>{
                    return(<Link key={el.id} to="#" style={{ textDecoration: "none" }}>
                    <Image height={"120px"} margin="auto" src={el.imgUrl}  />
                    <div className="desc">
                      <Box className="title"  h="70px" >{el.title}</Box>
                      <Box className="review">{el.rate}{el.review}</Box>
                      <Box className="price">${el.price}</Box>
                    </div>
                  </Link>)
                })}
            </Carousel>
         </Box>



        <Box  marginTop={"40px"} marginLeft="10px" marginRight={"10px"} >
            <Heading width={"200px"}  as='h2' size='md'>Our featured offers</Heading>
            <Divider  borderColor={"#A0AEC0"} marginTop={"5px"}/>
            <Box className="box4"  gap={"40px"} marginTop="15px" >
                {Ourfeaturedoffers.map((item)=>(<Box key={item.id} padding={"10px"} borderRight="1px solid #dbdee5"><Box paddingLeft={"40px"} paddingRight="40px" ><Image src={item.image}/></Box><Heading  marginTop={"10px"} className="box4heading" color={"blue"}>{item.title}</Heading><Text>{item.details}</Text></Box>))}
            </Box>
        </Box>



        <Box border="2 px solid red" marginTop={"40px"} >
            <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_121204.png?raw=true" width={"100%"}/>
        </Box>


        <Box border="2 px solid red"  marginTop="40px">
            <Box fontSize={"20px"} ><b>Deals inspired by your shopping</b></Box>
            <Divider marginTop="10px" marginBottom={"20px"}/>
            <Carousel id="Box2"  responsive={responsive} >
                {productData2.map((el)=>{
                    return(<Link key={el.id} to="#" style={{ textDecoration: "none" }}>
                    <Image height={"120px"} margin="auto" src={el.imgUrl}  />
                    <div className="desc">
                      <Box className="title"  h="70px" >{el.title}</Box>
                      <Box className="review">{el.rate}{el.review}</Box>
                      <Box className="price">${el.price}</Box>
                    </div>
                  </Link>)
                })}
            </Carousel>
        </Box>



        <Box className="box1"  marginTop={"40px"} >
        <Box  backgroundColor="#f0f2f4">
            <Box   marginTop={"20px"} fontSize={"20px"} marginLeft="20px"><b >Gift Ideas for everyone</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {Holidaysolutions.map((item)=>(<Link key={item.id} color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
        <Box backgroundColor="#f0f2f4">
            <Box marginTop={"20px"} fontSize={"20px"} marginLeft="20px"><b>Gift Ideas by price</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {GiftIdeas.map((item)=>(<Link key={item.id} color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
        <Box backgroundColor="#f0f2f4" className="">
            <Box marginTop={"20px"} fontSize={"20px"} marginLeft="20px"><b>Last-minute gifts</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {Holidayhosting.map((item)=>(<Link key={item.id} color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
        </Box>



        <Box border={"2 px solid red"} display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"20px"}  marginLeft="10px" marginRight={"10px"} marginTop="40px" >
           <Box><Image height={"480px"} src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123513.png?raw=true"></Image></Box>
           <Box><Image height={"480px"}  src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123441.png?raw=true"></Image></Box>
           <Box border={"1px solid #dfe2e7"}><Image height={"480px"}  src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123537.png?raw=true"></Image></Box>
        </Box>



        <Box border="2 px solid red" marginTop={"40px"} >
            <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123618.png?raw=true" width={"100%"} />
        </Box>


        <Box  marginTop="40px" border={"1px solid #dfe2e7"}  >
            <Box fontSize={"20px"} marginLeft="20px"><b>Featured Products for you</b></Box>
            <Box id="Box2">{Newarrivals.map((item)=>(<Box key={item.id} padding="30px"><Link color='teal.500'><Box backgroundColor="white" ><Image height={"120px"} margin="auto" src={item.image}/></Box><Text marginTop="20px" fontSize='sm' color={"blue"} >{item.title}</Text></Link></Box>))}</Box>
        </Box>

   
    

    </Box>)
}


export default Home