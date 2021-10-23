import * as React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = React.useState(null);

    const coordinates = searchResults.map(result => ({
        latitude: result.lat,
        longitude: result.long,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = React.useState({
        latitude: center.latitude,
        longitude: center.longitude,
        width: '100%',
        height: '100%',
        zoom: 10
    })
    
    return (
        <ReactMapGL mapStyle="mapbox://styles/12niiixxon/ckv3juvoo4rdm14p8buozemr2"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
        
        {searchResults.map((result) => (
            <div key={result.long}>
                <Marker
                    latitude={result.lat}
                    longitude={result.long}
                    offsetTop={-10}
                    offsetLeft={-20}
                >
                <p role="img" aria-label="push-pin" onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce">📍</p>
                </Marker>

                {selectedLocation === result.long ? (
                    <Popup
                        onClose={() => setSelectedLocation(null)}
                        closeOnClick={false}
                        latitude={result.lat}
                        longitude={result.long}
                    >

                    </Popup>
                ):(
                    false
                )}
            </div>
        ))}
        </ReactMapGL>
    )
}

export default Map
