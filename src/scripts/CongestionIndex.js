import L from 'leaflet';
import LE from 'esri-leaflet';
import {GeoJsonPoints, geo_playback} from '../test/US';
import * as lmap from '../libs/lmap';

export const addCrossGracLayer = (geoDate) => {
    map.eachLayer((layer) => {
        if (layer.options.id != 'streetLayer')
            map.removeLayer(layer);
    });
    const getColor = (feature) => {
        let index = feature.properties.index;
        switch (true) {
            case index < 2:
                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 2 });
            case index < 4:
                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#6AB72D', heartbeat: 2 });
            case index < 6:
                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#ECE839', heartbeat: 2 });
            case index < 8:
                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#F29618', heartbeat: 2 });
            case index < 10:
                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#E41A16', heartbeat: 2 });
            default:
                return lmap.icon({ iconSize: [index * 2, index * 2], color: '#36AE4C', heartbeat: 2 });

        }
    };
    const pointToLayer = (feature, latlng) => {
        return L.marker(latlng, { icon: getColor(feature) });
    };
    const onEachFeature = (feature, layer) => {
        var popupContent = feature.properties.name + "<br>指数: "
            + feature.properties.index;

        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
        }
        layer.bindPopup(popupContent);
    }
    var geojsonlayer = L.geoJson(geoDate, {
        id: 'crossLayer',
        pointToLayer: pointToLayer,
        onEachFeature: onEachFeature
    }).addTo(map);

    // crossLayer.on('mouseover', (e) => {
    //     let popup = L.popup(
    //         {
    //             offset: L.point(0, -20),
    //             closeButton: false
    //         })
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(map);

    // })
}

export const playback = (a) => {
    let markerPlayBack = lmap.geoTime(geo_playback, {
        map: map,
        duration: 1000
    });
    return markerPlayBack;
}