'use strict';

angular.module('workspaceApp')
  .config(['$stateProvider', function ($stateProvider) {
    $stateProvider
      .state('categories', {
        abstract: true,
        url: '/categories',
        templateUrl: 'app/categories/categories.html',
        controller: angular.noop,
        controllerAs: 'ctrl'
      });
  }]);