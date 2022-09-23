import Place from "../models/Place.js"
import Roomate from "../models/Roomate.js"


export const createRooms = async (req, res, next) => {
     
    const roomId = req.params.roomId

    const newRoom = new Roomate(req.body)

    try {
        
        const saveRoom = await newRoom.save()

        try {
            
        //find hotels and rooms
        await Place.findByIdAndUpdate(roomId, {
            $push: {roomate: saveRoom._id}
        })

        } catch (e) {
            next(e)
        }

        res.status(200).json(saveRoom)

    } catch (e) {
        next(e)
    }
}

export const getRoom = async (req, res, next) => {
    
    try {
      
        const room = await Roomate.findById(req.params.id)

        res.status(200).json(room)

    } catch (error) {
        next(error)
    }    
}

export const getAllRooms = async (req, res, next) => {
    
    try {
      
        const rooms = await Roomate.find()

        res.status(200).json(rooms)

    } catch (error) {
        next(error)
    }    
}