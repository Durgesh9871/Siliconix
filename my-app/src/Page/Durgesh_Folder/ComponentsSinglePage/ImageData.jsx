import './ImageData.css';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { AiFillHeart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { MdShoppingCart } from 'react-icons/md';
import { AddIcon } from '@chakra-ui/icons';
//* danish added
import { add } from '../../../Danish Pinjari/store/cartSlice';

import { useDispatch } from 'react-redux';

const ImageData = ({ image, allImageData, allData }) => {
	//  console.log("image" ,allImageData)
	const [src, setSrc] = useState('');
	const [wishlistColor, setWishlistColor] = useState(false);
	const url = (allImageData !== undefined && allImageData) || '';
	// console.log("src" ,url)

	const handleChange = (e) => {
		setSrc(e.target.src);
	};

	//  Wish list function ------------------------------------------------
  //* Danish Pinjari ----------
	const dispatch = useDispatch();
	//* ---------
	const handleWishList = (allData) => {
		// const { id } = allData;
		let newItem = { ...allData };
		console.log('newItem:', newItem);
		dispatch(add(newItem));
		setWishlistColor(!wishlistColor);
		// setWishlistColor(!wishlistColor);
	};
	//* Add to cart
	const handleAddtoCart = (allData) => {
		// const { id } = allData;
		let newItem = { ...allData };
		console.log('newItem:', newItem);
		dispatch(add(newItem));
	};

	return (
		<Box
			className="ImageMainBox"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<Box
				className="SingleImagesMagnify"
				width={{
					base: '80%',
					sm: '85%',
					md: '84%',
					lg: '76%',
					xl: '76%',
					'2xl': '76%',
				}}
				style={{
					border: '2px solid #eef0f3',
					height: '60vh',
					justifyContent: 'center',
				}}
			>
				<ReactImageMagnify
					style={{ padding: '20px' }}
					{...{
						smallImage: {
							alt: 'Wristwatch by Ted Baker London',
							isFluidWidth: true,
							src: src || url,
						},
						largeImage: {
							src: src || url,
							width: 1600,
							height: 700,
						},

						enlargedImagePosition: 'beside',

						enlargedImageContainerDimensions: {
							width: '200%',
							height: '150%',
						},

						shouldUsePositiveSpaceLens: true,
					}}
				/>
			</Box>

			<Box
				className="SingleMagnify"
				width={{
					base: '100%',
					sm: '100%',
					md: '84%',
					lg: '76%',
					xl: '76%',
					'2xl': '76%',
				}}
				height={{
					base: 'auto',
					sm: 'auto',
					md: '60vh',
					lg: '60vh',
					xl: '60vh',
					'2xl': '60vh',
				}}
				style={{ border: '2px solid #eef0f3', justifyContent: 'center' }}
			>
				<ReactImageMagnify
					style={{ padding: '20px' }}
					{...{
						smallImage: {
							alt: 'Wristwatch by Ted Baker London',
							isFluidWidth: true,
							src: src || url,
						},
						largeImage: {
							src: src || url,
							width: 1600,
							height: 700,
						},

						enlargedImagePosition: 'over',

						enlargedImageContainerDimensions: {
							width: '200%',
							height: '150%',
						},

						shouldUsePositiveSpaceLens: true,
					}}
				/>
			</Box>

			{/*  diff images three----------------------------- */}
			<Box
				mb="40px"
				style={{
					height: '10vh',
					width: '60%',
					display: 'flex',
					justifyContent: 'center',
					marginTop: '20px',
				}}
			>
				{image?.map((item, i) => {
					return (
						// console.log("item" ,item)

						<Box
							key={i}
							border="1px solid #eef0f3"
							width={{
								base: '35%',
								sm: '35%',
								md: '30%',
								lg: '25%',
								xl: '25%',
								'2xl': '25%',
							}}
							className="ThreeImagesChange"
							padding="7px"
						>
							<Image
								onMouseOver={handleChange}
								cursor="pointer"
								src={item.imageFront}
								alt="image"
								width="100%"
								height="100%"
							/>
						</Box>
					);
				})}

				{/* <Box border="1px solid #eef0f3" width="30%" className='ThreeImagesChange' padding="7px" >
                <Image onMouseOver={handleChange} cursor="pointer"  src="https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" alt="image"  width="100%" height="100%" />
                </Box>
            <Box border="1px solid #eef0f3" width="30%" className='ThreeImagesChange' padding="7px"  >
            <Image onMouseOver={handleChange} cursor="pointer" src="https://rukminim1.flixcart.com/image/312/312/xif0q/computer/q/j/c/-original-imagh3wecapg5gqn.jpeg?q=70" alt="image"  width="100%" height="100%" />
            </Box>
            <Box border="1px solid #eef0f3" width="30%" className='ThreeImagesChange' padding="7px" >
            <Image onMouseOver={handleChange} cursor="pointer" src="https://rukminim1.flixcart.com/image/312/312/ksyz8280/computer/8/v/i/cb-11igl05-thin-and-light-laptop-lenovo-original-imag6fh8sqpuk3ts.jpeg?q=70" alt="image"  width="100%" height="100%" />
            </Box> */}
			</Box>

			{/*  Wish list --------------------------------------------------------- */}
			<Box
				onClick={() => handleWishList(allData)}
				cursor="pointer"
				position="absolute"
				top={{
					base: '12px',
					sm: '12px',
					md: '14px',
					lg: '10px',
					xl: '12px',
					'2xl': '12px',
				}}
				right={{
					base: '10px',
					sm: '20px',
					md: '50px',
					lg: '65px',
					xl: '80px',
					'2xl': '80px',
				}}
				fontSize="25px"
			>
				{wishlistColor ? (
					<AiFillHeart color="ff5172" />
				) : (
					<FiHeart color="ff5172" />
				)}
			</Box>

			{/*  Add to cart button ---------------------------------------------  */}

			<Box
				border="2px  red"
				width="76%"
				height="auto"
				display="flex"
				justifyContent="space-between"
				margin="auto"
				alignItems="center"
				flexDirection={{
					base: 'column',
					sm: 'column',
					md: 'row',
					lg: 'row',
					xl: 'row',
					'2xl': 'row',
				}}
			>
				<Button
        onClick={() => handleAddtoCart(allData)}
					display="flex"
					mb="20px"
					backgroundColor="#ff9f00"
					variant="unstyled"
					width={{
						base: '105%',
						sm: '100%',
						md: '53%',
						lg: '47%',
						xl: '47%',
						'2xl': '47%',
					}}
					height="52px"
					borderRadius="2px"
				>
					{' '}
					<MdShoppingCart fontSize="22px" color="#fffcfa" />{' '}
					<Text color="#fffcfa" ml="2" fontSize="17px">
						ADD TO CART
					</Text>
				</Button>

				<Button
					display="flex"
					mb="20px"
					backgroundColor="#fb641b"
					variant="unstyled"
					width={{
						base: '105%',
						sm: '100%',
						md: '43%',
						lg: '47%',
						xl: '47%',
						'2xl': '47%',
					}}
					height="52px"
					borderRadius="2px"
				>
					{' '}
					<AddIcon fontSize="16px" color="#fffcfa" />{' '}
					<Text color="#fffcfa" ml="2" fontSize="17px">
						BUY NOW
					</Text>
				</Button>
			</Box>
		</Box>
	);
};

export { ImageData };
