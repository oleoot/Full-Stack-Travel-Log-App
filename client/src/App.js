import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 50.45466,
    longitude: 30.5238,
    zoom: 3
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/oleoot/ckaoyg5wm0gz81jl2j9dwk4r1'
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}
export default App
