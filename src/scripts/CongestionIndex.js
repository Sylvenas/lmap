import L from 'leaflet';
import LE from 'esri-leaflet';

export function addGracLayer(layerName) {
    switch (layerName.id) {
        case 'cross':
            crossLayer();
            break;
        case 'road':
            roadLayer();
            break;
        case 'area':
            console.log(3);
            break;
        default:
            break;
    }

}
const crossLayer = () => {
    map.eachLayer((layer) => {
        if (layer.options.id != 'crossLayer' && layer.options.id != 'streetLayer')
            map.removeLayer(layer);
    });
    let crossLayer = L.esri.featureLayer({
        id: 'crossLayer',
        url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
    });
    map.addLayer(crossLayer);
}
const roadLayer = () => {
    map.eachLayer((layer) => {
        if (layer.options.id != 'roadLayer' && layer.options.id != 'streetLayer')
            map.removeLayer(layer);
    });
    let roadLayer = L.esri.featureLayer({
        url: 'https://services.arcgis.com/uCXeTVveQzP4IIcx/ArcGIS/rest/services/Bike_Routes/FeatureServer/0',
        style: function (feature) {
            var c, o = 0.75;
            switch (feature.properties.BIKEMODE) {
                case 'Low traffic through street':
                    c = '#007D7D';
                    break;
                case 'Bike boulevard':
                    c = '#00FF3C';
                    break;
                case 'Caution area':
                    c = '#FF0000';
                    break;
                case 'Local multi-use path':
                    c = '#00BEFF';
                    break;
                case 'Regional multi-use path':
                    c = '#b1a9d0';
                    break;
                case 'Moderate traffic through street':
                    c = '#FFEB00';
                    break;
                case 'Planned multi-use path':
                    c = '#000000';
                    break;
                case 'Bike lane':
                    c = '#328000';
                    o = '0.70';
                    break;
                case 'High traffic through street':
                    c = '#FFA500';
                    break;
                case 'Planned bike lane':
                    c = '#000000';
                    o = '1.0';
                    break;
                default:
                    c = '#C0C0C0';
            }
            return { color: c, opacity: o, weight: 5 };
        }
    }).addTo(map);

    roadLayer.on('mouseout', function (e) {
        document.getElementById('info-pane').innerHTML = 'Hover to Inspect';
    });

    roadLayer.on('mouseover', function (e) {
        document.getElementById('info-pane').innerHTML = e.layer.feature.properties.BIKEMODE;
    });
}


export const addCrossGracLayer = () => {
    map.eachLayer((layer) => {
        if (layer.options.id != 'crossLayer' && layer.options.id != 'streetLayer')
            map.removeLayer(layer);
    });
    let crossLayer = L.esri.featureLayer({
        id: 'crossLayer',
        url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
    });
    map.addLayer(crossLayer);
    crossLayer.on('mouseover', (e) => {
        let popup = L.popup(
            {
                offset: L.point(0, -20),
                closeButton: false
            })
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);

    })
}