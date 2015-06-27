'use strict';

angular.module('workspaceApp')
  .controller('CategoriesShowCtrl', [ 'Category', 'Saloon', 'Rsvp', 'PrevLocation', function (Category, Saloon, Rsvp, PrevLocation) {
    var ctrl = this;
    ctrl.category = Category[0];
    
    ctrl.search = function(city){
      ctrl.location = city;
      ctrl.find();
    }
    
    ctrl.find = function(){
      if(!ctrl.location) { return; };
      ctrl.currentPage = 1;
      var query = Saloon.get({ location: ctrl.location, offset: 0, category_filter: ctrl.category.filter }).$promise;
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
      var query = Saloon.get({ location: ctrl.location, offset: (ctrl.currentPage-1)*10, category_filter: ctrl.category.filter }).$promise;
      query.then(function(saloons){
         ctrl.saloons = saloons.businesses.map(function(saloon){
          var rsvpQuery = Rsvp.count({ saloon_id: saloon.id }).$promise;
          rsvpQuery.then(function(info){
            saloon.count = info.total;
          });
          return saloon;
        });       
      })
    };

    if(PrevLocation.location){
      ctrl.location = PrevLocation.location;
      ctrl.find();
    }
  }]);
