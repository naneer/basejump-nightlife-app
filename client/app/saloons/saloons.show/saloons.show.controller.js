'use strict';

angular.module('workspaceApp')
  .controller('SaloonsShowCtrl', [ 'SaloonObj', 'Saloonies', function (SaloonObj, Saloonies) {
    var saloon = this;
    saloon.name = SaloonObj.name;
    saloon.url = SaloonObj.url;
    saloon.address = SaloonObj.location.display_address.join(", ");
    saloon.saloonies = Saloonies;
  }]);
