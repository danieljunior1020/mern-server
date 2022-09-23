import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import { createError } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
     
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()

        res.status(200).send('user has created!!')

    } catch (e) {
        next(e)
    }
}

export const login = async (req, res, next) => {
     
    try {

        const user = await User.findOne({
            username: req.body.username
        })

        if(!user) return next(createError(404, 'user not found!!'))

        const passwordCorrect = await bcrypt.compare(
           req.body.password, user.password
         )

        if(!passwordCorrect) return next(createError
            (400, 'incorrect password or email'))


            const token = jwt.sign({
                user: user._id,
                isAdm: user.isAdm
            }, process.env.JWT_SECRET)

            const { password, isAdm, ...others} = user._doc

        res.cookie('access_token', token, {
           httpOpen: true
        }).status(200).json({ ...others })

    } catch (e) {
        next(e)
    }
}