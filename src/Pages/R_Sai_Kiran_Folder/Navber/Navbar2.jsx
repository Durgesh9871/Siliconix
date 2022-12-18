import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box , Link ,PopoverTrigger,PopoverContent,PopoverArrow,PopoverBody,PopoverCloseButton,Button,Popover} from '@chakra-ui/react'
import "./Navbar1.css"


function Navbar2(){
    return (
    <Box bg='#0046be' id="box1"  p={4} color='white' display={"flex"} justifyContent="space-between" marginTop={"4rem"} paddingRight={"30px"} paddingLeft="30px" >
    <Box  display={"flex"} gap="15px" >
    <Link>
        <Popover colorScheme="red">
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >Holiday Deals</Button>
                  </PopoverTrigger>
                  <PopoverContent  color='white'>
                    <PopoverArrow />
                    <PopoverBody color="blue">Back Friday Deals Right Now</PopoverBody>
                    <PopoverBody color="blue">Gift Ideas</PopoverBody>
                    <PopoverBody color="blue">Gift Carts</PopoverBody>
                    <PopoverBody color="blue">Explore Holiday Inspirations</PopoverBody>
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
                  <PopoverContent bg='blue'>
                    <PopoverArrow />
                    <PopoverBody color="blue">Health & Wellness</PopoverBody>
                    <PopoverBody color="blue">Best Buy Outlet</PopoverBody>
                    <PopoverBody color="blue">Best Buy Business</PopoverBody>
                    <PopoverBody color="blue">Close<PopoverCloseButton value="bottom-start" /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
    </Box>
    
    <Box  display={"flex"} gap="15px">
        <Link>
        <Popover >
                  <PopoverTrigger>
                    <Button color="white" bg="#0046bf" colorScheme='white' variant='link' >Account <ChevronDownIcon marginTop={"5px"}/></Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody color="blue" width={"100%"}><Button width={"100%"}><Link href='/login'>Sign In</Link></Button></PopoverBody>
                    <PopoverBody color="blue" width={"100%"}><Button width={"100%"}><Link href='/signup'>Create Account</Link></Button></PopoverBody>
                    <PopoverBody color="blue">Account</PopoverBody>
                    <PopoverBody color="blue">Orders & Purchases</PopoverBody>
                    <PopoverBody color="blue">Your Products</PopoverBody>
                    <PopoverBody color="blue">Payment Methods</PopoverBody>
                    <PopoverBody color="blue">Protection Plans & Subscriptions</PopoverBody>
                    <PopoverBody color="blue">Digital Library</PopoverBody>
                    <PopoverBody color="blue">Close<PopoverCloseButton value="bottom-start" /></PopoverBody>
                  </PopoverContent>
                  
                </Popover>
        </Link>
        <Link>Recently Viewed</Link>
        <Link>Order Status</Link>
        <Link>Saved Items</Link>
    </Box>
  </Box>
  )
}

export default Navbar2