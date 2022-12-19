import {  Input , Box, Heading, useDisclosure, Button,Link,AccordionButton,AccordionItem, Accordion,AccordionPanel,InputGroup, InputRightElement,  Grid,Image, Divider, AccordionIcon} from '@chakra-ui/react'
import { AiOutlineMenu , AiOutlineShoppingCart} from "react-icons/ai";
import {BsSearch} from "react-icons/bs"
import {StarIcon} from "@chakra-ui/icons"
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
      <Box  bg="#0046be" position={"fixed"} width="100%" top={"0"} right="0" zIndex={"1000"}>
        <Box className='top-nav' alignItems={'center'} padding="1rem 1rem"> 
          {/* <Image src="https://files.slack.com/files-pri/T049YSPNG02-F04F4HE4LHH/profilepicturemaker_1_.png"   /> */}
          <Button className='top-btn' ref={btnRef} leftIcon={<AiOutlineMenu size={"25px"}/>}   colorScheme='#0046be' style={{fontSize:"20px"}}  onClick={onOpen}>
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
      <InputGroup  width={"100%"} className="NavbarSearch" >
    <Input bg={"white"} width="100%" placeholder="Search" />
    <InputRightElement children={<BsSearch color='green.500' /> }  />
  </InputGroup>
          <Box textAlign={"right"} className="AlexHidden">
            <Button className='top-btn'  colorScheme='#0046be'  style={{fontSize:"20px"}}><b>Login/Signup</b></Button>
          </Box>
          <Button className='top-btn' leftIcon={<AiOutlineShoppingCart size={"25px"} />} colorScheme='#0046be'  style={{fontSize:"20px"}}><b>Cart</b></Button>
        </Box>
      </Box>
    )
}

export default Navbar1