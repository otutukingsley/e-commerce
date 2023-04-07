import express from "express"
const router = express.Router()
import {
  authUser,
  getAuthUser,
  registerUser,
  updateAuthUser,
  getUsers,
  deleteUser,
  getUserById,
  adminUpdateUser,
} from "../controllers/userController.js"
import { protect, isAdmin } from "../middleware/authMiddleware.js"

// @desc Auth user and get token
//@route POST /api/user/login
//@access Public
router.route("/").post(registerUser).get(protect, isAdmin, getUsers)
router.post("/login", authUser)
router.route("/profile").get(protect, getAuthUser).put(protect, updateAuthUser)
router
  .route("/:id")
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, adminUpdateUser);

export default router
