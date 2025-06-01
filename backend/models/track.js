const mongoose = require('mongoose');

//define fields for track schema
const trackSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    city:{ type: String },
    image: { type: String},
    duration:{type:String},
    description:{ type: String },
    trackType:{type: [String],enum: ['easy', 'short','great','tramping']},
    guidedTourFee:{ type: Number },
    trackEnteredAt: { type: Date, default: Date.now }
    
});


module.exports = mongoose.model('Track', trackSchema);