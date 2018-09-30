const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


//MIDDLEWARE
//====================================================

//Provides access to public folder
app.use(express.static('public'));

//Parses application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// });

//ROUTES
//====================================================


// app.get('/', (req, res) => res.send('Hello World!'))


//APP LISTENING
//====================================================
app.listen(process.env.PORT || 3000, function(){
    console.log('My app is listening on PORT 3000.')
});
