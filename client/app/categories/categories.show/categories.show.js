'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('categories.show', {
        url: '/:filter',
        templateUrl: 'app/categories/categories.show/categories.show.html',
        controller: 'CategoriesShowCtrl',
        controllerAs: 'ctrl',
        resolve: {
          Category: [
            '$stateParams',
            function($stateParams){
              var categories = [
              { "name": "Pub", "filter": "pubs" },
              { "name": "Dive", "filter": "divebars" },
              { "name": "Sport Bar", "filter": "sportsbars" },
              { "name": "Lounge", "filter": "lounges" },
              { "name": "Karaoke Club", "filter": "karaoke" },
              { "name": "Comedy Club", "filter": "comedyclubs" }
            ];
            return categories.filter(function(category){
              return category["filter"] === $stateParams.filter;
            });
            }
          ],
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