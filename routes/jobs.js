const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/test', (req, res) => {
    res.send('deu certo');
})

// add job via post

router.get('/add', (req, res) => {
    res.render('add');
})

router.post('/add', (req, res) => {

    let { title, company, salary, email, new_job, description } = req.body;
    
    // insert job

    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router
