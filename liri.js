require("dotenv").config();

var keys = require('./keys.js');
var Twitter = require('./node_modules/twitter');
var Spotify = require('./node_modules/node-spotify-api');

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);


var picker = function(selectMethod, subject){
    switch(selectMethod){
        case "my-tweets":
        getMyTweets();
        break;
        case "spotify-this-song":
        spotifyThisSong(subject);
        case "movie-this":
        getMyMovies(subject);
        default:
        console.log('LIRI does not know that');
    }
};


var mainSelect = function(arg2,arg3) {
    picker(arg2,arg3);
};

mainSelect(process.argv[2], process.argv[3]);

function spotifyThisSong() {
    spotify.search({
        type: 'track'
        // query: 'Red Rain'
    },
    function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // console.log("data: " + data);
        // var temp = JSON.stringify(data);
        // console.log("temp(stringified): " + temp);

        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log('Artist:' + songs[i].artists.map(function(artist) {
            return artist.name
            }))
        

        

        }
    });
};



