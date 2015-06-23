'use strict';

describe('Controller: SaloonsShowCtrl', function () {

  // load the controller's module
  beforeEach(module('workspaceApp'));

  var SaloonsShowCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaloonsShowCtrl = $controller('SaloonsShowCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
