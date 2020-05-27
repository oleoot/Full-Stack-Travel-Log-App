import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { listLogEntries } from './API'

const App = () => {
  const [logEntries, setLogEntries] = useState([])
  const [showPopup, setShowPopup] = useState({});
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
          <>
            <Marker key={entry._id} latitude={entry.latitude} longitude={entry.longitude}>
              <div onClick={() => setShowPopup({
                [entry._id]: true,
              })}>
                <svg
                  className="marker"
                  style={{
                    width: `${12 * viewport.zoom}px`,
                    height: `${12 * viewport.zoom}px`,
                    maxHeight: '30',
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
            </Marker>
            {
              showPopup[entry._id] ? (
                <Popup
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                  anchor="top" >
                  <div className="popup">
                    <h3>{entry.title}</h3>
                    <p>{entry.comments}</p>
                    <small>Visited on: {new Date(entry.visitDate).toLocaleDateString()}</small>
                  </div>
                </Popup>
              ) : null
            }
          </>

        ))
      }
    </ReactMapGL >
  );
}
export default App
