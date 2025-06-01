"use strict";
//get all required modules
let Models = require("../models");


//create track 
const createTrack = (data, res) => {
  console.log(data);
  new Models.Track(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

  
//to get all  track 
  const getAllTracks = ( res) => {
    Models.Track.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//to get traack data by it's it
const getTrackById = (req, res) => {
 
  Models.Track.findById(req.params.id)
      .then((data) => res.send({ result: 200, data: data }))
      .catch((err) => {
          console.log(err);
          res.send({ result: 500, error: err.message });
      });
};




 // deletes the Track matching the ID from the param for admin purposes
 const deleteTrack= (req, res) => {
  Models.Track.findByIdAndDelete(req.params.id)
   .then((data) => res.send({ result: 200, data: data }))
   .catch((err) => {
     console.log(err);
     res.send({ result: 500, error: err.message });
   });
};




module.exports = {createTrack,getAllTracks,getTrackById,deleteTrack}