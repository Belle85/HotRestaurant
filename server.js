const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');


//MIDDLEWARE
//====================================================

//Provides access to public folder
app.use(express.static(path.join(__dirname,"public")));

//Parses application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 


//ROUTES
//====================================================


// app.get('/', (req, res) => res.send('Hello World!'))
require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);

//APP LISTENING
//====================================================
app.listen(process.env.PORT || 3000, function(){
    console.log('My app is listening on PORT 3000.')
});
