import { Router } from "express";
import passport from "passport"
import User from "../model/user";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    // Check if the email and phone are unique
    await User.findByEmailAndPhone(
      req.body.credintional.email,
      req.body.credintional.phone
    );

    // Create a new user
    const newUser = await User.create(req.body.credintional);

    // Generate JWT token for the new user
    const token = newUser.genratjwttoken();

    // Respond with token and success status
    return res.status(201).json({ token, status: "success" });
  } catch (error) {
    console.error(error);
    // Handle the error, possibly send an error response to the client
    return res.status(500).json({ error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  try {
    // Check if the email and password match
    const user = await User.findByEmailAndPassword(
      req.body.credintional.email,
      req.body.credintional.password
    );

    // Generate JWT token for the user
    const token = user.genratjwttoken();

    // Respond with token and success status
    return res.status(201).json({ token, status: "success" });
  } catch (error) {
    console.error(error);
    // Handle the error, possibly send an error response to the client
    return res.status(500).json({ error: error.message });
  }
});

// Route for initiating Google OAuth authentication
router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

// Callback route after successful Google OAuth authentication
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the home page or any other route
    return res.status(200).json({ token: req.session.passport.user.token ,status: "success"})
  }
);
export default router;
