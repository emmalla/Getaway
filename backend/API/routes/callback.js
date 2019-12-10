const express = require('express');
const router = express.Router();


// use request-promise in final code! sorry not for demo

var request = require("request");

router.get('/', (req, res, next) => {
  var options = {
    method: 'POST',
    url: 'https://oauth2.googleapis.com/token',
    qs:
    {
      code: req.query.code,
      client_id: '75524538942-olq5psks55sbrkg18udgr7m3i95lau6i.apps.googleusercontent.com',
      client_secret: '6VLFL6opiMvPT85jrPX7KfAz',
      redirect_uri: 'http://localhost:3000/callback',
      grant_type: 'authorization_code'
    },
    headers:
    {
      'cache-control': 'no-cache',
      Connection: 'keep-alive',
      Host: 'oauth2.googleapis.com',
      'Postman-Token': '667d8016-ec6c-41c5-a5ab-2711475b65e5,7ad6fe32-8c44-492a-a907-79f2620c87d1',
      'Cache-Control': 'no-cache',
      Accept: '*/*',
      'User-Agent': 'PostmanRuntime/7.19.0',
      json: true
    },
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    var request = require("request");

    console.log(body.access_token);
    var options = {
      method: 'GET',
      url: 'https://people.googleapis.com/v1/people/me',
      qs: { personFields: 'names,emailAddresses' },
      headers:
      {
        Authorization: 'Bearer ' + body.access_token,
        'cache-control': 'no-cache',
        Connection: 'keep-alive',
        Host: 'people.googleapis.com',
        'Postman-Token': '40a93bba-7ca9-41f6-a7c6-6a9d561f04e9,567d12e3-5714-4923-b1d8-d59418273d7c',
        'Cache-Control': 'no-cache',
        Accept: '*/*',
        'User-Agent': 'PostmanRuntime/7.19.0'
      },
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
      console.log(body.emailAddresses)


      req.session.name = body.names[0].displayName;
      req.session.email = body.emailAddresses[0].value;
      req.session.save();
      console.log(req.session)


      var options = {
        method: 'POST',
        url: 'http://localhost:3002/person',
        qs: {
          name: req.session.name,
          email: req.session.email
        },
        headers:
        {
          'cache-control': 'no-cache',
          Connection: 'keep-alive',
          Cookie: 'connect.sid=s%3AA7SbFSCni63RiWhvdiuhPJ58yFcE8k4_.UrKKwJl68lH2A5P1pIacUQFV6VEM%2BSsSXbC%2BKkgsO8o',
          Host: 'localhost:3002',
          'Postman-Token': 'feb33d5d-f760-4e9b-9481-7fd4361d2886,7922e7be-338a-4d78-abec-b158fb2a9375',
          'Cache-Control': 'no-cache',
          Accept: '*/*',
          'User-Agent': 'PostmanRuntime/7.20.1'
        },
        // body: { "name": req.session.name, "email": req.session.email },
        json: true
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log("here")
        console.log(body)
      });
    });
    console.log(req.session);
  });
  console.log('this is the session id')
  console.log(req.session.id)
  res.redirect("http://localhost:3001");
});
module.exports = router;