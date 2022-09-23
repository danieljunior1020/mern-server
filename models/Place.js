// create model DB

import mongoose from "mongoose";


const PlaceSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    photo: {
        type: [String]
    },
    descript: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    roomate: {
        type: [String],
    },
    price: {
        type: Number,
        require: true
    },
    featured: {
        type: Boolean,
        default: false
    },
})


export default mongoose.model('Place', PlaceSchema)