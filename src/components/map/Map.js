import React from 'react';
import L from 'leaflet';
import LE from 'esri-leaflet';

class Map extends React.Component {
    render() {
        return (<div id="map"></div>)
    }
    componentDidMount() {
        var map = L.map("map", {
            center: [45.526, -122.667],
            zoom: 13,
            zoomControl:false
        });
        LE.basemapLayer("Topographic").addTo(map);
        window.map=map;
    }
}

export default Map