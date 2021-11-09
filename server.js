'use strict'

const http = require('http');
const fs = require('fs');
const path = require('path');

const express = require('express')
const app = express();

//let file = path.join(__dirname, '/static/');
//console.log(file);

const server = http.createServer(function (request, response) {
   console.log(request.method, request.url);
   if (request.url === '/css/style.css') {
      const style = fs.readFileSync('static/css/style.css', 'utf-8');
      response.end(style);
   } else if(request.url === '/img/main-icon.png') {
      const logo = fs.readFileSync('static/img/main-icon.png');
      response.end(logo);
   } else if(request.url === '/img/check-icon.png') {
      const logo = fs.readFileSync('static/img/check-icon.png');
      response.end(logo);
   } else if(request.url === '/static/scripts/script.js') {
      const script = fs.readFileSync('static/scripts/script.js', 'utf-8');
      response.end(script);
   } else if(request.url === '/static/scripts/upload.js') {
      const uploadScript = fs.readFileSync('static/scripts/upload.js', 'utf-8');
      console.log(uploadScript);
      response.end(uploadScript);
   }
   else {
      const html = fs.readFileSync('static/index.html', 'utf-8');
      response.end(html);
   }
});

const port = process.env.PORT || 3000;

server.listen(port, function () {
   console.log('Server listening port '+port);
});
console.log('Server started');