// Search Controller

//Local dependencies
var Helpers = require ('../helpers')
var Search = {

index: function(req,res) {
    res.render('search/index');
  },
  
  
  search:function (req,res, next) {
      var hashtag =req.body.hashtag;
      
      var client = Helpers.getTwitterClient();
      
      var params = {
          q: hashtag
      };
      
      client.get('serach/tweets', params, function(err,tweets) {
          console.log (tweets);
          var data = {
              searchTerm: hashtag,
              numItems:0
              };
              
             if (tweets){
                 data.items=tweets.statuses;
                 data.numItems =data.items.length;
             } 
              
              
      res.render('search/index', data);
      });
  }
  
  };


module.exports= Search;