'use strict';

describe('Service: currentdate', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var currentdate;
  beforeEach(inject(function (_currentdate_) {
    currentdate = _currentdate_;
  }));

  it('should do something', function () {
    expect(!!currentdate).toBe(true);
  });

});
