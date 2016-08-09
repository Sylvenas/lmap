import React from 'react';
import L from 'leaflet';
import LE from 'esri-leaflet';

class Map extends React.Component {
    constructor() {
        super();
    }
    componentWillReceiveProps(nextProps) {
        // var searchVal = this.props.searchVal;
        // console.log(nextProps.searchVal);
        // console.log(map)
        // LE.featureLayer({
        //     url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
        // }).addTo(map)
    }
    render() {
        return (<div id="map"></div>)
    }
    componentDidMount() {
        var map = L.map("map", {
            center: [45.526, -122.667],
            zoom: 14,
            zoomControl: false
        });
        L.esri.tiledMapLayer({
            id:'streetLayer',
            url: "http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer"
        }).addTo(map);
        
        window.map = map;
    }
}

export default Map