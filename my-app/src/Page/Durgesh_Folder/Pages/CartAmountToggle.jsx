// import React from 'react';
// import { FaMinus, FaPlus } from 'react-icons/fa';

// const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
// 	return (
// 		<div>
// 			<button onClick={() => setDecrease()}>
// 				<FaMinus />
// 			</button>
// 			<div>{amount}</div>
// 			<button onClick={() => setIncrease()}>
// 				<FaPlus />
// 			</button>
// 		</div>
// 	);
// };

// export default CartAmountToggle;
import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Button, Flex, Box, Heading } from '@chakra-ui/react';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
	return (
		<Flex alignItems="justify" width="50%" margin="auto" color="green.700">
			<Button leftIcon={<FaMinus />} onClick={setDecrease} variant="outline" />
			<Box as={Heading} size="lg" px={2}>
				{amount}
			</Box>
			<Button rightIcon={<FaPlus />} onClick={setIncrease} variant="outline" />
		</Flex>
	);
};

export default CartAmountToggle;
