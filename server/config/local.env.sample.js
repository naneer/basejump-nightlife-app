'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'workspace-secret',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: '',
  
  // YELP OAUTH STUFF
  YELP_CONSUMER_KEY: '',
  YELP_CONSUMER_SECRET: '',
  YELP_TOKEN: '',
  YELP_TOKEN_SECRET: ''
};
