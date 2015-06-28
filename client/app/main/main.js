'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl',
        resolve: {
          City: function(){
            return [
                {"name": "Los Angeles, CA"},
                {"name": "Dublin"},
                {"name": "Sydney"},
                {"name": "London"},
                {"name": "Austin, TX"},
                {"name": "New York City"},
                {"name": "Amsterdam"},
                {"name": "Miami, FL"},
                {"name": "San Francisco, CA"}
              ]
          },
          Bar: function(){
            return [
              { "name": "Pubs", "filter": "pubs" },
              { "name": "Dives", "filter": "divebars" },
              { "name": "Sports", "filter": "sportsbars" },
              { "name": "Lounges", "filter": "lounges" },
              { "name": "Karaoke", "filter": "karaoke" },
              { "name": "Comedy Clubs", "filter": "comedyclubs" }
            ]
          },
          PrevLocation: [
            '$window', 
            function($window){
              var previous = {};
              if($window.sessionStorage.location){
                previous = $window.sessionStorage;
              }
              return previous;
            }
          ]
        }
      });
  }]);