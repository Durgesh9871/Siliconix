

function Homepage(){
    return(<>
    <Box padding={"50px"}  backgroundColor={"#093796"}>
            <Container maxW='70%'display={"grid"} gridTemplateColumns="repeat(6, 1fr)" gap={"20px"}  marginTop={"100px"}>
        {data.map((item)=>(<Box ><Link color={"#f9dc04"}><Box overflow='hidden' backgroundColor="white" borderRadius={"50%"} padding={"20px"}  border={"3px solid #4c7ee9"}><Image  src={item.image}/></Box><Text marginTop="10px" fontSize='sm'>{item.title}</Text></Link></Box>))}
    </Container></Box>
    </>)
}

export default Homepage 