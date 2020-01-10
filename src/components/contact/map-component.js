import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

class MapContainer extends React.Component {
  state = {
    lat: 35.769364,
    lng: 51.274712,
    zoom: 13,
  };
  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            im code from here :)
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default MapContainer;
