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
};