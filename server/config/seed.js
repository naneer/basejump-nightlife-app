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
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Beenan',
    email: 'Beenan@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Meenan',
    email: 'Meenan@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Feenan',
    email: 'Feenan@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'},
      { 'saloon_id': 'not-this-one', 'night': '2015-6-25'}
      ]
  },
    {
    provider: 'local',
    name: 'Rick Grimes',
    email: 'rg@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Glenn Rhee',
    email: 'gr@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Carl Grimes',
    email: 'cg@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Dary Dixon',
    email: 'dd@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
    {
    provider: 'local',
    name: 'Carol Peletier',
    email: 'cp@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Maggie Greene',
    email: 'mg@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Michonne',
    email: 'm@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Beth Greene',
    email: 'bg@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
    {
    provider: 'local',
    name: 'Tyreese',
    email: 't@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Abraham Ford',
    email: 'af@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Rosita Espinosa',
    email: 're@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
      ]
  },
  {
    provider: 'local',
    name: 'Bob Stookey',
    email: 'bs@naneer.com',
    password: 'test',
    schedule: [
      { 'saloon_id': 'melody-lounge-los-angeles', 'night': '2015-6-25'}
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