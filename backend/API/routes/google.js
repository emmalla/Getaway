const express = require('express');
const router = express.Router();
var request = require("request");


router.get('/',(req, res, next) => {
  res.redirect('https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=75524538942-olq5psks55sbrkg18udgr7m3i95lau6i.apps.googleusercontent.com&redirect_uri=http://localhost:3000/callback&scope=https://www.googleapis.com/auth/userinfo.profile');
})




module.exports = router;


