import { Box , Image ,Container, Link,Text, Button, Divider, Heading} from "@chakra-ui/react"
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

const Ourfeaturedoffers=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-619648-pol-ase-112022-4ac773ac-3d86-4242-9b79-92e237ec8366.jpg;maxHeight=504;maxWidth=740",
        title:"Apple Shopping Event.",
        details:"Save up to $400 on select MacBook models, plus more great deals.",
        discount:"MacBook minimum savings is $150."
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-621852_pol_COPE_DER-679e53d5-d140-4423-b2cd-695ba57d1093.jpg;maxHeight=504;maxWidth=740",
        title:"Save up to $100 on select Fitbit wearable technology.",
        details:"Choose smartwatches and fitness trackers to help monitor your daily activity.",
        discount:"Minimum savings is $20."
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT-604804-namebrandtv-pol_der-df0550ce-6248-40ed-a170-07adfed8ea92.jpg;maxHeight=504;maxWidth=740",
        title:"Save up to $700 on select Samsung, LG and Sony TVs.",
        details:"Enjoy stunning color and clarity with a feature-packed TV from these popular brands.",
        discount:""
    }
]


const Holidaysolutions=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78346-explore-top-tech-fb360ee0-4544-4e09-8910-b7346a598ca0.jpg;maxHeight=432;maxWidth=432",
        title:"Top Tech gifts"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78346-explore-unique-dfdf9a0b-6136-4502-ae6c-5f0e0f2719a2.jpg;maxHeight=432;maxWidth=432",
        title:"Unique gifts"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78346-explore-gifts-home-b891db5b-862c-4092-9de2-e261285126b9.jpg;maxHeight=432;maxWidth=432",
        title:"Gifts for the home"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-78346-explore-foodies-39a2636c-44c7-4d75-9d1c-addcb64b0442.jpg;maxHeight=432;maxWidth=432",
        title:"Gifts for foodies"
    }
]

const GiftIdeas=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77117-gift-u25-flex_der-e1d370fa-759b-40e7-ab0e-94aa953375b4.png;maxHeight=384;maxWidth=384",
        title:"Gifts under $25"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77117-gift-2550-flex_der-894d90f1-a1a9-4e60-a5d8-3cbcc93c1ea3.png;maxHeight=384;maxWidth=384",
        title:"Gifts $25–$50"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77117-gift-150-flex_der-77fe4ed4-e00c-4307-ad96-da4bb590332a.png;maxHeight=384;maxWidth=384",
        title:"Gifts $50–$100"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-77117-gift-100-200-flex_der-5cb443c4-1d58-4a9e-9dfe-1ec2ee29c18e.png;maxHeight=384;maxWidth=384",
        title:"Gifts $100–$200"
    }
]

const Holidayhosting=[
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-79868-explore-lmg-ss-88174573-df36-46a7-945b-94ccaa12d465.jpg;maxHeight=432;maxWidth=432",
        title:"Stocking stuffers"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-79868-explore-lmg-toys-2b324833-860e-4398-b42b-22159c7fc18b.jpg;maxHeight=432;maxWidth=432",
        title:"Toys"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-79868-explore-lmg-vg-d5fb5f2f-6435-4faf-a7f4-622b0fd7527a.jpg;maxHeight=432;maxWidth=432",
        title:"Gaming accessories"
    },
    {
        image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-79868-explore-lmg-gc-ea5dc1c3-fe9d-42c8-a503-b3c3bcd59071.jpg;maxHeight=432;maxWidth=432",
        title:"Gift cards"
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


    <Box marginTop={"20px"}>
        <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221217_112430.png?raw=true" width={"100%"}/>
    </Box>


    <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"20px"}  marginLeft="10px" marginRight={"10px"} marginTop="40px">
        <Box><Image height={"480px"} src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/subghp-MMT-606618-bf-mappls-cc48c3c0-5d58-4d66-87d6-7b21b6c77ca4.jpg;maxHeight=960;maxWidth=960"></Image></Box>
        <Box><Image height={"480px"}  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-76777-ghp-dotd-102422-1382f08e-adf4-4e20-9dd3-034ecd8b7066.jpg;maxHeight=960;maxWidth=960"></Image></Box>
        <Box><Image height={"480px"}  src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/ghp-MMT-588432-outlet-ea2b69c3-e9a7-4eee-a507-04c149472ab8.png;maxHeight=960;maxWidth=960"></Image></Box>
    </Box>


    <Box>
        
    </Box>



    <Box marginTop={"40px"} marginLeft="10px" marginRight={"10px"}>
        <Heading width={"200px"}  as='h2' size='md'>Our featured offers</Heading>
        <Divider  borderColor={"#A0AEC0"} marginTop={"5px"}/>
        <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"40px"} marginTop="15px">
            {Ourfeaturedoffers.map((item)=>(<Box padding={"10px"} borderRight="1px solid #dbdee5"><Box paddingLeft={"40px"} paddingRight="40px" ><Image src={item.image}/></Box><Heading marginTop={"10px"}><Link color={"blue"}>{item.title}</Link></Heading><Text>{item.details}</Text></Box>))}
        </Box>
    </Box>


    <Box marginTop={"40px"}>
        <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_121204.png?raw=true" width={"100%"}/>
    </Box>


    <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"20px"} marginTop={"40px"} marginLeft="10px" marginRight={"10px"}>
        <Box  backgroundColor="#f0f2f4">
            <Box  width="180px" marginTop={"20px"}><b>Gift Ideas for everyone</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {Holidaysolutions.map((item)=>(<Link color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
        <Box backgroundColor="#f0f2f4">
            <Box width="130px" marginTop={"20px"}><b>Gift Ideas by price</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {GiftIdeas.map((item)=>(<Link color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
        <Box backgroundColor="#f0f2f4">
            <Box width="200px" marginTop={"20px"}><b>Last-minute gifts</b></Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2, 1fr)" gap={"20px"}  padding={"20px"}>
                {Holidayhosting.map((item)=>(<Link color={"blue"}><Image borderRadius={"5px"} src={item.image}/><Text>{item.title}</Text></Link>))}
            </Box>
        </Box>
    </Box>

    <Box display={"grid"} gridTemplateColumns="repeat(3, 1fr)" gap={"20px"}  marginLeft="10px" marginRight={"10px"} marginTop="40px">
        <Box><Image height={"480px"} src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123513.png?raw=true"></Image></Box>
        <Box><Image height={"480px"}  src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123441.png?raw=true"></Image></Box>
        <Box><Image height={"480px"}  src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123537.png?raw=true"></Image></Box>
    </Box>

    <Box marginTop={"40px"}>
        <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/fp04_437_day5/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221218_123618.png?raw=true" width={"100%"} />
    </Box>


    </Box>)
}

export default Homepage 