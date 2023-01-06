import {  Input , Box, Heading, useDisclosure, Button,Link,AccordionButton,AccordionItem, Accordion,AccordionPanel,InputGroup, Tooltip , Divider, AccordionIcon} from '@chakra-ui/react'
import { AiOutlineMenu , AiOutlineShoppingCart, AiTwotoneHeart} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"
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
import "./Navbar.css"


import  { useEffect, useState } from 'react';

import { ImMenu } from 'react-icons/im';
import { ImCross } from 'react-icons/im';
import {

	
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	
} from '@chakra-ui/react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { RiAdminFill } from 'react-icons/ri';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom';
import { LoginGetRequest } from '../Components/All_API_REQUEST/LoginPostRequest';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';



function Navbar(){
   {/*} const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = React.useRef()*/}
const items = useSelector((state) => state.cart);
	console.log('items:', items);
	//* --------------

	const [classes, setclasses] = useState('donotshownavbar');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const Navi = useNavigate();
	const [LoginInfo, setLoginInfo] = useState([]);

	useEffect(() => {
		const value = LoginGetRequest();
		value.then((res) => setLoginInfo(res));
	}, []);
    return(
      <Box  bg="#0046be" position={"fixed"} width="100%" top={"0"} right="0" zIndex={"1000"} border="5px soldi black">
        <Box className='top-nav' alignItems={'center'} > 
        <h2 className='top-btn' style={{color:"white",fontWeight:"bolder"}}>
          <span style={{color:"yellow"}}>S</span>
          iliconix
        </h2>
          {/* <Image src="https://files.slack.com/files-pri/T049YSPNG02-F04F4HE4LHH/profilepicturemaker_1_.png"   /> 
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
      </Drawer>*/}
      
    <Input bg={"white"} className="NavbarSearch"  width="100%" placeholder="Search" onClick={()=>console.log("ok")} onChange={()=>console.log("work")}/>
    
  
  <Box className="AlexHidden"  >
         <Tooltip hasArrow label='Wishlist' bg='black'>
          <Link >
           <AiTwotoneHeart color='white' size={"28px"}/>
            </Link>
          </Tooltip>
          </Box>
          {/*<Box textAlign={"right"} className="AlexHidden">
          <Tooltip hasArrow label='login/Singup' bg='black'>
            <Link style={{textDecoration:"none"}}>
            <Button className='top-btn'  colorScheme='#0046be' leftIcon={<MdAccountCircle size={"28px"} />}   style={{fontSize:"20px"}}><b>Account</b></Button>
            </Link>
          </Tooltip>
    </Box>*/}
          <Tooltip hasArrow label='Cart' bg='black'>
          <Link style={{textDecoration:"none"}}>
          <Button  leftIcon={<AiOutlineShoppingCart size={"28px"} />} colorScheme='#0046be' padding={"0px"}  ><b className='account'>Cart</b></Button>
          </Link>
          </Tooltip>
          <Box>
          {LoginInfo.length > 0 ? (
							LoginInfo[0].type === 'ADMIN' ? (
								<Box>
									<Menu>
										<MenuButton
											as={Button}
											rightIcon={<ChevronDownIcon />}
											border="none"
										>
											{LoginInfo[0].fullname}
										</MenuButton>
										<MenuList>
											<MenuItem
												border={'none'}
												fontSize={'medium'}
												onClick={() => {
													Navi('/search');
												}}
											>
												All Product
											</MenuItem>
											<MenuItem
												border={'none'}
												fontSize={'medium'}
												onClick={() => {
													Navi('/admin');
												}}
											>
												Admin Dashboard
											</MenuItem>
											<MenuItem border={'none'} fontSize={'medium'}>
												Logout
											</MenuItem>
										</MenuList>
									</Menu>
								</Box>
							) : (
								<Box>
									<Menu>
										<MenuButton
											as={Button}
											rightIcon={<ChevronDownIcon />}
											border="none"
										>
											{LoginInfo[0].fullname}
										</MenuButton>
										<MenuList>
											<MenuItem border={'none'} fontSize={'medium'}>
												Profile
											</MenuItem>
											<MenuItem
												border={'none'}
												fontSize={'medium'}
												onClick={() => {
													Navi('/search');
												}}
											>
												All Product
											</MenuItem>
											<MenuItem border={'none'} fontSize={'medium'}>
												Logout
											</MenuItem>
										</MenuList>
									</Menu>
								</Box>
							)
						) : (
							<Box onClick={() => {}} >
								<Button padding={"0px"}  className='top-btn' colorScheme={"#0046be"} onClick={() => (setclasses('donotshownavbar'), onOpen())}>
                <MdAccountCircle size={"28px"}  /><b className='account'>Account</b>
								</Button>
							</Box>
						)}

						{/*<ImCross
							className="crossicon commonIcon"
							onClick={() => {
								setclasses('donotshownavbar');
							}}
						/>*/}
					</Box>
					{/*<ImMenu
						className="Menuicon commonIcon"
						onClick={() => {
							setclasses('shownavbar');
						}}
					/>*/}
          <Modal isOpen={isOpen} onClose={onClose} border="2px solid black">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Signup As</ModalHeader>
					<ModalCloseButton style={{ border: 'none' }} />
					<ModalBody>
						<Box
							bg="#5f77e0"
							w="80%"
							p={4}
							color="white"
							textAlign={'center'}
							cursor={'pointer'}
							borderRadius="2xl"
							margin={'auto'}
							transition="0.3s ease-in-out"
							mb="5"
							_hover={{
								background: '#3457ed',
								color: 'white',
							}}
							onClick={() => (onClose(), Navi('/admin_signup'))}
						>
							<RiAdminFill
								style={{ fontSize: '4rem', color: 'white', margin: 'auto' }}
							/>
							<h1>Admin</h1>
						</Box>
						<Box
							bg="#00a1a7"
							w="80%"
							p={4}
							color="white"
							textAlign={'center'}
							cursor="pointer"
							borderRadius="2xl"
							m={'auto'}
							mb="10"
							transition="0.3s ease-in-out"
							_hover={{
								background: '#046e72',
								color: 'white',
							}}
							onClick={() => (onClose(), Navi('/user_signup'))}
						>
							<AiOutlineUserAdd style={{ fontSize: '4rem', margin: 'auto' }} />
							<h1>User</h1>
						</Box>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onClose}
							style={{ border: 'none' }}
						>
							Close
						</Button>
						<Button
							variant="ghost"
							backgroundColor={'whatsapp.400'}
							style={{ border: 'none' }}
							transition="0.3s ease-in-out"
							_hover={{
								background: '#1ba950',
								color: 'white',
							}}
						>
							Already Have Account
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
        </Box>
      </Box>
    )
}

export default Navbar