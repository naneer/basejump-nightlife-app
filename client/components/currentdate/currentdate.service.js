'use strict';

angular.module('workspaceApp')
  .factory('currentDate', function () {
    var date = new Date();
    return {
      get: function () {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      }
    };
  });
