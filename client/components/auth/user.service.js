'use strict';

angular.module('workspaceApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller/:cancel', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      getSaloonies: {
        method: 'GET',
        params: {
          id: 'going'
        }
      },
      imGoing: {
        method: 'PUT',
        params: {
          id: 'going',
          controller: '@saloon_id'
        }
      },
      imNotGoing: {
        method: 'PUT',
        params: {
          id: 'going',
          controller: '@saloon_id',
          cancel: 'cancel'
        }
      }
	  });
  });
