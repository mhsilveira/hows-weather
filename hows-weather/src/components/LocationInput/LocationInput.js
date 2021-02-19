import React, {useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


const LocationInput = ({setAddress}) => {
  const [valorCampo, setValorCampo] = useState("");

  const handleSelect = async result => {
    geocodeByAddress(result)
      .then(results => getLatLng(results[0]))
      .then(latLng  => setAddress(latLng))
      .catch(error  => console.error('Error', error))
  }  
  
  return (
    <>
      <PlacesAutocomplete
        value={valorCampo}
        onChange={setValorCampo}
        onSelect={handleSelect}
        highlightFirstSuggestion={true}
        autoFocus={true}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <input {...getInputProps({
              placeholder: "Digite uma localização..."
            })} />
            {loading ? <div>...loading</div> : null}
            {suggestions.map((suggestion) => {
              const style = suggestion.active
                ? { backgroundColor: 'red', cursor: 'pointer' }
                : { backgroundColor: 'white', cursor: 'pointer' };
                const className = {borderRadius: '25px', border: 'thin solid black'};
              return(
                <div {...getSuggestionItemProps(suggestion, {
                  style, className
                  })} key={suggestion.placeId}>
                  {suggestion.description}
                </div>
              )
            })}
          </>
        )}
      </PlacesAutocomplete>
    </>
  )
}

export default LocationInput;