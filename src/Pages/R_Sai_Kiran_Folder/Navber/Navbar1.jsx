import { Flex, Spacer, Input , Box, Heading, useDisclosure, Button, Center, Switch, useColorMode,Link,AccordionButton,AccordionItem, Accordion,AccordionPanel,InputGroup, InputRightElement, ButtonGroup, Grid, GridItem,Image, Divider, AccordionIcon} from '@chakra-ui/react'
import { AiOutlineAppstore, AiOutlineMenu , AiOutlineShoppingCart} from "react-icons/ai";
import {BsSearch} from "react-icons/bs"

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import React from 'react'
import "./Navbar1.css"



function Navbar1(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
      <Box  bg="#0046be">
        <Grid id="navbar" templateColumns='68px 86px 10fr 7fr 75px' gap={6} padding="1rem 3rem" alignItems={'center'}> 
          <Image src="https://files.slack.com/files-pri/T049YSPNG02-F04F4HE4LHH/profilepicturemaker_1_.png" width={"100%"}  />
          <Button ref={btnRef} leftIcon={<AiOutlineMenu/>}   colorScheme='#0046be' style={{fontSize:"25px" , fontWeight: "500"}} size='lg' onClick={onOpen}>Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader><Heading as='h4' size='md'>Menu</Heading></DrawerHeader>

          <DrawerBody>
          <Accordion  allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
          Deals
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Heading as='h4' size='md'>Deals</Heading>
      <Divider marginTop={"5px"} marginBottom="5px"/>
      <Link className='MenuLink'>Top Deals</Link><br/>
      
      <Link className='MenuLink'>Deal of the Day</Link><br/>
      
      <Link className='MenuLink'>Totaltech Member Offers</Link><br/>
      
      <Link className='MenuLink'>Gift Ideas</Link><br/>
      
      <Link className='MenuLink'>Best Buy Outlet</Link><br/>
     
      <Link className='MenuLink'>Apple Shopping Event</Link><br/>
      
      <Heading as='h4' size='md' marginTop={"15px"}>Deals by Category</Heading>
      <Divider marginTop={"5px"} marginBottom="5px"/>
      <Link className='MenuLink'  >TVs & Projectors</Link><br/>
      <Link className='MenuLink'  >Laptops & Computers</Link><br/>
      <Link className='MenuLink'  >Tablets & E-Readers</Link><br/>
      <Link className='MenuLink'  >Video Games & VR</Link><br/>
      <Link className='MenuLink'  >Headphones</Link><br/>
      <Link className='MenuLink'  >Cell Phones</Link><br/>
      <Link className='MenuLink'  >PC Gaming</Link><br/>
      <Link className='MenuLink'  >Sound Bars & Speakers</Link><br/>
      <Link className='MenuLink'  >Video & Streaming Media Players</Link><br/>
      <Link className='MenuLink'  >Smart Home & Networking</Link><br/>
      <Link className='MenuLink'  >Toys, Games & Collectibles</Link><br/>
      <Link className='MenuLink'  >Cameras, Camcorders & Drones</Link><br/>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Support & Services
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Heading as='h4' size='md'>Support & Services</Heading>
      <Divider marginTop={"5px"} marginBottom="5px"/>
      <Link className='MenuLink'>Visit our Support Center</Link><br/>
      <Link className='MenuLink'>Schedule a Service</Link><br/>
      <Link className='MenuLink'>Online Support</Link><br/>
      <Link className='MenuLink'>Manage an Appointment</Link><br/>
      <Link className='MenuLink'>Shop with an Expert</Link><br/>
      <Link className='MenuLink'>Check Repair Status</Link><br/>
      <Link className='MenuLink'>Free Home Consultation</Link><br/>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Brands
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Featured
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
  <Divider  />
  <Heading as='h4' size='md' marginTop={"25px"} marginBottom="8px">Shop by Department</Heading>

   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Appliances
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>

   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        TV & Home Theater
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Computers & Tablets
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Cameras, Camcorders & Drones
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Cell Phones
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Audio
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Video Games
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Movies & Music
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
  

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Car Electronics & GPS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Wearable Technology
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Health & Wellness
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        MHome, Furniture & Office
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Smart Home, Security & Wi-Fi
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        MOutdoor Living
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Electric Transportation
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Toys, Games & Collectibles
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Sustainable Living
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>


  
</Accordion>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <InputGroup  width={"100%"} >
    <Input bg={"white"} placeholder="Search" />
    <InputRightElement children={<BsSearch color='green.500' /> }  />
  </InputGroup>
          
          <Button leftIcon={<AiOutlineShoppingCart/>} colorScheme='#0046be' style={{fontSize:"25px" , fontWeight: "500"}} >Cart</Button>
        </Grid>
      </Box>
    )
}

export default Navbar1