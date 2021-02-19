import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const LocationInput = ({address, setAddress}) => {
  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={setAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <input {...getInputProps({
              placeholder: "Digite uma localização..."
            })} />
            {loading ? <div>...loading</div> : null}
            {suggestions.map((suggestion) => {
              const style = {
                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
              }
              return(
                <div {...getSuggestionItemProps(suggestion, {style})} key={suggestion.placeId}>
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