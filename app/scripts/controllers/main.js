'use strict';

/**
 * @ngdoc function
 * @name bsrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bsrApp
 */
angular.module('bsrApp')
  .controller('MainCtrl', function ($scope) {
    var uriRegex = /spotify:track:([a-zA-Z0-9]{22})/g;
    
    var getSpotifyUrl = function(id) {
      return "https://api.spotify.com/v1/tracks/" + id;
    };

    var getArtists = function(artists) {
      var a = [];
      for (var i = 0; i < artists.length; ++i) {
        a.push(artists[i].name);
      }
      return a.join(", ");
    };
    

    $scope.addSong = function() {
      var res = uriRegex.exec($scope.uri);
      var id;
      if (res) {
        id = res[1];
      } else {
        return;
      }
      var url = getSpotifyUrl(id);
      $.ajax({
        dataType: "json",
        url: url
      }).then(function(data) {
        $scope.songs.push({
          title: data.name,
          artist: getArtists(data.artists)
        });
        $scope.$apply();
      });
    };

    $scope.songs = [];

  });
