var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_estadosl_2007_1 = new ol.format.GeoJSON();
var features_estadosl_2007_1 = format_estadosl_2007_1.readFeatures(json_estadosl_2007_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estadosl_2007_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estadosl_2007_1.addFeatures(features_estadosl_2007_1);
var lyr_estadosl_2007_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estadosl_2007_1, 
                style: style_estadosl_2007_1,
                popuplayertitle: "estadosl_2007",
                interactive: true,
                title: '<img src="styles/legend/estadosl_2007_1.png" /> estadosl_2007'
            });
var format_APUnificado_2 = new ol.format.GeoJSON();
var features_APUnificado_2 = format_APUnificado_2.readFeatures(json_APUnificado_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APUnificado_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APUnificado_2.addFeatures(features_APUnificado_2);
var lyr_APUnificado_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APUnificado_2, 
                style: style_APUnificado_2,
                popuplayertitle: "AP Unificado",
                interactive: true,
                title: '<img src="styles/legend/APUnificado_2.png" /> AP Unificado'
            });
var format_Rios_3 = new ol.format.GeoJSON();
var features_Rios_3 = format_Rios_3.readFeatures(json_Rios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_3.addFeatures(features_Rios_3);
var lyr_Rios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_3, 
                style: style_Rios_3,
                popuplayertitle: "Rios",
                interactive: true,
    title: 'Rios<br />\
    <img src="styles/legend/Rios_3_0.png" /> Paraiba do Sul<br />\
    <img src="styles/legend/Rios_3_1.png" /> Tiete<br />'
        });
var format_NucleoSOS1_4 = new ol.format.GeoJSON();
var features_NucleoSOS1_4 = format_NucleoSOS1_4.readFeatures(json_NucleoSOS1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NucleoSOS1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NucleoSOS1_4.addFeatures(features_NucleoSOS1_4);
var lyr_NucleoSOS1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NucleoSOS1_4, 
                style: style_NucleoSOS1_4,
                popuplayertitle: "Nucleo SOS 1",
                interactive: true,
                title: '<img src="styles/legend/NucleoSOS1_4.png" /> Nucleo SOS 1'
            });
var format_NcleoParaba_5 = new ol.format.GeoJSON();
var features_NcleoParaba_5 = format_NcleoParaba_5.readFeatures(json_NcleoParaba_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NcleoParaba_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NcleoParaba_5.addFeatures(features_NcleoParaba_5);
var lyr_NcleoParaba_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NcleoParaba_5, 
                style: style_NcleoParaba_5,
                popuplayertitle: "Núcleo Paraíba",
                interactive: true,
                title: '<img src="styles/legend/NcleoParaba_5.png" /> Núcleo Paraíba'
            });
var format_LocalizacaoSOS_6 = new ol.format.GeoJSON();
var features_LocalizacaoSOS_6 = format_LocalizacaoSOS_6.readFeatures(json_LocalizacaoSOS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalizacaoSOS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalizacaoSOS_6.addFeatures(features_LocalizacaoSOS_6);
var lyr_LocalizacaoSOS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LocalizacaoSOS_6, 
                style: style_LocalizacaoSOS_6,
                popuplayertitle: "Localizacao SOS",
                interactive: true,
                title: '<img src="styles/legend/LocalizacaoSOS_6.png" /> Localizacao SOS'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_estadosl_2007_1.setVisible(true);lyr_APUnificado_2.setVisible(true);lyr_Rios_3.setVisible(true);lyr_NucleoSOS1_4.setVisible(true);lyr_NcleoParaba_5.setVisible(true);lyr_LocalizacaoSOS_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_estadosl_2007_1,lyr_APUnificado_2,lyr_Rios_3,lyr_NucleoSOS1_4,lyr_NcleoParaba_5,lyr_LocalizacaoSOS_6];
lyr_estadosl_2007_1.set('fieldAliases', {'GID0': 'GID0', 'CODIGOIB1': 'CODIGOIB1', 'NOMEUF2': 'NOMEUF2', 'SIGLAUF3': 'SIGLAUF3', 'uc mun tot': 'uc mun tot', 'a ucm tot': 'a ucm tot', });
lyr_APUnificado_2.set('fieldAliases', {'AP': 'AP', 'area (ha)': 'area (ha)', });
lyr_Rios_3.set('fieldAliases', {'Rio': 'Rio', });
lyr_NucleoSOS1_4.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', 'AREA_KM2': 'AREA_KM2', 'total': 'total', 'AP': 'AP', 'POP21': 'POP21', 'AREAha': 'AREAha', 'Nuc 1 MT': 'Nuc 1 MT', });
lyr_NcleoParaba_5.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA': 'SIGLA', 'AREA_KM2': 'AREA_KM2', 'TOTAL': 'TOTAL', 'AP': 'AP', 'POP21': 'POP21', });
lyr_LocalizacaoSOS_6.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_estadosl_2007_1.set('fieldImages', {'GID0': 'TextEdit', 'CODIGOIB1': 'TextEdit', 'NOMEUF2': 'TextEdit', 'SIGLAUF3': 'TextEdit', 'uc mun tot': 'TextEdit', 'a ucm tot': 'TextEdit', });
lyr_APUnificado_2.set('fieldImages', {'AP': 'TextEdit', 'area (ha)': 'TextEdit', });
lyr_Rios_3.set('fieldImages', {'Rio': 'TextEdit', });
lyr_NucleoSOS1_4.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA': 'TextEdit', 'AREA_KM2': 'TextEdit', 'total': 'TextEdit', 'AP': 'TextEdit', 'POP21': 'TextEdit', 'AREAha': 'TextEdit', 'Nuc 1 MT': 'TextEdit', });
lyr_NcleoParaba_5.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA': '', 'AREA_KM2': '', 'TOTAL': '', 'AP': '', 'POP21': '', });
lyr_LocalizacaoSOS_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_estadosl_2007_1.set('fieldLabels', {'GID0': 'inline label - always visible', 'CODIGOIB1': 'inline label - always visible', 'NOMEUF2': 'inline label - always visible', 'SIGLAUF3': 'inline label - always visible', 'uc mun tot': 'inline label - always visible', 'a ucm tot': 'inline label - always visible', });
lyr_APUnificado_2.set('fieldLabels', {'AP': 'inline label - always visible', 'area (ha)': 'inline label - always visible', });
lyr_Rios_3.set('fieldLabels', {'Rio': 'inline label - always visible', });
lyr_NucleoSOS1_4.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'total': 'inline label - always visible', 'AP': 'inline label - always visible', 'POP21': 'inline label - always visible', 'AREAha': 'inline label - always visible', 'Nuc 1 MT': 'inline label - always visible', });
lyr_NcleoParaba_5.set('fieldLabels', {'CD_MUN': 'inline label - always visible', 'NM_MUN': 'inline label - always visible', 'SIGLA': 'inline label - always visible', 'AREA_KM2': 'inline label - always visible', 'TOTAL': 'inline label - always visible', 'AP': 'inline label - always visible', 'POP21': 'inline label - always visible', });
lyr_LocalizacaoSOS_6.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', });
lyr_LocalizacaoSOS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});