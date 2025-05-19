'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiamlpbmthbmdnIiwiYSI6ImNtYXV1MDh1aDAwdnoya3B5NnFlcWh5NmYifQ.ZXjsL-aQyFYxyG5p5XI_lA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.93324, 40.80877],
    zoom: 14
});
