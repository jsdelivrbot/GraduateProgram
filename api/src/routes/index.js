const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const event = require('../models/event');
const day = require('../models/day');
const gallery = require('../models/gallery');
const photo = require('../models/photo');

/* GET Returns all events */
router.get('/events', function(req, res, next) {
    mongoose.model('event').find().sort([['_id', 1]]).populate({path: 'days', options: { sort: { 'name': 1 } } }).exec((err, events) =>{
        if(err){
            res.status(401).send('error: an error has occurred');
        } else {
            if (!events) {
                res.status(400).send('error: not found');
            } else {
                res.status(200).send(events);
            }
        }
    });
});

/* GET Returns all galleries associated with a day */
router.get('/day/:id', function(req, res, next) {
    mongoose.model('day').findOne({_id: req.params.id}).populate({path: 'galleries', options: { sort: { 'name': 1 } } }).exec((err, day) =>{
        if(err){
            res.status(401).send('error: an error has occurred');
        } else {
            if (!day) {
                res.status(400).send('error: not found');
            } else {
                res.status(200).send(day.galleries);
            }
        }
    });
});

/* GET Returns all galleries */
router.get('/gallery', function(req, res, next) {
    mongoose.model('gallery').find({}, (err, galleries) =>{
        if(err){
            res.status(401).send('error: an error has occurred');
        } else {
            if (!galleries) {
                res.status(400).send('error: not found');
            } else {
                res.status(200).send(galleries);
            }
        }
    });
});

/* GET Returns all photos associated with a gallery */
router.get('/gallery/:id', function(req, res, next) {
    mongoose.model('gallery').findOne({_id: req.params.id}).populate({path: 'photos', options: { sort: { 'description': 1 } } }).exec((err, gallery) =>{
        if(err){
            res.status(401).send('error: an error has occurred');
        } else {
            if (!gallery) {
                res.status(400).send('error: not found');
            } else {
                res.status(200).send(gallery.photos);
            }
        }
    });
});

module.exports = router;
