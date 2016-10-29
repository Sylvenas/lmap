import React from 'react';
import L from 'leaflet';
import LE from 'esri-leaflet';

class Map extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div id="map"></div>)
    }
    componentDidMount() {
        var map = L.map("map", {
            center: [28.41, 121.355],
            zoom: 5,
            zoomControl: false
        });

        LE.tiledMapLayer({
            id: 'streetLayer',
            url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
        }).addTo(map);

        

        // var basemapLayer = new L.TileLayer('https://b.tiles.mapbox.com/v4/mapbox.run-bike-hike/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA',{
        //     id: 'streetLayer'
        // }).addTo(map);

        L.control.scale().addTo(map);
        var zoomControl = L.control.zoom({
            position: 'bottomright'
        });
        map.addControl(zoomControl);
        map.attributionControl = false;

        window.map = map;
    }
}

export default Map