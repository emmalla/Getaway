
const express = require('express');
const router = express.Router();
var request = require("request");

var code = "";

router.get('/LHR', (req, res, next) => {
    console.log(code)
    console.log("got here")
    var go_url =  'https://api.flightstats.com/flex/schedules/rest/v1/json/from/BOS/to/LHR/departing/2019/12/11'
    var options = {
        method: 'GET',
        url: go_url,
        qs:
        {
            appId: 'b8b20992',
            appKey: 'c2a78b3617c7e40265cb7c06e964aa65'
        },
        headers:
        {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            Host: 'api.flightstats.com',
            'Postman-Token': 'b8077019-7177-42e9-b74a-142b5d8de866,b4c73878-8aab-4ac1-b612-8622d84308b2',
            'Cache-Control': 'no-cache',
            
        },
        json:true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.status(200).json(body)
    });
});
 

router.get('/',(req, res, next) => {
  console.log(req.session.id)

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
     console.log(options.url);

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  code = body.code;
  res.redirect('/flights/go')
});

});

// make sure all is well push


router.get('/go', (req, res, next) => {
    console.log(code)
    console.log("got here")
    var go_url =  'https://api.flightstats.com/flex/schedules/rest/v1/json/from/BOS/to/' + code + '/departing/2019/12/11'
    var options = {
        method: 'GET',
        url: go_url,
        qs:
        {
            appId: 'b8b20992',
            appKey: 'c2a78b3617c7e40265cb7c06e964aa65'
        },
        headers:
        {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            Host: 'api.flightstats.com',
            'Postman-Token': 'b8077019-7177-42e9-b74a-142b5d8de866,b4c73878-8aab-4ac1-b612-8622d84308b2',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
        },
        json:true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.status(200).json(body)
    });

})

module.exports = router;
