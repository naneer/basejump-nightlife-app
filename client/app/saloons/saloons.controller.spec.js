'use strict';

describe('Controller: SaloonsCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var SaloonsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaloonsCtrl = $controller('SaloonsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
