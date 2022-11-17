# Mapping_Earthquakes
Creating interactive maps using GeoJSON data to explore earthquakes around the world.

# Purpose
We want to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days. To do that, we are going to use a URL for GeoJSON earthquake data from the USGS website and retrieve geographical coordinates and the magnitudes of earthquakes for the last seven days. Then add the data to a map.

We are using JavaScript and the D3.js library to retrieve the coordinates and magnitudes of the earthquakes from the GeoJSON data; Leaflet library to plot the data on a Mapbox map through an API request and create interactivity for the earthquake data.
Mapping airline routes will help us understand how tectonic plate data is added to a map.

# Challenge

Once we have our initial map with earthquakes for the past 7 days overlay, we want to see the earthquake data in relation to the tectonic plates’ location on the earth, and to see all the earthquakes with a magnitude greater than 4.5 on the map.

# Delivery 1: Tectonic Plate Data
 We add the tectonic plate data using d3.json(), the data using the geoJSON() layer, set the tectonic plate LineString data to stand out on the map, and the tectonic plate data to the overlay object with the earthquake data.
 
 ![image](https://user-images.githubusercontent.com/43974872/202545987-a13424de-4f17-49dc-8283-b774ae981c99.png)

# Delivery 2: Adding a third Major Earthquake Map

![image](https://user-images.githubusercontent.com/43974872/202552231-5da064ce-564a-43f2-95bb-83390d6c4711.png)


# To create a map we need:
- The index.html file
- Th style.css file
- The config.js file, which will hold our Mapbox API key.
- The logic.js file, which will contain all the JavaScript and Leaflet code to create the map and add data to the map.


# Tools
1. JavaScript ES6
2. D3 library (Data-Driven Documents)
3. Geo Json
4. Leaflet library
5. Mapobox API
