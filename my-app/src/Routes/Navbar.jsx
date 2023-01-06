import React, { useEffect, useState } from 'react';

import { ImMenu } from 'react-icons/im';
import { ImCross } from 'react-icons/im';
import {
	Box,
	Button,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	useDisclosure,
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
import { Link, useNavigate } from 'react-router-dom';
import { LoginGetRequest } from '../Components/All_API_REQUEST/LoginPostRequest';
import { ChevronDownIcon } from '@chakra-ui/icons';

//* added by Danish Pinjari
import { useSelector } from 'react-redux';
import './Navbar.css';


const Navbar = () => {
	//*--------------- by Danish Pinjari
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

	return (
		<>
			<div className="Navbar_container">
				<nav>
					<h2
						className="logo"
						style={{
							color: 'black',
							cursor: 'pointer',
							fontSize: '1.7rem',
							fontWeight: 'bolder',
						}}
					>
						{' '}
						<span style={{ color: 'red' }}>S</span>iliconix
					</h2>
					<ul className={classes}>
						<li>
							<Link
								to={'/'}
								onClick={() => {
									setclasses('donotshownavbar');
								}}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to={'/search'}
								onClick={() => {
									setclasses('donotshownavbar');
								}}
							>
								Search Products
							</Link>
						</li>

						<li className='cart'>
							<Link
								to="/cartpage"
								onClick={() => {
									setclasses('donotshownavbar');
								}}
							>
								
									Cart <span className="cart-count">{items.length}</span>
									
								
							</Link>

							{/* <Link
								to={'/cartpage'}
								onClick={() => {
									setclasses('donotshownavbar');
								}}
							>
                <Image src='https://cdn-icons-png.flaticon.com/512/630/630746.png'></Image>
								<span className="cart-count">{items.length}</span>
							</Link> */}

							{/* <Link
								to={'/cartpage'}
								onClick={() => {
									setclasses('donotshownavbar');
								}}
							>
								Cart {items.length}
							</Link> */}
						</li>
						<li>
							<Link
								to={'wishlist'}
								onClick={() => {
									setclasses('donotshownavbar');
								}}
							>
								Wish List
							</Link>
						</li>
						{LoginInfo.length > 0 ? (
							LoginInfo[0].type === 'ADMIN' ? (
								<li>
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
								</li>
							) : (
								<li>
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
								</li>
							)
						) : (
							<li onClick={() => {}}>
								<a onClick={() => (setclasses('donotshownavbar'), onOpen())}>
									Login/SignUp
								</a>
							</li>
						)}

						<ImCross
							className="crossicon commonIcon"
							onClick={() => {
								setclasses('donotshownavbar');
							}}
						/>
					</ul>
					<ImMenu
						className="Menuicon commonIcon"
						onClick={() => {
							setclasses('shownavbar');
						}}
					/>
				</nav>
			</div>
			{/* Login Functionality start from Here */}

			<Modal isOpen={isOpen} onClose={onClose}>
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
		</>
	);
};

export default Navbar;
