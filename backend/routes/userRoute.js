import express from 'express'
const router = express.Router()
import { authUser, getAuthUser, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// @desc Auth user and get token
//@route POST /api/user/login
//@access Public
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getAuthUser)


export default router
