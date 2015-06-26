'use strict';

angular.module('workspaceApp')
  .controller('SaloonsShowCtrl', [ '$stateParams', 'SaloonObj', 'Saloonies', 'Auth', 'Rsvp',
  function ($stateParams, SaloonObj, Saloonies, Auth, Rsvp) {

    
    var saloon = this;
    
    saloon.name = SaloonObj.name;
    saloon.url = SaloonObj.url;
    saloon.address = SaloonObj.location.display_address.join(", ");
    var saloonId = SaloonObj.id;
  
    saloon.total = Saloonies.total;
    saloon.saloonies = Saloonies.users;
    
    saloon.updateStatus = function(){
      saloon.isLoggedin = Auth.isLoggedIn();
      if(saloon.isLoggedin){
        var query = Rsvp.check({saloon_id: saloonId}).$promise;
        query.then(function(result){
          saloon.saloonystatus = result.status;
        })
      }  else {
        saloon.saloonystatus = 0;
      }
    };
    
    saloon.updatePage = function(){
      var query = Rsvp.get({ saloon_id: saloonId, offset: ((saloon.currentPage-1)*9)}).$promise;
      query.then(function(data){
        saloon.total = data.total;
        saloon.saloonies = data.users;
      });
    }

    
    saloon.rsvp = function(value){
      var query = Rsvp.rsvp({ saloon_id: saloonId, task: value}).$promise;
        query.then(function(data){
          saloon.updateStatus();
          saloon.updatePage();
        })
    };
    
    
    saloon.updateStatus();
  }]);
