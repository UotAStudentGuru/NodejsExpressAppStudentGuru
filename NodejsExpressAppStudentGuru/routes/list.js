'use strict';
var express = require('express');
var router = express.Router();
var expense = require('../models/expense');

async function executeAsyncTask(req,res)
{
    const valueb = await functionSave(req);
    const value = await functionFetch(res);
    
    return value;
}

function functionFetch(res)
{
    //fetching the data   
    expense.find({}).then(data=>
    {
        res.render('list', { expenses: data });
    });
    
}
function functionSave(req)
{
    var expense_instance = new expense({ type: req.body.type, ammount: req.body.ammount, message: req.body.message });
    // Save the new model instance, passing a callback
    expense_instance.save(function (err) {
        if (err) {
            return handleError(err);
        }
        // saved!
    });    
}



/* GET list page. */
router.post('/', function (req, res)
{        
    //let a = Promise.all([
    //    executeAsyncTask(req, res)
    //]).then((data) => {
    //    //console.log(data);
    //    //res.render('list', { expenses: data });
    //});

    console.log(req.body);
    var expense_instance = new expense({ type: req.body.type, ammount: req.body.ammount, message: req.body.message });
    // Save the new model instance, passing a callback
    expense_instance.save(function (err) {
        if (err) {
            return handleError(err);
        }
        // saved!
        expense.find({}).then(data => {
            res.render('list', { expenses: data });
        });
    }); 

});

module.exports = router;