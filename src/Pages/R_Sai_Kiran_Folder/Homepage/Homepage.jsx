import { Box , Image ,Container, Link,Text, Button, Divider} from "@chakra-ui/react"
import "./Homepage.css"
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7fafc',
      
      500: '#718096',
      
      900: '#171923',
    }
  }
})
const data=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-laptops-686b0d25-dbcf-484f-8c88-046275bf8ef5.jpg;maxWidth=220",
        title:"Laptops & Computers"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tv-364a6674-a730-4b5b-a7c9-94d55f7e82b5.jpg;maxWidth=220",
        title:"TVs & Projectors"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-apple-d28633c9-bbe5-4f83-a0f6-55b738306ae1.jpg;maxWidth=220",
        title:"Apple"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-vg-d7f85256-6a3f-4f54-872d-c89c69954d73.jpg;maxWidth=220",
        title:"Video Games, Consoles & VR"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-phones-4e886f8b-2e80-47db-b8eb-1d10332ffd44.jpg;maxWidth=220",
        title:"Cell Phones"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-mappls-561d66ab-817b-4d28-b076-5d889afff7a2.jpg;maxWidth=220",
        title:"Major Appliances"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-headphones-025fb4ed-2665-4381-9384-b921e801d758.jpg;maxWidth=220",
        title:"Headphones"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-pcgaming-be2db030-1456-4789-a265-0f7da417405f.jpg;maxWidth=220",
        title:"PC Gaming"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-tablets-79bf758a-ebc9-46bb-ba84-3782cdfd09ca.jpg;maxWidth=220",
        title:"Tablets & E-Readers"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-cameras-0135d468-d14a-4a26-8b44-dd723c2b0953.jpg;maxWidth=220",
        title:"Cameras, Camcorders & Drones"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-speakers-4589e35d-d21d-49b6-8a2f-e747da604278.jpg;maxWidth=220",
        title:"Sound Bars, Speakers & Streaming Devices"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-wearabletech-b007a144-b78a-42a9-9233-b97f66bce317.jpg;maxWidth=220",
        title:"Wearable Technology"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smappls-bfa220bd-fca3-447c-ab2e-3c88aaebea36.jpg;maxWidth=220",
        title:"Small Appliances, Floor Care & Home Air Quality"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-printers-c8eac98d-636f-4487-88d6-f77494875b92.jpg;maxWidth=220",
        title:"Printers, Home Office & Computer Accessories"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-smarthome-99f9e854-2362-44a8-ba2c-9242be12c596.jpg;maxWidth=220",
        title:"Smart Home, Security & Wi-Fi"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-toys-dbd5f58e-beb9-4ca2-8d48-3db5e29c5e63.jpg;maxWidth=220",
        title:"Toys, Games, Collectibles & Movies"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-etranspo-4be6c360-45af-4d45-8429-6b20915e6763.jpg;maxWidth=220",
        title:"Electric Transportation"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-611301-ghp-img-icons-health-1c7229b6-26c8-44a1-94ea-62315c8c6a4b.jpg;maxWidth=220",
        title:"Health, Fitness & Personal Care"
    }
]


const Newarrivals=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520136_rd.jpg;maxHeight=400;maxWidth=400",
        title:"Meta Quest Pro"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524812_sd.jpg;maxHeight=400;maxWidth=400",
        title:"Loop8: Summer of Gods - Xbox One"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5200/5200904_sd.jpg;maxHeight=400;maxWidth=400",
        title:"Apple - 10.9-Inch iPad (Latest Model) with Wi-Fi - 64GB - Blue"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6524/6524410_rd.jpg;maxHeight=400;maxWidth=400",
        title:"Tramontina - 10 Fry Pan - Silver"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517579_sd.jpg;maxHeight=400;maxWidth=400",
        title:"LG - 65 Class UN9000 Series LED 4K UHD Smart webOS TV"
    }
]



function Homepage(){
    return(<Box><Box backgroundColor={"#e0e6ef"}>
        
        <Box>
            <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221217_031712.png?raw=true" width={"100%"}></Image>
        </Box>
        <Box backgroundColor={"#ffeb2c"} h="100px" color={"black"} ><Container padding={"20px"} maxW='70%'>Shop all hoilday deals by category</Container></Box>
    <Box >
            <Container  maxW='70%' id="Box1"  marginTop="-40px" >
        {data.map((item)=>(<Box ><Link color={"#f9dc04"}><Box overflow='hidden' backgroundColor="white" borderRadius={"50%"} padding={"20px"}  border={"3px solid #4c7ee9"}><Image  src={item.image}/></Box><Text marginTop="10px" fontSize='sm'>{item.title}</Text></Link></Box>))}
    </Container></Box>
    </Box>


    <Box id="Box2" marginTop="40px"  marginLeft="10px" marginRight={"10px"} >
    {Newarrivals.map((item)=>(<Box border={"1px solid #dfe2e7"} padding="30px"><Link color='teal.500'><Box backgroundColor="white" ><Image height={"120px"} margin="auto" src={item.image}/></Box><Text marginTop="20px" color={"blue"} fontSize='sm'>{item.title}</Text></Link></Box>))}
    </Box>


    <Box display={"flex"} border="1px solid red" marginTop={"20px"} justifyContent={"space-between"} gap="10px" padding="20px">
        
        <Box  border={"1px solid #dfe2e7"} width={"50%"} padding={"20px"}>
            <Button backgroundColor={"blue"} color="white" paddingBottom="0.5rem" paddingTop={"0.5rem"} marginBottom="1.5rem">Outlet Deals</Button><br/>
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
        <Box  border={"1px solid #dfe2e7"} width={"50%"} padding={"20px"} textAlign="center">
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


    </Box>)
}

export default Homepage 