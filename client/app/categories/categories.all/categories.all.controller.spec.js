'use strict';

describe('Controller: CategoriesAllCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var CategoriesAllCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoriesAllCtrl = $controller('CategoriesAllCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
