import express from 'express'
const router = express.Router()
import {
  authUser,
  getAuthUser,
  registerUser,
  updateAuthUser,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

// @desc Auth user and get token
//@route POST /api/user/login
//@access Public
router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getAuthUser).put(protect, updateAuthUser)

export default router
