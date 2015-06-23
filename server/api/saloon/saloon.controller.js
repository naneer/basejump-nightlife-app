'use strict';

var _ = require('lodash');
var Saloon = require('./saloon.model');

// Get list of saloons
exports.index = function(req, res) {
  Saloon.find({}, function (err, saloons) {
    if(err) { return handleError(res, err); }
    return res.json(200, saloons);
  });
};

// Get a single saloon
exports.show = function(req, res) {
  Saloon.findById(req.params.id, function (err, saloon) {
    if(err) { return handleError(res, err); }
    if(!saloon) { return res.send(404); }
    return res.json(saloon);
  });
};

// Creates a new saloon in the DB.
// exports.create = function(req, res) {
//   Saloon.create(req.body, function(err, saloon) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, saloon);
//   });
// };

// Updates an existing saloon in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   Saloon.findById(req.params.id, function (err, saloon) {
//     if (err) { return handleError(res, err); }
//     if(!saloon) { return res.send(404); }
//     var updated = _.merge(saloon, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, saloon);
//     });
//   });
// };

// Deletes a saloon from the DB.
// exports.destroy = function(req, res) {
//   Saloon.findById(req.params.id, function (err, saloon) {
//     if(err) { return handleError(res, err); }
//     if(!saloon) { return res.send(404); }
//     saloon.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

function handleError(res, err) {
  return res.send(500, err);
}