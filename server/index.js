// Importing necessary packages
import express, { json } from "express";
import helmet from "helmet";
import { set, connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import passport from 'passport';
import session from 'express-session';
dotenv.config();

//Routes
import { authRoute,foodRoute,imageRoute, restaurantRoute } from "./controllers";


// Importing route handlers and Passport configuration
import googleAuthConfig from "./config/google.config"



// Creating an Express app
const app = express();

// Adding middleware packages
app.use(json()); // Parse incoming JSON requests
app.use(helmet()); // Set security-related HTTP headers
app.use(cors()); // Enable CORS for all routes

// Configuring session middleware
app.use(
    session({
      secret: 'your-secret-key', // Choose a strong and unique secret key
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false, // Set to true if your site is served over HTTPS
        maxAge: 24 * 60 * 60 * 1000, // Set the session to expire in 1 day (adjust as needed)
      },
    })
);

// Initializing Passport middleware
app.use(passport.initialize());

// Configuring Passport with Google OAuth
googleAuthConfig(passport);

// Adding route handlers
app.use("/auth", authRoute);
app.use("/image",imageRoute);
app.use("/restaurant",restaurantRoute);
app.use("/food",foodRoute)




// Mongoose setup
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
    // Setting strict mode for Mongoose queries
    set("strictQuery", true);

    // Connecting to MongoDB
    connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`Server listening on port ${PORT}`);
        })
        .catch((err) => {
            console.error(`Error connecting to MongoDB: ${err}`);
        });
});
