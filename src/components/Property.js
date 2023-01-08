
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { Image } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react'
//import { ExternalLinkIcon } from '@chakra-ui/icons'


import DefaultImage from './images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID, currency, withShadow  } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex flexWrap='wrap' w='100%' p='5' style={{boxShadow: withShadow && '1px 10px 20px silver', padding: withShadow && 10}} paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
      <Box w='100%'>
        <Image w='100%' src={coverPhoto ? coverPhoto.url : DefaultImage} height={260} alt="house" />
      </Box>
      <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='blue'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>{currency || 'AED'} {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
           {agency && <Avatar size="md" borderRadius={'none'} src={agency?.logo?.url}></Avatar>}
          </Box>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex> 
        <Text fontSize='lg'>
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;