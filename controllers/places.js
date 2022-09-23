import Place from '../models/Place.js'


export const createPlace = async (req, res, next) => {
    
    const newPlace =  new Place(req.body)

    try {
      
        const savePlace = await newPlace.save()

        res.status(200).json(savePlace)

    } catch (error) {
        next(error)
    }    
}


export const getPlace = async (req, res, next) => {
    
    try {
      
        const place = await Place.findById(req.params.id)

        res.status(200).json(place)

    } catch (error) {
        next(error)
    }    
}

export const getAllPlaces = async (req, res, next) => {
    
    try {
      
        const places = await Place.find()

        res.status(200).json(places)

    } catch (error) {
        next(error)
    }    
}

export const ofCity = async (req, res, next) => {

    const city = req.query.city.split(',')
    
    try {
      
        const list = await Promise.all(city.map((citys) => {
            return Place.countDocuments({ city: citys })
        }))

        res.status(200).json(list)

    } catch (error) {
        next(error)
    }    
}