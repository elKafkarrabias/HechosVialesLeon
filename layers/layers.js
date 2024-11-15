var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HechosVialesLen2024_1 = new ol.format.GeoJSON();
var features_HechosVialesLen2024_1 = format_HechosVialesLen2024_1.readFeatures(json_HechosVialesLen2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HechosVialesLen2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HechosVialesLen2024_1.addFeatures(features_HechosVialesLen2024_1);
var lyr_HechosVialesLen2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HechosVialesLen2024_1,
maxResolution:5.600893230452393,
 
                style: style_HechosVialesLen2024_1,
                popuplayertitle: "Hechos Viales León- 2024",
                interactive: true,
                title: 'Hechos Viales León- 2024'
            });
var format_HechosVialesINEGI20192022_2 = new ol.format.GeoJSON();
var features_HechosVialesINEGI20192022_2 = format_HechosVialesINEGI20192022_2.readFeatures(json_HechosVialesINEGI20192022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HechosVialesINEGI20192022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HechosVialesINEGI20192022_2.addFeatures(features_HechosVialesINEGI20192022_2);
var lyr_HechosVialesINEGI20192022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HechosVialesINEGI20192022_2,
maxResolution:5.600893230452393,
 
                style: style_HechosVialesINEGI20192022_2,
                popuplayertitle: "HechosViales INEGI 2019-2022",
                interactive: true,
    title: 'HechosViales INEGI 2019-2022<br />\
    <img src="styles/legend/HechosVialesINEGI20192022_2_0.png" /> Fatal<br />\
    <img src="styles/legend/HechosVialesINEGI20192022_2_1.png" /> No fatal<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_HechosVialesLen2024_1.setVisible(true);lyr_HechosVialesINEGI20192022_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HechosVialesLen2024_1,lyr_HechosVialesINEGI20192022_2];
lyr_HechosVialesLen2024_1.set('fieldAliases', {'Fecha': 'Fecha', 'año': 'año', 'mes': 'mes', 'fatalidad/lesionados': 'fatalidad/lesionados', 'en colision con': 'en colision con', 'muertes': 'muertes', 'lesionados': 'lesionados', 'Guardia Nacional': 'Guardia Nacional', 'Nota': 'Nota', });
lyr_HechosVialesINEGI20192022_2.set('fieldAliases', {'Clase de accidentes': 'Clase de accidentes', 'Entidad': 'Entidad', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_HechosVialesLen2024_1.set('fieldImages', {'Fecha': 'TextEdit', 'año': 'Range', 'mes': 'Range', 'fatalidad/lesionados': 'TextEdit', 'en colision con': 'TextEdit', 'muertes': 'Range', 'lesionados': 'Range', 'Guardia Nacional': 'CheckBox', 'Nota': 'TextEdit', });
lyr_HechosVialesINEGI20192022_2.set('fieldImages', {'Clase de accidentes': 'TextEdit', 'Entidad': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_HechosVialesLen2024_1.set('fieldLabels', {'Fecha': 'no label', 'año': 'no label', 'mes': 'no label', 'fatalidad/lesionados': 'no label', 'en colision con': 'no label', 'muertes': 'no label', 'lesionados': 'no label', 'Guardia Nacional': 'no label', 'Nota': 'no label', });
lyr_HechosVialesINEGI20192022_2.set('fieldLabels', {'Clase de accidentes': 'no label', 'Entidad': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_HechosVialesINEGI20192022_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});