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
                {"name": "Toronto"}
              ]
          },
          Bar: function(){
            return [
              { "name": "Pub" },
              { "name": "Dive" },
              { "name": "Sports" },
              { "name": "Lounge" },
              { "name": "Karaoke" },
              { "name": "Comedy" }
            ]
          }
        }
      });
  }]);