#!/usr/bin/env node
var json = require('./json');
//var requestHandlers = require("./requestHandlers");
json.json();

//var handle = {};
//handle["/"] = requestHandlers.json;
//handle["/json"] = requestHandlers.json;
//
//
//json.json(json., handle);

var http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer(function (req, res) {
    console.log("Check 1");
    if (req.method === 'POST' && req.url === '/json') {
    console.log("I can read POST method now!!!");
    //console.log(JSON.stringify(req.body));
    res.writeHead(200,{'Content-Type': 'application/json'});
    OBJ = require(__dirname + '/public/convertcsv.json');
    console.log(OBJ[1].message);
    res.end(JSON.stringify(OBJ));
    return OBJ;
    }
    var url_parts = url.parse(req.url);
 
    switch(url_parts.pathname) {
    case '/':
        console.log("Root Directory Requested");
	break;
    case '/json':
	    console.log("json requested");
	break;
    default:  
    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'

      console.log("Entering HTML"); 
      fs.readFile(__dirname + '/public/Checking.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        console.log(data[0]);
        res.write(data);
        res.end();
      });
    }
      
    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'
   
    console.log("Entering CSS");  
      fs.readFile(__dirname + '/public/css/checking.min.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
    }
    
    if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      console.log("Entering JS");  
      fs.readFile(__dirname + '/public/js/DorT.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
    }
    }
    //if(req.url.indexOf('.json') != -1){ //req.url has the pathname, check if it conatins '.json'
        
        
    //}
    
}).listen(8888, '0.0.0.0');
console.log('Server running at http://localhost:8888/');
