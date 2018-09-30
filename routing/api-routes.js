var tableData = require('../data/table-data');
var waitingListData = require('../data/waiting-list');

module.exports = function(app){
    app.get('/api/tables', function(req, res){
        res.json(tableData);
        console.log(tableData);
    });

    app.get('/api/waitlist', function(req, res){
        res.json(waitingListData);
        console.log(waitingListData);
    });

    app.post('/api/tables', function(req, res){
        if(tableData.length < 5){
            tableData.push(req.body);
            res.json(true);
        } else{
            waitingListData.push(req.body);
            res.json(false);
        };
    });

    app.post('/api/clear', function(){
        tableData = [];
        waitingListData = [];

        console.log(tableData);
        console.log(waitingListData);
    });
};