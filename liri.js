require("dotenv").config();
var keys = require('./keys.js');
// console.log(keys);

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotifier = new Spotify(keys.spotify);
var tweeter = new Twitter(keys.twitter);

console.log(spotifier);
console.log(tweeter);


