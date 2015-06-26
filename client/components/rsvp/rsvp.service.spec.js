'use strict';

describe('Service: rsvp', function () {

  // load the service's module
  beforeEach(module('workspaceApp'));

  // instantiate service
  var rsvp;
  beforeEach(inject(function (_rsvp_) {
    rsvp = _rsvp_;
  }));

  it('should do something', function () {
    expect(!!rsvp).toBe(true);
  });

});
