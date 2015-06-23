'use strict';

angular.module('workspaceApp')
  .controller('SaloonsShowCtrl', [ '$stateParams', 'SaloonObj', 'Saloonies', 'User', 'currentDate',
  function ($stateParams, SaloonObj, Saloonies, User, currentDate) {
    var saloon = this;
    saloon.name = SaloonObj.name;
    saloon.url = SaloonObj.url;
    saloon.address = SaloonObj.location.display_address.join(", ");
    saloon.saloonies = Saloonies.users;
    saloon.totalSaloonies = Saloonies.total;
    var saloon_id = SaloonObj.id;
    var date = new Date();    
    
    var getSaloonies = function(offset){
      return User.getSaloonies({ saloon_id: saloon_id, night: currentDate.get(), offset: offset }).$promise;
    };
    
    saloon.updatePage = function(){
      var query = getSaloonies((saloon.currentPage * 1)-1);
      query.then(function(data){
        saloon.saloonies = data.users;
      });
    };
    
    saloon.nextPage = function(pageNo){
      var query = getSaloonies(pageNo - 1);
      query.then(function(data){
        saloon.saloonies = data.users;
      });
      saloon.currentPage = pageNo;
    };
    
    saloon.imGoing = function(){
      var response = User.imGoing({ saloon_id: saloon_id, night: currentDate.get() }).$promise;
      response.then(function(user){
        if(saloon.saloonies.some(function(saloon){
          return saloon.name === user.name;
        })) {
          return;
        }
        saloon.saloonies.push(user);
        saloon.totalSaloonies += 1;
      });
    }
    
    saloon.imNotGoing = function(){
      var response = User.imNotGoing({ saloon_id: saloon_id, night: currentDate.get()}).$promise;
      response.then(function(user){
        saloon.saloonies = saloon.saloonies.filter(function(saloony){
          return saloony.name !== user.name;
        });
      });
    }
  }]);
