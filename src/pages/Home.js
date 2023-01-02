import {Flex, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import axios from 'axios';
//import { fetchApi } from '../api/fetchApi';

import Property from "../components/Property";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Home = () => {

    const [apidata, setApidata] = useState([]);
    const [apidataa, setApidataa] = useState([]);

    const URL= 'https://bayut.p.rapidapi.com/properties/list';
    

    const fetchApii = async() => {
      try {
          const { data } = await axios.get(URL, {
            params: {
              locationExternalIDs:5002,
              purpose:"For-rent",
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



   const fetchApi = async() => {
    try {
        const { data } = await axios.get(URL, {
          params: {
            locationExternalIDs:5002,
            purpose:"For-sale",
            hitsPerPage:6,
            },
        headers: {
            'X-RapidAPI-Key': 'cc2873c483msha71a2e0f5f8d4dfp1e533bjsn313e9ce0ba33',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
          });
          console.log(data);
          setApidata(data.hits);
          console.log(apidata);         
    } catch (error) {
          console.log(error);
  }
};
    
    // useEffect(() => {
      
    //    fetchApi();
    //    fetchApii();
    //   },[]);


    

      useEffect(() => {
        console.log(apidata);
      }, [apidata]);  
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
      <Navbar/>
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
      <Flex flexWrap="wrap">
        {apidata.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

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
    <Flex flexWrap='wrap'>
      {apidataa.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    <Footer/>
    </Box>
  );
  }
export default Home;

