var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EstrategiaMisionCero20172023_1 = new ol.format.GeoJSON();
var features_EstrategiaMisionCero20172023_1 = format_EstrategiaMisionCero20172023_1.readFeatures(json_EstrategiaMisionCero20172023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstrategiaMisionCero20172023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstrategiaMisionCero20172023_1.addFeatures(features_EstrategiaMisionCero20172023_1);
var lyr_EstrategiaMisionCero20172023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstrategiaMisionCero20172023_1, 
                style: style_EstrategiaMisionCero20172023_1,
                popuplayertitle: "Estrategia Mision Cero (2017-2023)",
                interactive: true,
                title: 'Estrategia Mision Cero (2017-2023)'
            });
var format_INEGI20192022_2 = new ol.format.GeoJSON();
var features_INEGI20192022_2 = format_INEGI20192022_2.readFeatures(json_INEGI20192022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INEGI20192022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INEGI20192022_2.addFeatures(features_INEGI20192022_2);
var lyr_INEGI20192022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INEGI20192022_2, 
                style: style_INEGI20192022_2,
                popuplayertitle: "INEGI (2019-2022)",
                interactive: true,
                title: 'INEGI (2019-2022)'
            });
var format_2024hastaoctubre_3 = new ol.format.GeoJSON();
var features_2024hastaoctubre_3 = format_2024hastaoctubre_3.readFeatures(json_2024hastaoctubre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024hastaoctubre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024hastaoctubre_3.addFeatures(features_2024hastaoctubre_3);
var lyr_2024hastaoctubre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024hastaoctubre_3, 
                style: style_2024hastaoctubre_3,
                popuplayertitle: "2024 (hasta octubre)",
                interactive: true,
                title: '2024 (hasta octubre)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_EstrategiaMisionCero20172023_1.setVisible(true);lyr_INEGI20192022_2.setVisible(true);lyr_2024hastaoctubre_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_EstrategiaMisionCero20172023_1,lyr_INEGI20192022_2,lyr_2024hastaoctubre_3];
lyr_EstrategiaMisionCero20172023_1.set('fieldAliases', {'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'POINT_X': 'POINT_X', 'POINT_Y': 'POINT_Y', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_INEGI20192022_2.set('fieldAliases', {'TARGET_FID': 'TARGET_FID', 'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Join_Count': 'Join_Count', });
lyr_2024hastaoctubre_3.set('fieldAliases', {'TARGET_FID': 'TARGET_FID', 'GRID_ID': 'GRID_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Join_count': 'Join_count', });
lyr_EstrategiaMisionCero20172023_1.set('fieldImages', {'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'POINT_X': 'TextEdit', 'POINT_Y': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_INEGI20192022_2.set('fieldImages', {'TARGET_FID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Join_Count': 'TextEdit', });
lyr_2024hastaoctubre_3.set('fieldImages', {'TARGET_FID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Join_count': 'TextEdit', });
lyr_EstrategiaMisionCero20172023_1.set('fieldLabels', {'Join_Count': 'no label', 'TARGET_FID': 'hidden field', 'GRID_ID': 'no label', 'Shape_Leng': 'hidden field', 'POINT_X': 'hidden field', 'POINT_Y': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_INEGI20192022_2.set('fieldLabels', {'TARGET_FID': 'hidden field', 'GRID_ID': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'Join_Count': 'no label', });
lyr_2024hastaoctubre_3.set('fieldLabels', {'TARGET_FID': 'hidden field', 'GRID_ID': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'Join_count': 'no label', });
lyr_2024hastaoctubre_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});