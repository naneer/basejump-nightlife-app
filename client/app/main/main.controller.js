'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', ['City', 'Bar', 'Saloons', 'Rsvp', 'currentDate', function (City, Bar, Saloons, Rsvp, currentDate) {
    var ctrl = this;
    ctrl.cities = City;
    ctrl.bartypes = Bar;
    ctrl.saloons = Saloons.businesses;
    ctrl.totalSaloons = Saloons.total;
    ctrl.location = Saloons.location;
    ctrl.saloons.map(function(saloon){
       var query = Rsvp.count({saloon_id: saloon.id}).$promise;
       query.then(function(info){
         saloon.count = info.total;
       })
    });
  }]);
