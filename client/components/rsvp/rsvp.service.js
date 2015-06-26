'use strict';

angular.module('workspaceApp')
  .factory('Rsvp', ['$resource', 'currentDate', function ($resource, currentDate) {
    return $resource('/api/users/going/:saloon_id/:task', {
      saloon_id: '@saloon_id',
      task: '@task'
    },
    {
      get: {
        method: 'GET',
        params: {
          night: currentDate.get()
        }
      },
      count: {
        method: 'GET',
        params: {
          night: currentDate.get(),
          task: 'count'
        }
      },
      check: {
        method: 'GET',
        params: {
          night: currentDate.get(),
          task: 'check'
        }
      },
      rsvp: {
        method: 'PUT',
        params: {
          night: currentDate.get()
        }
      }
    }
    );
  }])