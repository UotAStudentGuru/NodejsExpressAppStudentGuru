'use strict';
var express = require('express');
var router = express.Router();
var expense = require('../models/expense');

/* GET home page. */
router.get('/', function (req, res)
{       
    res.render('index', { user: "Great User", title: 'Express' });

    // Compile model from schema
    //var expenseModel = mongoose.model('expense', expense);

    // Create an instance of model SomeModel
    var awesome_instance = new expense({ type: 'Bills', ammount: 3, message: "Koinoxrista" });

    // Save the new model instance, passing a callback
    awesome_instance.save(function (err) {
        if (err)
        {
            return handleError(err);            
        }
        // saved!
    });
});

module.exports = router;
