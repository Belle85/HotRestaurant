const path = require('path');

module.exports = function (app){

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '/../public/home.html'))
    });

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname, '/../public/tables.html'));
        console.log(" I am on my table page"); 
      });

    app.get('/reserve', function(req, res){
        res.sendFile(path.join(__dirname, '/../public/reserve.html'));
        console.log(" I am on my reserve page");  
    });

  
};