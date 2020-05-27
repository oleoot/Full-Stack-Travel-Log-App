import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { listLogEntries } from './API'

const App = () => {
  const [logEntries, setLogEntries] = useState([])
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 50.45466,
    longitude: 30.5238,
    zoom: 3
  });


  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries()
      setLogEntries(logEntries);
      console.log(logEntries);

    })()

  }, [])

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/oleoot/ckaoyg5wm0gz81jl2j9dwk4r1'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}>
      {
        logEntries.map(entry => (
          <Marker key={entry._id} latitude={entry.latitude} longitude={entry.longitude} offsetLeft={-12} offsetTop={-24}>
            <svg
              className="marker"
              style={{
                width: '24px',
                height: '24px'
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
            </svg>
          </Marker>
        )

        )
      }

    </ReactMapGL>
  );
}
export default App
