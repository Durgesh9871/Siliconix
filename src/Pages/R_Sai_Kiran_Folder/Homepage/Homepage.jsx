import { Box , Image ,Container, Link,Text} from "@chakra-ui/react"

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



function Homepage(){
    return(<Box>
        <Box>
            <Image src="https://github.com/Durgesh9871/nappy-view-6299/blob/main/src/Pages/R_Sai_Kiran_Folder/Images/Screenshot_20221216_115849.png?raw=true"></Image>
        </Box>
    <Box padding={"50px"}   background="linear-gradient(135deg, #00246d 27%, #0046be 40%, #0a6dfc 50%, #0046be 60%, #00246d 100%)">
            <Container maxW='70%'display={"grid"} gridTemplateColumns="repeat(6, 1fr)" gap={"20px"}  >
        {data.map((item)=>(<Box ><Link color={"#f9dc04"}><Box overflow='hidden' backgroundColor="white" borderRadius={"50%"} padding={"20px"}  border={"3px solid #4c7ee9"}><Image  src={item.image}/></Box><Text marginTop="10px" fontSize='sm'>{item.title}</Text></Link></Box>))}
    </Container></Box>
    </Box>)
}

export default Homepage 