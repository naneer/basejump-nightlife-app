'use strict';

var User = require('../user.model');

/**
 * Implement a concatAll()
 */
Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray){
    results.push.apply(results, subArray);
  });
  return results;
};

/**
 * Get list of users going to saloon
 */

exports.index = function(req, res) {
  var query = {};
  var info = {};
  
  (req.params.saloon_id) ? (query.saloon_id = req.params.saloon_id) : "";
  (req.query.night) ? (query.night = req.query.night) : "";
  (req.query.offset) ? (query.offset = req.query.offset) : 0;

  User.find({ "schedule.saloon_id": query.saloon_id, "schedule.night" : query.night }).count(function(err, count){
    if (err) return res.send(500, err);
    info.total = count;
    if(count <= 0){
      return res.json(200, info);
    }
    User.find({ "schedule.saloon_id": query.saloon_id, "schedule.night" : query.night }, 'name schedule.$.timestamp')
        .sort({ "schedule.timestamp" : -1 })
        .skip(req.query.offset)
        .limit(9)
        .exec(function(err, users){
          if (err) return res.send(500, err);
            info.users = users.map(function(user){
              return user.schedule.map(function(saloon){
                return { _id: user._id, name: user.name, timestamp: saloon.timestamp };
              });
          }).concatAll();
            res.json(200, info);
        });
  });
};

exports.count = function(req, res){
  var query = {};
  var info = {};
  
  (req.params.saloon_id) ? (query.saloon_id = req.params.saloon_id) : "";
  (req.query.night) ? (query.night = req.query.night) : "";

  User.find({ "schedule.saloon_id": query.saloon_id, "schedule.night" : query.night }).count(function(err, count){
    if (err) return res.send(500, err);
    info.total = count;
    return res.json(200, info);
  });
};

exports.check = function(req, res, next){
  var userId = req.user._id;
  var info = { status: 2 };
  User.findOne(
    { "_id": userId, "schedule.night": req.query.night, "schedule.saloon_id": req.params.saloon_id }, 'schedule.$', function(err, user){
    if (err) return res.send(500, err);
    if (user === null) return res.send(200, info);
    info.status = 1;
    res.json(200, info);
  })
};

/**
 * Updates User Schedule with Saloon going tonight
 */
exports.create = function(req, res, next){
  var userId = req.user._id;
  User.findByIdAndUpdate(userId,
    {
        "$addToSet": {
            "schedule": {
                "saloon_id": req.params.saloon_id,
                "night": req.query.night
            }
        }
    },
    { select: 'name' },
    function(err, user){
      user.save();
      if(err) return res.send(500, err);
      res.send(200);
    });
};

/** 
 * Updates User Schedule removes user from Saloon
 */
exports.destroy = function(req, res){
  var userId = req.user._id;
  User.findByIdAndUpdate(userId,
    {
        "$pull": {
            "schedule": {
                "saloon_id": req.params.saloon_id,
                "night": req.query.night
            }
        }
    },
    { select: 'name' },
    function(err, user){
      user.save();
      if(err) return res.send(500, err);
      res.send(200);
    });
};