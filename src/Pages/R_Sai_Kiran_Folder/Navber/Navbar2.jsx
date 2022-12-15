import { Box , Link ,PopoverTrigger,PopoverContent,PopoverArrow,PopoverHeader,PopoverBody,PopoverCloseButton,Button,Popover, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'
import "./Navbar2.css"


function Navbar2(){
    return (
    <Box bg='#0046be' w='100%' p={4} color='white'border={"2px solid red"} display={"flex"} justifyContent="space-between" paddingRight={"30px"} paddingLeft="30px">
    <Box display={"flex"} gap="15px">
    <Link>
        <Popover colorScheme="red">
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >Holiday Deals</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverHeader color="blue">Back Friday Deals Right Now</PopoverHeader>
                    <PopoverHeader color="blue">Gift Ideas</PopoverHeader>
                    <PopoverHeader color="blue">Gift Carts</PopoverHeader>
                    <PopoverHeader color="blue">Explore Holiday Inspirations</PopoverHeader>
                    <PopoverBody color="blue">Close<PopoverCloseButton /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
        <Link>Top Deals</Link>
        <Link id="Link1">Deal of the Day</Link>
        <Link id='Link2'>Totaltech Membership</Link>
        <Link id="Link3">Credit Cards</Link>
        <Link id="Link4">Gift Cards</Link>
        <Link id="Link5">Gift Ideas</Link>
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