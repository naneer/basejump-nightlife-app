'use strict';
    
var OAuth = require('oauth'),
    querystring= require('querystring'),
    _ = require('lodash');

function Saloon(){
  var oauthToken = process.env.YELP_TOKEN;
  var oauthTokenSecret = process.env.YELP_TOKEN_SECRET;
  var baseUrl = "http://api.yelp.com/v2/";
  var defaultSearchOptions = {
    offset: 0,
    limit: 10,
    category_filter: "bars",
    location: "Los Angeles, CA"
  };
  var oauth = new OAuth.OAuth(
    null,
    null,
    process.env.YELP_CONSUMER_KEY,
    process.env.YELP_CONSUMER_SECRET,
    "1.0",
    null,
    "HMAC-SHA1"
  );
  
  this.find = function(customSearchOptions, callback){
    var options = _.assign({}, defaultSearchOptions, customSearchOptions);
    return oauth.get(
      baseUrl + 'search/?' + querystring.stringify(options),
      oauthToken,
      oauthTokenSecret,
      function(err, data, res){
        if(!err) data = JSON.parse(data);
        data.location = options.location;
        callback(err, data, res);
      }
    );
  };
  
  this.findById = function(id, callback){
    return oauth.get(
      baseUrl + 'business/' + id,
      oauthToken,
      oauthTokenSecret,
      function(err, data, res){
        if(!err) data = JSON.parse(data);
        callback(err, data, res);
      }
    );
  };
  
}

module.exports = new Saloon();


