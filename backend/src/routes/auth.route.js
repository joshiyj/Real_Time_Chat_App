import express from "express";
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);

// protectRoute is a middleware to protect routes that require authentication. It checks for the presence of a valid JWT token in the request cookies and verifies it. If the token is valid, it allows the request to proceed; otherwise, it returns an unauthorized error.

// checkAuth route is a protected route that can be used to check if the user is authenticated. It returns the user's information if the JWT token is valid, otherwise it returns an unauthorized error.

export default router;