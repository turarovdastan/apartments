import {Flex, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from 'axios';
//import { fetchApi } from '../api/fetchApi';

import Property from "../components/Property";

const Home = () => {

    const [apidata, setApidata] = useState();

    const URL= 'https://bayut.p.rapidapi.com/properties/list';

   const fetchApi = async() => {
    try {
        const { data } = await axios.get(URL, {
          params: {
            locationExternalIDs:5002,
            purpose:"For-sale",
            hitsPerPage:10,
            },
        headers: {
            'X-RapidAPI-Key': 'b506967006msh711bdc517f7f409p11dc99jsn8d7f50c8c915',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
          });
          console.log(data);
          setApidata(data);
          console.log(apidata);         
    } catch (error) {
          console.log(error);
  }
};
    
    useEffect(() => {
       fetchApi()
      },[]);
    

    // useEffect( () => {
    //    fetchApi()
    //     .then((result)=>{
    //         console.log(result);
    //         setApidata(result.data);
    //         console.log(apidata);
    //     })
    //   }, [])

        
    return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      {/* <Flex flexWrap="wrap">
        {apidata.map((property) => <Property property={property} key={property.id} />)}
      </Flex> */}

      <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    {/* <Flex flexWrap='wrap'>
      {apidata.map((property) => <Property property={property} key={property.id} />)}
    </Flex> */}

    </Box>
  );
  }
export default Home;

