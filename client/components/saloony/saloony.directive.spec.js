'use strict';

describe('Directive: saloony', function () {

  // load the directive's module and view
  beforeEach(module('workspaceApp'));
  beforeEach(module('components/saloony/saloony.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<saloony></saloony>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the saloony directive');
  }));
});