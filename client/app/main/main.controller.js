'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', ['City', 'Bar', 'Rsvp', 'Saloon', function (City, Bar, Rsvp, Saloon) {
    var ctrl = this;
    ctrl.cities = City;
    ctrl.bartypes = Bar;
    
    ctrl.search = function(city){
      ctrl.location = city;
      ctrl.find();
    }
    
    ctrl.find = function(){
      var query = Saloon.get({ location: ctrl.location, offset: 0 }).$promise;
      query.then(function(saloons){
        ctrl.saloons = saloons.businesses.map(function(saloon){
          var rsvpQuery = Rsvp.count({ saloon_id: saloon.id }).$promise;
          rsvpQuery.then(function(info){
            saloon.count = info.total;
          });
          return saloon;
        });
        ctrl.totalSaloons = saloons.total;
        (saloons.total > 1000) ? ctrl.totalPages = 1000 : ctrl.totalPages = ctrl.totalSaloons; 
        ctrl.location_result = ctrl.location;
      });
    };
    
    ctrl.updatePage = function(){
      var query = Saloon.get({ location: ctrl.location, offset: (ctrl.currentPage-1)*10 }).$promise;
      query.then(function(saloons){
         ctrl.saloons = saloons.businesses.map(function(saloon){
          var rsvpQuery = Rsvp.count({ saloon_id: saloon.id }).$promise;
          rsvpQuery.then(function(info){
            saloon.count = info.total;
          });
          return saloon;
        });       
      })
    }
  }]);
