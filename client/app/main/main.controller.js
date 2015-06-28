'use strict';

angular.module('workspaceApp')
  .controller('MainCtrl', ['City', 'Bar', 'Rsvp', 'Saloon', '$window', 'PrevLocation', function (City, Bar, Rsvp, Saloon, $window, PrevLocation) {
    var ctrl = this;
    ctrl.cities = City;
    ctrl.categories = Bar;

    
    ctrl.search = function(city){
      ctrl.location = city;
      ctrl.find();
    }
    
    ctrl.find = function(){
      if(!ctrl.location) { return; };
      ctrl.currentPage = 1;
      var query = Saloon.get({ location: ctrl.location, offset: 0 }).$promise;
      query.then(function(saloons){
        if(saloons.location === "not found"){
          ctrl.totalSaloons = 0;
          ctrl.location_result = ctrl.location;
          ctrl.saloons = [];
          return;
        }
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
        
        $window.sessionStorage.location = ctrl.location;
        $window.sessionStorage.totalsaloons = ctrl.totalSaloons;
        $window.sessionStorage.totalpages = ctrl.totalPages;
        $window.sessionStorage.currentpage = ctrl.currentPage;
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
          $window.sessionStorage.currentpage = ctrl.currentPage;
          return saloon;
        });       
      })
    };

    if(PrevLocation.location){
      ctrl.location = PrevLocation.location;
      ctrl.currentPage = PrevLocation.currentpage;      
      ctrl.location_result = PrevLocation.location;
      ctrl.totalSaloons = PrevLocation.totalsaloons;
      ctrl.totalPages = PrevLocation.totalpages;
      ctrl.updatePage();
    }
  }]);
