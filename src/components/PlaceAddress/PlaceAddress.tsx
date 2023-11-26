import { useState, useEffect } from "react";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getZipCode,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { TextField } from "@mui/material";

const Places = ({ setDataAddress }: any) => {
  const [selected, setSelected] = useState<object>({});

  // Load Google Maps script
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC7F94QX9enf8Ry_M0vEiCjzTNA9efTVec",
    libraries: ["places"],
  });

  // Update data address when 'selected' changes
  useEffect(() => {
    setDataAddress(selected);
    console.log("selected:", selected);
  }, [selected]);

  if (!isLoaded) return <div>Loading...</div>;
  //   return <Map />;
  return (
    <div className="places-container">
      <PlacesAutocomplete setSelected={setSelected} />
    </div>
  );
};

const PlacesAutocomplete = ({ setSelected }: any) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  // Handle address selection
  const handleSelect = async (address: any) => {
    setValue(address);
    clearSuggestions();

    const results = await getGeocode({ address }); // Get geocode and LatLng from the selected address
    const { lat, lng } = await getLatLng(results[0]);

    setSelected({ lat, lng, results });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Ville"
      />

      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Places;
