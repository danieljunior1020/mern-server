import mongoose from "mongoose";


const HotelSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    descript: {
        type: String,
        require: true
    },
    maxPeople: {
        type: Number,
        require: true
    },
    roomNumber: [{
        number: Number,
        unvaiblableDate: {type: [ Date ] }
    }],
}, {
  timestamps: true  
})


export default mongoose.model('Hotel', HotelSchema)