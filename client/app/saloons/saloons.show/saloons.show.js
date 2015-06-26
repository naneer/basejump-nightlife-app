'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('saloons.show', {
        url: '/:id',
        templateUrl: 'app/saloons/saloons.show/saloons.show.html',
        controller: 'SaloonsShowCtrl',
        controllerAs: 'saloon',
        resolve: {
          SaloonObj: [
            'Saloon', '$stateParams',
            function(Saloon, $stateParams){
              return Saloon.get({ id: $stateParams.id }).$promise;
            }
          ],
          Saloonies: [
             'Rsvp', '$stateParams',
             function(Rsvp, $stateParams){
               return Rsvp.get({saloon_id: $stateParams.id, offset: 0}).$promise;
             }
          ]
        }
      });
  }]);