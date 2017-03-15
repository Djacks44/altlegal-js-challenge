var express = require('express');
var router  = express.Router();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var request = require('request');
 var twitter = require('twitter')
 var axios = require('axios');


router.post('/api', function(req, res){
  var text = req.body.text
  console.log(text);
  this.text = text

  router.get('/tweets', function(req, res){
	this.tw = [];


  twitterCall()
    function twitterCall() {
        var client = new twitter({
      consumer_key: 'bdrrfOqTLd4PpuSZwLSbKYieA',
      consumer_secret: 'I7903VtIQ6jA3zrvICJjoNZN7yKson2Yhia1O291SYv3G6knIG',
      access_token_key: '715890770386022400-Fzh6qciYUUMEDpclI3wxxWePZtk2KZS',
      access_token_secret: '1jEZ307eBlG3XZjKFh5B04ryOjCyOKVcoYKe9ZMWOU5KS', 
      });
      
      var params = {screen_name: 'DiscoverMf'};
      client.get('search/tweets', {q: this.text , lang: "en"}, function(error, tweets, response){
      	console.log(this.text,"jdjdjsdsd")
      if (!error) {
      	if(tweets.statuses){
          
            tweets.statuses.forEach((tweet) => {
              let Info = {
                screen_name: '@' + tweet.user.screen_name,
                username: tweet.user.name,
                text: tweet.text,
                img: tweet.user.profile_image_url,
              }
              this.tw.push(Info)

            })
            console.log(this.tw[0], "lol")

			axios({
			  method: 'post',
			  url: '/user/12345',
			  data: {
			    firstName: 'Fred',
			    lastName: 'Flintstone'
			  	}
			});




            this.tw = []
            console.log(this.tw[0], "ddd")
            




      }
      // lists my tweets
      }
      // counts out and displays multiple tweets
        // for(var i = 0; i < data.length; i++) {
        //   var twitterResults = 
        //   "@" + data[i].user.screen_name + ": " + 
        //   data[i].text + "\r\n" + 
        //   data[i].created_at + "\r\n" + 
        //   "------- End Tweet -------" + "\r\n";
        //   tw.push(twitterResults)

        // }
        // res.send(tw)
     res.end()
    });

    } //end twitter
    res.end()
  });
});



module.exports = router;