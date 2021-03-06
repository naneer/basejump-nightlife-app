'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('saloons.all', {
        url: '',
        templateUrl: 'app/saloons/saloons.all/saloons.all.html',
        controller: 'SaloonsAllCtrl',
        controllerAs: 'ctrl',
        onEnter: [
          '$state',
          function($state){
            $state.go('main');
          }
        ]
      });
  });