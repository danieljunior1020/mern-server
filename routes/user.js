import express from 'express'
import { getAllUsers, getUser } from '../controllers/users.js'
import { isAdm, verifyToken, verifyUser } from '../utils/verifyToken.js'


const router = express.Router()


// for register login 
// router.get('/checkauth', verifyToken, (req, res, next) => {
    
//     res.send('you are in log in!')

// })

// // for login and you cant delete accounter
// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    
//     res.send('you are in log in!')

// })


// get the places by id
router.get('/:id', verifyUser, getUser)


// get all the places
router.get('/', isAdm, getAllUsers)



export default router