const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Rota  de teste
router.get('/test', (req, res) => {
    res.send('deu certo');
})

// Detalhe da vaga
router.get('/view/:id', (req, res) => Job.FindOne({
    where: {id: req.params.id}
    }).then(job => {
        res.render('view', {
            job
        });
    }).catch(err => console.log(err))
);

// Form da rota de envio
router.get('/add', (req, res) => {
    res.render('add');
})

// add job via post
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