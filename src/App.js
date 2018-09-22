import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeckGL from 'deck.gl';
import {StaticMap} from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = mapbox; // insert mapbox token here

// Initial viewport settings
const viewState = {
  longitude: -100,
  latitude: 38,
  zoom: 4,
  pitch: 0,
  minZoom: 2,
  maxZoom: 8
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <DeckGL
          controller={true}
          initialViewState={viewState}
          >
          <StaticMap
            mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
            mapStyle='mapbox://styles/mapbox/dark-v9'
            />
        </DeckGL>
      </div>
    );
  }
}

export default App;
