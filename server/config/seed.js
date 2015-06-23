/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');


User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, 
  {
    provider: 'local',
    name: 'Reenan',
    email: 'reenan@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': 'test'}
      ]
  },
  {
    provider: 'local',
    name: 'Beenan',
    email: 'Beenan@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': 'Jun 22, 2015'}
      ]
  },
  {
    provider: 'local',
    name: 'Meenan',
    email: 'Meenan@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': 'Jun 22, 2015'}
      ]
  },
  {
    provider: 'local',
    name: 'Feenan',
    email: 'Feenan@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': 'Jun 22, 2015'}
      ]
  },
  {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});