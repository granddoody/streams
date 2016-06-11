// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key:'iUjFsSt0rsqV4Gl4kqOL6sg2W',
    consumer_secret:'8Ks7KXpHIMZwB7yQYbZy3GzEcdpqj65mzAcIiN9Hjnc0wW3nEL',
    access_token_key:'907149463-hkCPRk1oulfIn4ttFECWonYvBIzGk2NiUPLN6w2h',
    access_token_secret:'gbxoMk7a6URX7yjgXKbICvIaygXyyuxFqwA82gkohCr4s'
  });

  return client;
};

module.exports = Helpers;
