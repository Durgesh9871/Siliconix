
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {  Spacer, Input , Heading, AccordionButton,AccordionItem, Accordion,AccordionPanel,InputGroup, InputRightElement, ButtonGroup, Grid, GridItem,Image, Divider} from '@chakra-ui/react'
import { AiOutlineMenu , AiOutlineShoppingCart} from "react-icons/ai";
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
import React from 'react';



const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
      <Box bg={useColorModeValue('#0046be', 'gray.900')} px={4} border="1px solid red">
        
        <Flex  alignItems={'center'} justifyContent={'space-between'} padding="1rem 3rem">
          <Box>Logo</Box>

          <Button ref={btnRef} leftIcon={<AiOutlineMenu/>}   colorScheme='#0046be' style={{fontSize:"25px" , fontWeight: "500"}} size='lg' onClick={onOpen}>Menu</Button>
          <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
          <Accordion  allowMultiple>
  <AccordionItem >
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
          Deals
        </Box>
        
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
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      
    </AccordionPanel>
  </AccordionItem>
  
  <Heading as='h4' size='md'>Shop by Department</Heading>

   <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: '#0046be', color: 'white' }}>
        <Box as="span" flex='1' textAlign='left'>
        Appliances
        </Box>
        
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
        
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
            
          </Flex>
        </Flex>
        
      </Box>
    </>
  );
}