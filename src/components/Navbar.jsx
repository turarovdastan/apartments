//import { Link } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100' padding={2}>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Rent-Match</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link to='/Search'>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link to='/Buyproperty'>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link to='/Sellproperty'>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link> 
        </MenuList> 
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
