import express from 'express'
import { createRooms, getAllRooms, getRoom } from '../controllers/roomates.js'
import { isAdm } from '../utils/verifyToken.js'


const router = express.Router()

// add rooms and administrate every roomates
router.post('/:roomId', isAdm, createRooms)

// get the rooms by id
router.get('/:id', getRoom)


// get all the rooms
router.get('/', getAllRooms)


export default router