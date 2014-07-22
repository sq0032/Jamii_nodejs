var fs = require('fs');
var http = require('http');
var querystring = require('querystring');

function PostCode(req, res) {
  // Build the post string from an object
/*  var post_data = querystring.stringify({
      'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
      'output_format': 'json',
      'output_info': 'compiled_code',
        'warning_level' : 'QUIET',
        'js_code' : 'HELLO',
  });*/
    
  var post_data = querystring.stringify(req.body);
  console.log(post_data);
  //  console.log(json_data);
  // An object of options to indicate where to post to
  var post_options = {
      host: 'localhost',
      port: '8000',
      path: req.path,
      method: req.method,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length,
          'Cookie': querystring.stringify(req.cookies).replace('&',';'),
      }
  };

  // Set up the request
  var local_req = http.request(post_options, function(local_res) {
      //local_res.setEncoding('utf8');
      var mimeTypes = {
        'html': 'text/html',
        'jpeg': 'image/jpeg',
        'jpg': 'image/jpeg',
        'png': 'image/png',
        'js': 'text/javascript',
        'css': 'text/css'
      };
      
//      res.writeHead(local_res.statusCode, {'Content-Type':mimeTypes});
      //local_res.pipe(res);
      //res.end();
      
      var dataString = '';
      local_res.on('data', function (chunk) {
          //console.log('Response: ' + chunk);
          dataString+=chunk;
      });
      local_res.on('end', function(){
          console.log(local_res.headers["content-type"]);
          res.setHeader('Content-Type', local_res.headers["content-type"]);
          res.writeHead(local_res.statusCode);
          res.write(dataString);
          res.end();
      });
  });

  // post the data
  local_req.write(post_data);

    console.log(req);
    console.log('\n\n\n\n');
    console.log(local_req);
    //console.log(local_req);
    
  local_req.end();
}

/* GET home page. */
exports.index = function(req, res){
//    console.log(typeof(req.cookies));
    PostCode(req, res);
    
//  res.render('index', { title: 'Express' });
    //var post_data = req.body
/*    var post_data = querystring.stringify({
        test : 'asfasdfasdfasftest',
    });
    
    var options = {
        host    : 'localhost',
        port    : 8000,
        path    : req.path,
        method  : req.method,
        headers : {'Cookie': 'csrftoken=' + req.cookies['csrftoken']
                              +';sessionid=' + req.cookies['sessionid'],
                   'Content-Type': 'application/x-www-form-urlencoded',
        },
//        'Content-Type':'application/x-www-form-urlencoded',
//        form    : {'test':'test'}
    };
    //console.log('----------------------------------------');
   // console.log(req);
    //console.log(JSON.stringify(req.body));
    
    
    var local_req = http.request(options, function(local_res){
        //local_res.setEncoding('utf8');
        res.writeHead(local_res.statusCode);
        local_res.pipe(res);
    });
   // local_req.body = req.body;
   // console.log(post_data);
    local_req.write("test=test");
    console.log(local_req);
    local_req.end();*/
};
