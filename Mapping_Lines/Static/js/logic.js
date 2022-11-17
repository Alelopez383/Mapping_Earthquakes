// Add console.log to check to see if our code is working.
console.log("working");
// Leaflet documaentation https://leafletjs.com/examples/quick-start/
// Create the mapobject with options, centered somewhere between LAX and SFO, with a zoom of 7.
// then change the center of the map to SFO and change the zoom to 5 so that we can see the line.
let map = L.map("mapid").setView([30.1900,-97.6687], 5);

// Coordinates for each point to be used in the line.
// add two more airport stops
let line = [
  [37.6213, -122.3790],
  [30.1900,-97.6687],
  [43.6785,-79.6291],
  [40.6417,-73.7809]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue"
}).addTo(map);

  //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map); default marker

// Get data from cities.js
let cityData = cities;


  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    //To change the map's style, change the map id : mapbox/outdoors-v11, mapbox/light-v10, mapbox/dark-v10, mapbox/satellite-v9, mapbox/satellite-streets-v11
    //id: 'mapbox/streets-v11',
    // Static tile documentation https://docs.mapbox.com/api/maps/static-tiles/
    //tileSize: 512,
    //zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);