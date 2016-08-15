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
            center: [31.77, 119.95],
            zoom: 14,
            zoomControl: false
        });
        L.esri.tiledMapLayer({
            id:'streetLayer',
            url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineStreetColor/MapServer"
        }).addTo(map);
        L.control.scale().addTo(map);
        var zoomControl = L.control.zoom({  
                   position: 'bottomright'  
         });  
         map.addControl(zoomControl);    
         
        window.map = map;
    }
}

export default Map