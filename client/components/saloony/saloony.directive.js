'use strict';

angular.module('workspaceApp')
  .directive('saloonY', ['Rsvp', function (Rsvp) {
    return {
      templateUrl: 'components/saloony/saloony.html',
      restrict: 'E',
      controller: angular.noop,
      controllerAs: 'ctrl',
      bindToController: true,
      replace: true,
      scope: {
        saloonId: '=',
        isGoing: '='
      },
      link: function (scope, element, attrs, ctrl) {
        var query = Rsvp.get({ saloon_id: ctrl.saloonId, offset: 0 }).$promise;
        query.then(function(data){
          ctrl.total = data.total;
          ctrl.saloonies = data.users;
        });
        
        ctrl.updatePage = function(){
          var query = Rsvp.get({ saloon_id: ctrl.saloonId, offset: ((ctrl.currentPage-1)*9)}).$promise;
          query.then(function(data){
            ctrl.total = data.total;
            ctrl.saloonies = data.users;
          })
        };
      }
    };
  }]);
  
  // var getSaloonies = function(offset){
  //     return User.getSaloonies({ saloon_id: saloon_id, night: currentDate.get(), offset: offset }).$promise;
  //   };
    

  //   saloon.updateRSVP = function(){
  //     var query = getSaloonies((saloon.currentPage-1)*9);
  //     query.then(function(data){
  //       saloon.saloonies = data.users;
  //       saloon.totalSaloonies = data.total;
  //       if (!Auth.isLoggedIn()){ return; }
  //       var query = User.goingTonight({ night: currentDate.get(), saloon_id: saloon_id }).$promise;
  //       query.then(function(result){
  //         saloon.isGoing = ( saloon_id === result.saloon_id);
  //       });
  //     });
  //   };
    
  //   saloon.nextPage = function(pageNo){
  //     var query = getSaloonies(pageNo - 1);
  //     query.then(function(data){
  //       saloon.saloonies = data.users;
  //     });
  //     saloon.currentPage = pageNo;
  //   };
    
  //   saloon.imGoing = function(){
  //     var response = User.imGoing({ saloon_id: saloon_id, night: currentDate.get() }).$promise;
  //     response.then(function(info){
  //       saloon.totalSaloonies = info.total;
  //       saloon.updatePage();
  //     });
  //   };
    
  //   saloon.imNotGoing = function(){
  //     var response = User.imNotGoing({ saloon_id: saloon_id, night: currentDate.get()}).$promise;
  //     response.then(function(info){
  //       saloon.totalSaloonies = info.total;
  //       saloon.updatePage();
  //     });
  //   };
    
  //   saloon.updateRSVP();