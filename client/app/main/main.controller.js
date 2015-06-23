'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', ['City', 'Bar', 'Saloons', function (City, Bar, Saloons) {
    var ctrl = this;
    ctrl.cities = City;
    ctrl.bartypes = Bar;
    ctrl.saloons = Saloons.businesses;
    ctrl.totalSaloons = Saloons.total;
    ctrl.location = Saloons.location;
  }]);
