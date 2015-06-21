'use strict';

angular.module('workspaceApp')
  .config(['$stateProvier', function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      });
  }]);