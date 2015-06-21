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
                {"name": "Los Angeles"},
                {"name": "Dublin"},
                {"name": "Sydney"},
                {"name": "London"},
                {"name": "Austin"},
                {"name": "New York"},
                {"name": "Amsterdam"},
                {"name": "Miami"},
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