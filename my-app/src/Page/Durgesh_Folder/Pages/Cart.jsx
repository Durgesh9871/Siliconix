//* @CSS
import {
	Badge,
	Box,
	Button,
	Container,
	Icon,
	Image,
	SimpleGrid,
	Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

//* Currency formatter
import { formatCurrency } from '../Components/utilities/formatCurrency' ;

import { AiFillStar } from 'react-icons/ai';

// * Redux
import { useSelector, useDispatch } from 'react-redux';

import { remove } from '../../../Danish Pinjari/store/cartSlice'; 
import CartAmountToggle from './CartAmountToggle';

const CartItem = () => {
	const dispatch = useDispatch();
	
	const products = useSelector((state) => state.cart);
console.log(" In cart page")
	//* remove
	const handleRemove = (productId) => {
		dispatch(remove(productId));
	};

	//* increasing and decrease
	const [amount, setAmount] = useState(1);

	const setDecrease = () => {
		amount > 1 ? setAmount(amount - 1) : setAmount(1);
	};
	const setIncrease = () => {
		amount < 10 ? setAmount(amount + 1) : setAmount(15);
	};

	return (
		<Container maxW="container.xl">
			<Text fontSize={'4xl'}>Cart</Text>

			<SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" pt="10">
				{products &&
					products.map((item) => (
						<Box
							key={item.id}
							borderWidth="1px"
							borderRadius="lg"
							overflow="hidden"
						>
							<Image
								src={item.Images[0].imageFront}
								alt={item.categories}
								h="200px"
								w="full"
								p="2"
								objectFit="contain"
							/>

							<Box p="6">
								<Box display="flex" alignItems="baseline">
									<Badge borderRadius="full" px="2" colorScheme="teal">
										Category
									</Badge>

									<Box
										color="gray.500"
										fontWeight="semibold"
										letterSpacing="wide"
										fontSize="xs"
										textTransform="uppercase"
										ml="2"
									>
										{item.categories}
									</Box>
								</Box>

								<Box
									mt="1"
									fontWeight="semibold"
									as="h4"
									lineHeight="tight"
									noOfLines={1}
								>
									{item.title}
								</Box>

								<Box as="h1" color="green.600" fontWeight="bold">
									{formatCurrency(item.price)}
								</Box>

								<Box
									display="flex"
									mt="2"
									justifyContent="center"
									alignItems="center"
								>
									{Array(5)
										.fill('')
										.map((_, i) => (
											<Icon
												as={AiFillStar}
												key={i}
												color={i < item.rating ? 'teal.500' : 'gray.300'}
											/>
										))}
									<Box as="span" ml="2" color="gray.600" fontSize="sm">
										{item.rating.count} reviews
									</Box>
								</Box>

								{/* <Flex justify='center' align='center' mt={ 5 }>

                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { color: 'blue.500', bg: "white", border: '1px solid blue' } } m='2' disabled={ item.quantity === 1 } onClick={ () => dispatch(decreaseCartQuantity(item.id)) }>-</Button>

                                <Text fontSize='3xl' m='2'>{ item.quantity }</Text>

                                <Button w='container.sm' bg='blue.600' color='white' _hover={ { width:"30%",color: 'blue.500', bg: "white", border: '1px solid blue' } } onClick={ () => dispatch(increaseCartQuantity(item.id)) } m='2'>+</Button>

                            </Flex> */}

								{/* amount toggle */}
								<CartAmountToggle
									amount={amount}
									setDecrease={setDecrease}
									setIncrease={setIncrease}
								/>

								<Button
									w="50%"
									bg="red.500"
									color="white"
									_hover={{
										width: '50%',
										color: 'red',
										bg: 'white',
										border: '1px solid red',
									}}
									m="2"
									onClick={() => handleRemove(item.id)}
								>
									Remove
								</Button>
							</Box>
						</Box>
					))}
			</SimpleGrid>
		</Container>
	);
};

export default CartItem;
