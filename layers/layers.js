ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4026").setExtent([186114.913765, 336122.664064, 190280.440278, 338447.675765]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_63UAT1_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_rsuat:mv_uat3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "6.3. UAT 1",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_63UAT1_1, 0]);
var lyr_23Sectoarecadastrale_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_hcsectoare",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.3. Sectoare cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_23Sectoarecadastrale_2, 0]);
var lyr_22Terenuricadastrale_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_terenuri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.2. Terenuri cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_22Terenuricadastrale_3, 0]);
var format_FibraOpticaMoldcell_4 = new ol.format.GeoJSON();
var features_FibraOpticaMoldcell_4 = format_FibraOpticaMoldcell_4.readFeatures(json_FibraOpticaMoldcell_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_FibraOpticaMoldcell_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FibraOpticaMoldcell_4.addFeatures(features_FibraOpticaMoldcell_4);
var lyr_FibraOpticaMoldcell_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FibraOpticaMoldcell_4, 
                style: style_FibraOpticaMoldcell_4,
                popuplayertitle: "Fibra Optica Moldcell",
                interactive: true,
                title: '<img src="styles/legend/FibraOpticaMoldcell_4.png" /> Fibra Optica Moldcell'
            });
var format_FibraOpticaOrange_5 = new ol.format.GeoJSON();
var features_FibraOpticaOrange_5 = format_FibraOpticaOrange_5.readFeatures(json_FibraOpticaOrange_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_FibraOpticaOrange_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FibraOpticaOrange_5.addFeatures(features_FibraOpticaOrange_5);
var lyr_FibraOpticaOrange_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FibraOpticaOrange_5, 
                style: style_FibraOpticaOrange_5,
                popuplayertitle: "Fibra Optica Orange",
                interactive: true,
                title: '<img src="styles/legend/FibraOpticaOrange_5.png" /> Fibra Optica Orange'
            });
var format_CONDUCTAGAZRublenia_Cosui_6 = new ol.format.GeoJSON();
var features_CONDUCTAGAZRublenia_Cosui_6 = format_CONDUCTAGAZRublenia_Cosui_6.readFeatures(json_CONDUCTAGAZRublenia_Cosui_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4026'});
var jsonSource_CONDUCTAGAZRublenia_Cosui_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONDUCTAGAZRublenia_Cosui_6.addFeatures(features_CONDUCTAGAZRublenia_Cosui_6);
var lyr_CONDUCTAGAZRublenia_Cosui_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONDUCTAGAZRublenia_Cosui_6, 
                style: style_CONDUCTAGAZRublenia_Cosui_6,
                popuplayertitle: "CONDUCTA GAZ Rublenița_Cosăuți",
                interactive: true,
                title: '<img src="styles/legend/CONDUCTAGAZRublenia_Cosui_6.png" /> CONDUCTA GAZ Rublenița_Cosăuți'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_63UAT1_1.setVisible(true);lyr_23Sectoarecadastrale_2.setVisible(true);lyr_22Terenuricadastrale_3.setVisible(true);lyr_FibraOpticaMoldcell_4.setVisible(true);lyr_FibraOpticaOrange_5.setVisible(true);lyr_CONDUCTAGAZRublenia_Cosui_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_63UAT1_1,lyr_23Sectoarecadastrale_2,lyr_22Terenuricadastrale_3,lyr_FibraOpticaMoldcell_4,lyr_FibraOpticaOrange_5,lyr_CONDUCTAGAZRublenia_Cosui_6];
lyr_FibraOpticaMoldcell_4.set('fieldAliases', {'id': 'id', });
lyr_FibraOpticaOrange_5.set('fieldAliases', {'id': 'id', });
lyr_CONDUCTAGAZRublenia_Cosui_6.set('fieldAliases', {'id': 'id', });
lyr_FibraOpticaMoldcell_4.set('fieldImages', {'id': 'TextEdit', });
lyr_FibraOpticaOrange_5.set('fieldImages', {'id': 'TextEdit', });
lyr_CONDUCTAGAZRublenia_Cosui_6.set('fieldImages', {'id': 'TextEdit', });
lyr_FibraOpticaMoldcell_4.set('fieldLabels', {'id': 'no label', });
lyr_FibraOpticaOrange_5.set('fieldLabels', {'id': 'no label', });
lyr_CONDUCTAGAZRublenia_Cosui_6.set('fieldLabels', {'id': 'no label', });
lyr_CONDUCTAGAZRublenia_Cosui_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});