// Add console.log to check to see if our code is working.
console.log("working");
// Leaflet documaentation https://leafletjs.com/examples/quick-start/
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);



  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //To change the map's style, change the map id : mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11
    //id: 'mapbox/streets-v11',navigation-preview-night-v4,navigation-preview-day-v4
    // Static tile documentation https://docs.mapbox.com/api/maps/static-tiles/
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Alelopez383/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>" + feature.properties.name + "</h2>" + "<h3>" + feature.properties.city + feature.properties.country + "</h3>");
  }
}).addTo(map);
});

