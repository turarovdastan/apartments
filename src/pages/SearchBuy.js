
import React, {useState, useEffect} from 'react'
import axios from "axios"
import Property from '../components/Property';
import { Flex } from '@chakra-ui/react';

const SearchBuy = () => {

   const [apidataa, setApidataa] = useState([]);
   const URL= 'https://bayut.p.rapidapi.com/properties/list';
    

  const fetchApii = async() => {
    try {
        const { data } = await axios.get(URL, {
          params: {
            locationExternalIDs:5002,
            purpose:"For-Sale",
            hitsPerPage:6,
            },
        headers: {
            'X-RapidAPI-Key': 'cc2873c483msha71a2e0f5f8d4dfp1e533bjsn313e9ce0ba33',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
          });
          console.log(data);
          setApidataa(data.hits);
          console.log(apidataa);         
    } catch (error) {
          console.log(error);
  }
};
 useEffect(() => {
       fetchApii();
       },[]);


  return (
    <Flex flexWrap='wrap'>
         {apidataa.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  )
}

export default SearchBuy