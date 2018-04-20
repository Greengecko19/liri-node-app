require("dotenv").config();

var apiKeys = require('./keys.js');

var spotifier = new Spotify(apiKeys.spotify);
var tweeter = new Twitter(apiKeys.twitter);

console.log(spotifier);
console.log(tweeter);


