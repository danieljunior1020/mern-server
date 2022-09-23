import jwt from 'jsonwebtoken'
import { createError } from './error.js'


export const verifyToken = (req, res, next) => {

    const token = req.cookies.access_token

    if (!token) {
        return next(createError(401, 'you are not authenticate!!'))
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
         if(err) return next(createError(403, 'invalid token!!'))

         req.user = user

         next()
    })

} 


export const verifyUser = (req, res, next) => {

    verifyToken(req, res, next, () => {

        if (req.user.id === req.params.id || req.user.isAdm) {
             next()
        } else {
            // sending error
            return next(createError(403, 'are not authorized!'))
        }
    })
} 

export const isAdm = (req, res, next) => {

    verifyToken(req, res, next, () => {

        if (req.user.isAdm) {
             next()
        } else {
            // sending error
            return next(createError(403, 'are not authorized!'))
        }
    })
} 