module.exports = function urlmeta(opts, callback) {

  if(typeof opts === 'string') {
    opts = {
      url: opts
    };
  } else if(typeof opts === 'object') {
    if(!opts.url)
      return callback('Please provide a URL to fetch meta for.');
  } else {
    return callback('Please provide a URL as string or an Object.');
  }

  var http   = require('https')
      , url  = require('url');

  var uriCheck = url.parse( opts.url );

  if(uriCheck.host === null || uriCheck.host.length === 0)
    return callback('No host found in the URL');

  if( uriCheck.protocol === null ||
      (uriCheck.protocol !== 'https' ||  uriCheck.protocol !== 'http')
    ) {
    uriCheck.protocol = 'http';
    opts.url = url.format(uriCheck);
  }


  var req = http.request({
    'method': 'GET'
    , 'hostname': 'api.urlmeta.org'
    , 'path': '/?url='+ encodeURIComponent( opts.url ) + ( opts.onlyHead === true ? '&onlyHead=true' : '' )
  }, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = JSON.parse( Buffer.concat(chunks) ),
      error;

      if(body.result.status === 'ERROR') {
        error = body.result;
        body  = undefined;
      }

      callback(error, body);
    });

  });

  req.end();

};