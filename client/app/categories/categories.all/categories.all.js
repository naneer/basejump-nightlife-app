'use strict';

angular.module('workspaceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('categories.all', {
        url: '',
        templateUrl: 'app/categories/categories.all/categories.all.html',
        controller: 'CategoriesAllCtrl',
        controllerAs: 'ctrl',
        onEnter: [
          '$state', 
          function($state){
            $state.go('main');
          }
        ]
      });
  });