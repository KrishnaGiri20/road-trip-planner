import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
  width: "1200px",
  height: "600px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapComponent = () => {
  //   const { isLoaded } = useJsApiLoader({
  //     id: 'google-map-script',
  //     googleMapsApiKey: 'YOUR_API_KEY',
  //   })

  //   const [map, setMap] = useState(null);

  //   const onLoad = (mapinstance) =>{
  //     setMap(mapinstance);
  //   }

  return (
    <LoadScript googleMapsApiKey="AIzaSyAMw1cDE3EDe_Eh_Nd-JlJQ30D_VvTvcPQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
