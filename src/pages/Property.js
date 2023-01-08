import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import { 
    Input,   
    Select,
    Text, 
    Icon,
    Flex, 
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
} from '@chakra-ui/react';
import { getPlacesData } from '../api/getCoord';
import List from "./List/List";
import Map from "./Map/Map";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { filterData, location_filters } from '../api/getCoordData';
import { BsFilter } from 'react-icons/bs';




function ModalSearch({filters, queryHandlar, resetAllFilters}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const resetAllFiltersPropCall = () => {
        resetAllFilters()
        onClose()
    }
    return (
      <>
        <Flex
            onClick={onOpen}
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
        <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Search Property By Filters</ModalHeader>
                <ModalCloseButton />
            <ModalBody>
            <Grid container spacing={1} style={{width: '100%'}} p='4'>
            {filters?.map((filter) => (
                <Grid item xs={6} md={6} key={filter.queryName} justifyContent='space-between' alignItems='center'>
                    {filter.items && <Select onChange={(e) => queryHandlar(e, filter)} placeholder={filter.placeholder} w='100%' p='2' >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                            {item.name}
                            </option> 
                        ))}
                    </Select>}
                </Grid>
            ))}
            </Grid>
            </ModalBody>

            <ModalFooter>
                <Flex style={{gap: 10}}>
                    <Button style={{background: '#4299E1',  color: '#fff'}}  variant='ghost' onClick={resetAllFiltersPropCall }>Reset all Filters</Button>
                    <Button style={{background: '#4299E1',  color: '#fff'}}  variant='ghost' onClick={onClose}>Apply</Button>
                    <Button style={{background: '#4299E1',  color: '#fff'}}  colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </Flex>
            </ModalFooter>
        </ModalContent>
        </Modal>

        
      </>
    )
  }

const App = ()=> {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({lat:0, lng:0});
    const [bounds, setBounds] = useState({sw:0, ne:0});
    const [location, setLocation] = useState('Huston')
    const [message, setMessage] = useState('');
    const [filters, setSearchFilters] = useState(filterData);

    
    const [query, setQuery] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({ value: 1, label: "City", selected: true})

    const queryHandlar = (e, filter) => {
       setQuery([...query, {[filter.queryName]: e.target.value}])
       chooseMsg([...query, {[filter.queryName]: e.target.value}])
    }
    const fetchPlaces = (params) => {
        let locationData = {}
        if(selectedLocation.value === 1) {
            locationData = {
                location: location
            }
        }else {
            locationData = {
                zpid: location
            }
        }
        getPlacesData(bounds,'','', locationData || {}, params || {})
        .then((data)=>{
            setPlaces(data?.results || []);
        })
    }
    const resetAllFilters = () => {
        setSearchFilters(filterData)
        fetchPlaces()
    }
    function chooseMsg (mess){
      let query = {}
      mess.map(i => query = {...query, ...i})
      setMessage(query);
    };

    useEffect(() => {
        fetchPlaces()
    }, []);

    useEffect(() => {
        fetchPlaces(message)
    }, [message])
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) =>{
    //         setCoordinates({lat: latitude, lng:longitude});
    //     })
    // }, []);

    // useEffect(() => {
    //     console.log(coordinates, bounds.sw, bounds.ne);
    //     getPlacesData(bounds.sw, bounds.ne, coordinates, location)
    //     .then((data)=>{
    //         console.log(data);
    //         setPlaces(data.results);
    //     })
    // },[coordinates, bounds]);
    
    
    return(
        <>  
        <Navbar/>
        <ModalSearch filters={filters} queryHandlar={queryHandlar} resetAllFilters={resetAllFilters} />
        <Grid container spacing={2} alignItems='center' style={{width: '100%'}}>
            <Grid>
                <FormControl p={4}>
                    <FormLabel>
                        Select type location
                    </FormLabel>
                    <Select
                        size="md"
                    >
                        {location_filters.map(location_filter => <option onClick={() => setSelectedLocation(location_filter)} value={location_filter.value} selected={location_filter?.selected}>{location_filter.label}</option>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item md={4}>
            <FormControl p={4}>
                <FormLabel>
                    Search by {selectedLocation.label}
                </FormLabel>
                <Input placeholder={selectedLocation.label} onChange={(e) => setLocation(e.target.value)} className="input-main" />
            </FormControl>
            </Grid>
            <Grid item md={2}>
                <Button onClick={() => fetchPlaces()} style={{marginTop: 25,background: '#4299E1', width: '100%', color: '#fff'}} >Apply</Button>
            </Grid>
        </Grid>
        <Grid container spacing={1} style={{width: '100%'}}>
            <Grid item xs={12} md={8}>
                {places[0] ? <Map 
                    setCoordinates = {setCoordinates}
                    setBounds = {setBounds}
                    coordinates = {places[0] || coordinates}
                    places={places}
                /> : (<h1>loading...</h1>)}
            </Grid>
            <Grid item xs={12} md={4} >
                <List places={places}/>
            </Grid> 
        </Grid>
        <Footer/>
            
        </>
        
    );
}
export default App;
