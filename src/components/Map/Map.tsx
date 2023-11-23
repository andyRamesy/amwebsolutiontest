import React, { Dispatch, useEffect, useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { centerList } from "../../data/centerList";
import { createRoot } from "react-dom/client";
import { useSelector } from "react-redux";
import { IUser } from "../../type/type";
import { GoogleMap } from "@googlemaps/google-maps-services-js"; // Import the Google Maps types

function Map() {
  return (
    <Wrapper
      version="beta"
      libraries={["marker"]}
      apiKey="AIzaSyC7F94QX9enf8Ry_M0vEiCjzTNA9efTVec"
    >
      <MyMapComponent />
    </Wrapper>
  );
}

function MyMapComponent() {
   // State to hold the Google Map instance
  const [map, setMap]: [GoogleMap | undefined, Dispatch<React.SetStateAction<GoogleMap | undefined>>] = useState()
  const ref: any = useRef(); // Reference to the map container element
  const mapOptions = {
    center: { lat: -18.898332, lng: 47.531137 },
    zoom: 10,
    disableDefaultUI: true,
  };

  // Create the Google Map when the component mounts
  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
    <>
      <div ref={ref} id="map" />
      {map && <CentersnPatient map={map} />}
    </>
  );
}

// Component to display centers and patient location markers
function CentersnPatient({ map }: any) {
  const userDetails = useSelector(
    (state: IUser) => state.userReducer.userDetails
  );
  
  const [dataCenter, setDataCenter] = useState(centerList);
  const urlColor = "http://maps.google.com/mapfiles/ms/icons/"
  const colorCenters = urlColor + "blue-dot.png" 
  const colorPatient = urlColor + "red-dot.png"

    // Coordinates for the patient's location
  const coordsPatient = {
    lat: userDetails.address.lat,
    lng: userDetails.address.lng
  } 
  return (
    <>
      {dataCenter.map((center) => (
        <Marker map={map} key={center.id} position={center.address.coords} color={colorCenters}>
          <div>
            <h2>{center.name}</h2>
          </div>
        </Marker>
      ))}
      <Marker map={map} position={coordsPatient} color={colorPatient}></Marker>
    </>
  );
}

// Component to manage individual markers on the map
function Marker({ map, children, position , color }: any) {
  
  const markerRef: any = useRef(
    new google.maps.Marker({ position, map, icon: { url: color } })
  );
  const rootRef: any = useRef();


    // Create a root for rendering marker content
  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = createRoot(container);

    }
  }, []);

  return <></>;
}

export default Map;
