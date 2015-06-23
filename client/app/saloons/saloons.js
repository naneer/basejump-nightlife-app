'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('saloons', {
        abstract: true,
        url: '/saloons',
        templateUrl: 'app/saloons/saloons.html',
        controller: 'SaloonsCtrl',
        controllerAs: 'ctrl'
      });
  }]);