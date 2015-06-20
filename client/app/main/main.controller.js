'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', ['City', function (City) {
    var ctrl = this;
    ctrl.cities = City;
  }]);
