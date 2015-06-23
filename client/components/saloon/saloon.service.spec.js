'use strict';

describe('Service: saloon', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var saloon;
  beforeEach(inject(function (_saloon_) {
    saloon = _saloon_;
  }));

  it('should do something', function () {
    expect(!!saloon).toBe(true);
  });

});
