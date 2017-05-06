// To serve a SINGLE PAGE APPLICATION, the Magic Mirror
// April 19, 2017   -- First try magic mirrow web server Raspberry Pi.
// Reading material -- https://blog.risingstack.com/your-first-node-js-http-server/
//                  -- https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular

// npm install express --save

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    // console.log(request.headers);
    response.sendFile('index.html', { root: __dirname + "/public/" }); // load the single view file (angular will handle the page changes on the front-end)    
});

app.listen(3000);

/*
app.get('/', (request, response) => {
  // Related to the last middelware app.use((err, request, response, next)
  throw new Error('oops')
})
*/

/* app.use: this is how you can define middlewares
 * it takes a function with three parameters, the first being the request, 
 * the second the response and the third one is the next callback. 
 * Calling next signals Express that it can jump to the next middleware or route handler.
app.use((request, response, next) => {  
  console.log(request.headers);
  next();
});
 */


/*
app.use((request, response, next) => {
    // DEMO
  // Just adding an extra property to the request Object.
  // request.chance = Math.random()
  next()
})
*/



/* The error handler function should be the last function added with app.use.
 * The error handler has a next callback - it can be used to chain multiple error handlers.
app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err);
  response.status(500).send('Something broke!');
});
 */
