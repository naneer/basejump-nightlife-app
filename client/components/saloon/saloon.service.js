'use strict';

angular.module('workspaceApp')
  .factory('Saloon', ['$resource', function ($resource) {
    return $resource('/api/saloons/:id', {
      id: '@id'
    });
  }]);
