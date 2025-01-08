import { useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
  DirectionsService,
} from "@react-google-maps/api";

const containerStyle = {
  width: "1200px",
  height: "600px",
};

// const center = {
//   lat: -3.745,
//   lng: -33.523,
// };

const center1 = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = ({ destinations }) => {
  const mapRef = useRef();

  // useEffect(() => {
  //     if(mapRef.current && )
  // })
  //   const { isLoaded } = useJsApiLoader({
  //     id: 'google-map-script',
  //     googleMapsApiKey: 'YOUR_API_KEY',
  //   })

  //   const [map, setMap] = useState(null);

  //   const onLoad = (mapinstance) =>{
  //     setMap(mapinstance);
  //   }

  const locations = useMemo(() => {
    console.log("the destinations are", destinations);
    let locations1 = destinations.map((destination) => ({
      address: destination,
      latLng: {
        lat: Math.random() * (40 - 35) + 35,
        lng: Math.random() + (-120 + 130) - 130,
      },
    }));
    console.log(locations1);
    return locations1;
  }, [destinations]);

  const center =
    locations.length > 0
      ? locations[0].latLng
      : { lat: 37.7749, lng: -122.4194 };
  const [directions, setDirections] = useState(null);

  const directionsCallback = (response) => {
    if ((response.status = "OK")) {
      setDirections(response);
    } else {
      console.error("Error fetching the directions", response);
    }
  };

  ///handling multiple destinations by chaining them in a way that DirectionService accpets
  const waypoints = destinations
    .slice(0, destinations.length - 1)
    .map((destination) => ({
      location: destination,
      stopover: true, //Mark these as stopover points
    }));

  const finalDestination = destinations[destinations.length - 1];

  //const calculateRoute = () => {};

  console.log("loactions are", locations);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAMw1cDE3EDe_Eh_Nd-JlJQ30D_VvTvcPQ">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        ref={mapRef}
      >
        <DirectionsService
          options={{
            origin: destinations[0],
            destination: finalDestination,
            travelMode: "DRIVING",
            waypoints,
            optimizeWaypoints: true,
          }}
          callback={directionsCallback}
        ></DirectionsService>

        {directions && <DirectionsRenderer directions={directions} />}
        {locations.map((location, index) => {
          return <Marker key={index} position={location.latLng} />;
        })}
        {/* <Marker position={center} />
        <Marker position={center1} /> */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
