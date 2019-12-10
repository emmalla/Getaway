const express = require('express');
const router = express.Router();
var request = require("request");

router.get('/', (req, res, next) => {
    var options = {
        method: 'GET',
        url: 'http://localhost:3002/person/' + req.session.email,
        headers:
        {
            'cache-control': 'no-cache',
            Connection: 'keep-alive',
            Cookie: 'connect.sid=s%3AA7SbFSCni63RiWhvdiuhPJ58yFcE8k4_.UrKKwJl68lH2A5P1pIacUQFV6VEM%2BSsSXbC%2BKkgsO8o',
            'Content-Length': '65',
            'Accept-Encoding': 'gzip, deflate',
            Host: 'localhost:3002',
            'Postman-Token': 'cab16a67-5921-416d-9cbc-8d2e918fcb2c,fe7addb0-18fc-41a8-9785-534d9801254c',
            'Cache-Control': 'no-cache',
            Accept: '*/*',
            'User-Agent': 'PostmanRuntime/7.20.1',
            'Content-Type': 'application/json'
        },
        json: true
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.status(200).json(body);
    });
    
});

module.exports = router;