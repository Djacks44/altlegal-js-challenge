var express = require('express');
var router  = express.Router();
var bodyParser = require('body-parser');
var request = require('request');


router.post('/',function(req,res){
    TitleKeyword = req.body.searchterm.trim()
    var url = "http://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw="
              + TitleKeyword
              + "&api_key=3r23I5wV7rQo5zv899t13KaKjFpJW40K";

    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          body = JSON.parse(body)
          res.json(body.Results);
      }
    })
});


module.exports = router
