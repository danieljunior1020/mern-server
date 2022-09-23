import express from 'express'
import { createPlace, getAllPlaces, getPlace, ofCity } from '../controllers/places.js'
import { isAdm } from '../utils/verifyToken.js'

const router = express.Router()


// add places and administrate every hotel place 
router.post('/', isAdm, createPlace)

// get the places by id
router.get('/find/:id', getPlace)


// get all the places
router.get('/', getAllPlaces)
router.get('/ofcity', ofCity)
router.get('/oftype', getAllPlaces)



export default router