import { useState } from 'react';
import { Flex, Select, Box, } from '@chakra-ui/react';

import { filterData } from '../api/filterData';
import React from 'react';



const SearchFilters = ({ chooseMsg }) => {

   const [filters] = useState(filterData);
   //console.log(filterData.filter(items=>items.value.includes("filter")));
   const [query, setQuery] = useState([]);
   const queryHandlar = (e, filter) => {
      setQuery([...query, {[filter.queryName]: e.target.value}])
      chooseMsg([...query, {[filter.queryName]: e.target.value}])
   }
   //searchProperties
   return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
    {filters?.map((filter) => (
      <Box key={filter.queryName}>
        <Select onChange={(e) => queryHandlar(e, filter)} placeholder={filter.placeholder} w='fit-content' p='2' >
          {filter?.items?.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option> 
          ))}
        </Select>
      </Box>
    ))}
   </Flex>
  
  );
}

export default SearchFilters;

