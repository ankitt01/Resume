import React, {useState} from 'react'
import ReactMapGL from 'react-map-gl';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Test = () => {
      
  return (
    <div className="map">
        <MapContainer center={[44.96366, 19.61045]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[44.96366, 19.61045]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  )
}

export default Test