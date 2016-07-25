import React from 'react';

class Map extends React.Component {
    constructor() {
        super();
    }
    componentWillReceiveProps(nextProps) {
    }

    render() {
        return (<div id="map"></div>)
    }
    
    componentDidMount() {
        window.dojoRequire([
            "esri/map",
            "esri/layers/FeatureLayer",
            "dojo/domReady!"
        ],
            function (
                Map,
                FeatureLayer
            ) {

                var map = new Map("map", {
                    basemap: "hybrid",
                    center: [-82.44109, 35.6122],
                    zoom: 17
                });

                /****************************************************************
                 * Add feature layer - A FeatureLayer at minimum should point
                 * to a URL to a feature service or point to a feature collection 
                 * object.
                 ***************************************************************/

                // Carbon storage of trees in Warren Wilson College.
                var featureLayer = new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0");

                map.addLayer(featureLayer);

            });
    }
}

export default Map