import { Box , Link ,PopoverTrigger,PopoverContent,PopoverArrow,PopoverHeader,PopoverBody,PopoverCloseButton,Button,Popover, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'



function Navbar2(){
    return (<Box bg='#0046be' w='100%' p={4} color='white' display={"flex"} justifyContent="space-between" paddingRight={"30px"} paddingLeft="30px">
    <Box display={"flex"} gap="15px">
        <Menu>
        <MenuButton as={Button} colorScheme='#0046be' >
        Holiday Deals
       </MenuButton>
       <MenuList bg={"#0046be"} color="black" marginTop={"8px"}>
    <MenuItem>Back Friday Deals Right Now</MenuItem>
    <MenuItem>Gift Ideas</MenuItem>
    <MenuItem>Gift Carts</MenuItem>
    <MenuItem>Explore Holiday Inspirations</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
        </Menu>
        <Link>Top Deals</Link>
        <Link>Deal of the Day</Link>
        <Link>Totaltech Membership</Link>
        <Link>Credit Cards</Link>
        <Link>Gift Cards</Link>
        <Link>Gift Ideas</Link>
        <Link>
        <Popover >
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >More </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader color="blue">Health & Wellness</PopoverHeader>
                    <PopoverHeader color="blue">Best Buy Outlet</PopoverHeader>
                    <PopoverHeader color="blue">Best Buy Business</PopoverHeader>
                    <PopoverBody color="blue">Close<PopoverCloseButton value="bottom-start" /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
    </Box>
    <Box  display={"flex"} gap="15px">
        <Link>
        <Popover >
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >Account </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader color="blue" width={"100%"}><Button width={"100%"}><Link href='/login'>Sign In</Link></Button></PopoverHeader>
                    <PopoverHeader color="blue" width={"100%"}><Button width={"100%"}><Link href='/signup'>Create Account</Link></Button></PopoverHeader>
                    <PopoverHeader color="blue">Account</PopoverHeader>
                    <PopoverHeader color="blue">Orders & Purchases</PopoverHeader>
                    <PopoverHeader color="blue">Your Products</PopoverHeader>
                    <PopoverHeader color="blue">Payment Methods</PopoverHeader>
                    <PopoverHeader color="blue">Protection Plans & Subscriptions</PopoverHeader>
                    <PopoverHeader color="blue">Digital Library</PopoverHeader>
                    <PopoverBody color="blue">Close<PopoverCloseButton value="bottom-start" /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
        <Link>Recently Viewed</Link>
        <Link>Order Status</Link>
        <Link>Saved Items</Link>
    </Box>
  </Box>)
}

export default Navbar2