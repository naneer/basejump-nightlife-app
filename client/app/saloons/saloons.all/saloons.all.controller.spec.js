'use strict';

describe('Controller: SaloonsAllCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var SaloonsAllCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaloonsAllCtrl = $controller('SaloonsAllCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
