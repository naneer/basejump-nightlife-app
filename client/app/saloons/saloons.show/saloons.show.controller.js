'use strict';

angular.module('workspaceApp')
  .controller('SaloonsShowCtrl', [ '$stateParams', 'SaloonObj', 'Saloonies', 'User', function ($stateParams, SaloonObj, Saloonies, User) {
    var saloon = this;
    saloon.name = SaloonObj.name;
    saloon.url = SaloonObj.url;
    saloon.address = SaloonObj.location.display_address.join(", ");
    saloon.saloonies = Saloonies.users;
    saloon.totalSaloonies = Saloonies.total;
    var saloon_id = SaloonObj.id;
    
    var getSaloonies = function(offset){
      return User.getSaloonies({ saloon_id: saloon_id, night: 'Jun 22, 2015', offset: offset }).$promise;
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
    }
  }]);
