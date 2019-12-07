const express = require('express');
const router = express.Router();
var request = require("request");

//var nature ="natural";
//var museums = "museums";
//var shows = "opera_houses, music_venues, other_theatres, circuses";
//var history = "historical_places, castles, monuments, roman_villas, crypts";
//var active = "winter_sports, climbing, diving";



router.get('/nature',(req, res, next) => {
    var options = { method: 'GET',
  url: 'http://api.opentripmap.com/0.1/en/places/bbox',
  qs: 
   { lon_min: '30',
     lat_min: '-15',
     lon_max: '75',
     lat_max: '75',
     kinds: 'natural',
     format: 'json',
     apikey: '5ae2e3f221c38a28845f05b6680bb28f85eb9d9eedd9330416422bf5' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Host: 'api.opentripmap.com',
     'Postman-Token': '966a918e-512a-4ca7-b434-812dc57add2f,a4cee2eb-6998-4908-afc7-216cd7658c90',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1' },
     json:true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var randomnumber=Math.floor(Math.random()*501);
  res.status(200).json(body[randomnumber]);

  console.log(body);
});


  router.get('/museums',(req, res, next) => {
    var options = { method: 'GET',
  url: 'http://api.opentripmap.com/0.1/en/places/bbox',
  qs: 
   { lon_min: '30',
     lat_min: '-15',
     lon_max: '75',
     lat_max: '75',
     kinds: 'museums',
     format: 'json',
     apikey: '5ae2e3f221c38a28845f05b6680bb28f85eb9d9eedd9330416422bf5' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Host: 'api.opentripmap.com',
     'Postman-Token': '904c5b35-2344-4247-ab8f-bcc17e9ee4b6,f2edf387-e989-41c9-8157-10fa5f729fa1',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1' },
     json:true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var randomnumber=Math.floor(Math.random()*501);
  res.status(200).json(body[randomnumber]);


  console.log(body);
});

  })
  

  router.get('/shows',(req, res, next) => {
    var options = { method: 'GET',
  url: 'http://api.opentripmap.com/0.1/en/places/bbox',
  qs: 
   { lon_min: '30',
     lat_min: '-15',
     lon_max: '75',
     lat_max: '75',
     kinds: 'opera_houses,music_venues,other_theatres',
     format: 'json',
     apikey: '5ae2e3f221c38a28845f05b6680bb28f85eb9d9eedd9330416422bf5' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Host: 'api.opentripmap.com',
     'Postman-Token': 'a52001ed-36df-4d27-b66a-234047493572,52e03b95-e895-452b-a4a2-4a3b4f847851',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1' },
     json:true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var randomnumber=Math.floor(Math.random()*501);
  res.status(200).json(body[randomnumber]);

  console.log(body);
});

  })
  

  router.get('/history',(req, res, next) => {
    var options = { method: 'GET',
  url: 'http://api.opentripmap.com/0.1/en/places/bbox',
  qs: 
   { lon_min: '30',
     lat_min: '-15',
     lon_max: '75',
     lat_max: '75',
     kinds: 'historical_places,castles,monuments,roman_villas,crypts',
     format: 'json',
     apikey: '5ae2e3f221c38a28845f05b6680bb28f85eb9d9eedd9330416422bf5' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Host: 'api.opentripmap.com',
     'Postman-Token': '75d372ae-5d2d-4803-9b70-618529b0907e,14081fa9-e495-4ee4-9be3-2aadfd5b9295',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1' },
     json:true};
     

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var randomnumber=Math.floor(Math.random()*501);
  res.status(200).json(body[randomnumber]);

  console.log(body);
});

  })
  

  router.get('/active',(req, res, next) => {
    var request = require("request");

var options = { method: 'GET',
  url: 'http://api.opentripmap.com/0.1/en/places/bbox',
  qs: 
   { lon_min: '30',
     lat_min: '-15',
     lon_max: '75',
     lat_max: '75',
     kinds: 'winter_sports,climbing,diving',
     format: 'json',
     apikey: '5ae2e3f221c38a28845f05b6680bb28f85eb9d9eedd9330416422bf5' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Host: 'api.opentripmap.com',
     'Postman-Token': '773a05cf-d724-4907-8367-df28b3c9dc48,60d83b5f-571e-4ef3-b7ab-c68a5e21460d',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1' },
     json:true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  var randomnumber=Math.floor(Math.random()*501);
  res.status(200).json(body[randomnumber]);

  console.log(body);
});

  });
});

module.exports = router;

