'use strict';

var User = require('../user.model');

/**
 * Get list of users going to saloon
 */

exports.index = function(req, res) {
  var query = {};
  var info = {};
  
  (req.query.saloon_id) ? (query.saloon_id = req.query.saloon_id) : "";
  (req.query.night) ? (query.night = req.query.night) : "";
  (req.query.offset) ? (query.offset = req.query.offset) : 0;

  User.find({ "schedule.saloon_id": query.saloon_id, "schedule.night" : query.night }).count(function(err, count){
    if (err) return res.send(500, err);
    info.total = count;
    if(count <= 0){
      res.json(200, info);
    }
    User.find({ "schedule.saloon_id": query.saloon_id, "schedule.night" : query.night })
        .select('name').skip(req.query.offset).limit(10)
        .exec(function(err, users){
          if (err) return res.send(500, err);
            info.users = users;
            res.json(200, info);
        });
  });
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
                "night": req.body.night
            }
        }
    },
    { new: true, select: 'name schedule' },
    function(err, user){
      if(err) return res.send(500, err);
      return res.json(201, user);
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
                "night": req.body.night
            }
        }
    },
    { new: true, select: 'name' },
    function(err, user){
      if(err) return res.send(500, err);
      return res.json(201, user);
  });
};