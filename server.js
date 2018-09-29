const express = require('express');
const bodyParser = require('body-parser')

//Starts an instance of express
const app = express();

//Provides access to public folder
app.use(express.static('public'));

//Parses application
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});

app.listen(3000, function(){
    console.log('My app is listening on PORT 3000.')
})
