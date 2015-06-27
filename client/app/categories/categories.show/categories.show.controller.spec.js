'use strict';

describe('Controller: CategoriesShowCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var CategoriesShowCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoriesShowCtrl = $controller('CategoriesShowCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
