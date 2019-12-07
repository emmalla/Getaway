const express = require('express');
const router = express.Router();
var request = require("request");

router.get('/',(req, res, next) => {
var options = { method: 'GET',
  url: 'http://iatageo.com/getCode/' + req.session.lat + '/' + req.session.lon,
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     Host: 'iatageo.com',
     'Postman-Token': 'e6b4b044-73fc-4124-a04b-96a3461525b0,4114284b-a272-439a-8bad-0440d0453345',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.20.1' }, 
     json:true};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

});

module.exports = router;