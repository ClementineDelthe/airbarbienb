import { useState } from 'react';
import Map, {Marker, MarkerEvent, Popup} from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

const MapResults = ({searchResults}) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <div>
      <Map
        mapStyle='mapbox://styles/clementinedelthe/cltg2vqxj009u01nretoo9tba'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewPort(nextViewport)}
      >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
          longitude={result.long}
          latitude={result.lat}
          offsetLeft={-20}
          offsetTop={-10}
          >
            <p
            className="cursor-pointer text-2xl animate-bounce"
            aria-label="push-pin"
            onClick={() => setSelectedLocation(result)}
            >📍</p>
          </Marker>
          {selectedLocation.long === result.longitude ? (
            <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result.lat}
            longitude={result.long}
            >{result.title}</Popup>
          ) : false}
        </div>
      ))}
    </Map>
    </div>
  )
}

export default MapResults;
