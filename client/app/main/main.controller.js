'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', ['City', 'Bar', function (City, Bar) {
    var ctrl = this;
    ctrl.cities = City;
    ctrl.bartypes = Bar;
  }]);
