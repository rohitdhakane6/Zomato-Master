import googleOAuth from "passport-google-oauth20";
import User from "../model/User";

const GoogleStrategy = googleOAuth.Strategy;
import dotenv from "dotenv";
dotenv.config();

// Configure Google OAuth strategy
export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        // Extract user information from Google profile
        const newUser = {
          fullName: profile.displayName,
          email: profile.emails[0].value,
        };

        try {
          // Check if the user already exists in the database
          let user = await User.findOne({ email: newUser.email });

          if (!user) {
            // If the user doesn't exist, create a new user in the database
            user = await User.create(newUser);
          }

          // Generate JWT token for the user
          const token = user.genratjwttoken();

          // Pass user and token to the done callback
          done(null, { user, token });
        } catch (error) {
          // Handle errors by passing them to the done callback
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};
