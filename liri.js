require("dotenv").config();

var keys = require('./keys.js');
var Twitter = require('./node_modules/twitter');
var Spotify = require('./node_modules/node-spotify-api');

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);


var picker = function(selectMethod, subject){
    switch(selectMethod){
        // case "my-tweets":
        // getMyTweets();
        // break;
        case "spotify-this-song":
        spotifyThisSong(subject);
        break;
        // case "movie-this":
        // getMyMovies(subject);
        default:
        console.log("LIRI don't know whatchoo talkin bout");
    }
};


var mainSelect = function(arg1,arg2) {
    picker(arg1,arg2);
};

mainSelect(process.argv[2], process.argv[3]);

function spotifyThisSong(songName) {
    spotify.search({
        type: 'track',
        query: songName,
        limit: 20
    },
    function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
               
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            
            for (var j=0; j < songs[i].artists.length; j++) {
                console.log(i + "  Artist: " + songs[i].artists[j].name);
            }
            
            // console.log(i + '  Artist: ' + songs[i].artists.map ( artist => { return artist.name }));  // alternate mapping method
        }
    });
};



