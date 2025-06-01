const express = require('express');
const trackRoute = express.Router();
const Controllers = require("../controllers");

trackRoute.get('/', (req, res) => {
    Controllers.trackController.getAllTracks(res);
});

trackRoute.post('/create', (req, res) => {
    Controllers.trackController.createTrack(req.body, res);
});

trackRoute.get('/:id', (req, res) => {
    Controllers.trackController.getTrackById(req, res);
});


trackRoute.delete('/:id', (req, res) => {
    Controllers.trackController.deleteTrack(req, res);
});


module.exports = trackRoute;