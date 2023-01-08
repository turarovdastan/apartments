import { useState, useEffect } from 'react';
import { Flex, Box, Text, Icon, Image } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Property from '../components/Property';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchFilters from './SearchFilters';
import axios from "axios";
import noresult from '../components/images/noresult.svg';



const Search = () => {
 const [message, setMessage] = useState('');

  function chooseMsg (mess){
    let query = {}
    mess.map(i => query = {...query, ...i})
    setMessage(query);
  };

  const [searchFilters, setSearchFilters] = useState(false);
  const [apidataa, setApidataa] = useState([]);
  const URL= 'https://bayut.p.rapidapi.com/properties/list';


    
  
  const fetchApii = async(message) => {

    try {
        const { data } = await axios.get(URL, {
          params: {
            locationExternalIDs:5002,
            purpose:"For-rent",
            hitsPerPage:6,
            ...message 
            },
        headers: {
            'X-RapidAPI-Key': 'cc2873c483msha71a2e0f5f8d4dfp1e533bjsn313e9ce0ba33',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
          });
          setApidataa(data.hits);
                   
    } catch (error) {

       console.log(error);

  }
};
    useEffect(() => {
      fetchApii();
    },[]);
    useEffect(() => {
      console.log(message);
      fetchApii(message);
    },[message]);
  return (
    <Box>
      <Navbar/>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      
       {searchFilters && <SearchFilters chooseMsg={chooseMsg} />}
    
       <Flex flexWrap='wrap'>
        
         {apidataa.map((property) => <Property property={property} key={property.id} />)}
       </Flex>

       {[].length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} alt="no image"/>
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
      <Footer/>
    </Box>
    // <Box>
    //   <Navbar/>
    //  
    //  
    //   <Text fontSize='2xl' p='4' fontWeight='bold'>
    //     {/* Properties {router.query.purpose} */}
    //   </Text>
    //  
    //  
    //   <Footer/>
    // </Box>
  );
};

// export async function getServerSideProps({ query }) {
//   const purpose = query.purpose || 'for-rent';
//   const rentFrequency = query.rentFrequency || 'yearly';
//   const minPrice = query.minPrice || '0';
//   const maxPrice = query.maxPrice || '1000000';
//   const roomsMin = query.roomsMin || '0';
//   const bathsMin = query.bathsMin || '0';
//   const sort = query.sort || 'price-desc';
//   const areaMax = query.areaMax || '35000';
//   const locationExternalIDs = query.locationExternalIDs || '5002';
//   const categoryExternalID = query.categoryExternalID || '4';

//   const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
//   const rent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose1}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

//   return {
//     props: {
//       properties: data?.hits,
//     },
//   };
//}

export default Search;
