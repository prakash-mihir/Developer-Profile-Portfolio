const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Developer = require('../models/developers');

router.get('/devs', (req, res, next) => {
    Developer.find()
        .then(developers => {
            res.status(200).json(developers);
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.post('/devs', (req, res, next) => {
    // create a developer with the passed in data
    const developer = new Developer({
        _id: new mongoose.Types.ObjectId(),
        avatar_url: req.body.avatar_url,
        name: req.body.name,
        company: req.body.company,
        blog: req.body.blog,
        location: req.body.location,
        email: req.body.email,
        bio: req.body.bio,
        github_id: req.body.github_id,
        linkedin_id: req.body.linkedin_id,
        codechef_id: req.body.codechef_id,
        hackerrank_id: req.body.hackerrank_id,
        twitter_id: req.body.twitter_id,
        medium_id: req.body.medium_id,
        repos: req.body.repos
    });
    // save the developer
    developer.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Developer created',
                createdDeveloper: developer
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/devs/:id', (req, res, next) => {

});

router.delete('/devs/:id', (req, res, next) => {
    // find the developer by id
    Developer.findById(req.params.id)
        .then(developer => {
            // delete the developer
            developer.remove()
                .then(() => {
                    res.status(200)
                        .json({
                            message: 'Developer deleted',
                            deletedDeveloper: developer
                        });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;