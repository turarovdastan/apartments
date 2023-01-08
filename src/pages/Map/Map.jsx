import React, { useState, useEffect } from "react";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import Property from '../../components/Property';
import marker from './imgs/location.svg';
import { Icon } from 'leaflet'
const myIcon = new Icon({
 iconUrl: marker,
 iconSize: [32,32]
})


function LocationMarker({coordinates, places}) {
    const map = useMapEvents({
    })
    map.flyTo(coordinates, 10)
    return (
        places.map((place, i) => {
            return place && place.latitude && place.longitude  && 
            (<Marker key={i} 
                position={{lat: place.latitude.toString(), lng: place.longitude.toString()}}
                icon={myIcon} >
                    <Popup>
                        <Property property={{ coverPhoto: {url: place.imgSrc}, price: place.price, rentFrequency: place.rentZestimate, rooms: place.bedrooms, title: '', baths: place.bathrooms, area: place.livingArea, agency: '', isVerified: '', externalID: place.zpid, currency: place.currency }} />
                    </Popup>
             </Marker>)
        } )
    )
  }

const Map = ( {setCoordinates, setBounds, coordinates, places} ) => {
    const [mapCoordinates, setMapCoordinates] = useState(['34.01822','-118.504744'])
    useEffect(() => {
        console.log(coordinates);
        setMapCoordinates([coordinates.latitude.toString(), coordinates.longitude.toString()])
    }, [coordinates])

      
    return (
            <MapContainer center={mapCoordinates} zoom={12}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker coordinates={mapCoordinates} places={places} />
            </MapContainer>
    );
}
export default Map;
