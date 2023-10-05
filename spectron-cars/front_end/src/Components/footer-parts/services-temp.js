import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Temp() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }, (error) => {
        console.error(error);
      });
    }, []);
  
    if (location) {
      return (
        <div>
            <a href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}>
          Current Location
        </a>
          Your current location is: https://www.google.com/maps/?q={location.latitude}, {location.longitude}
        </div>
      );
    } else {
      return <div>Loading your current location...</div>;
    } 
}
