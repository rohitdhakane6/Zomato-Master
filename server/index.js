import express from "express";
import { set, connect } from "mongoose";
import dotenv from "dotenv";
import { setupMiddleware } from "./middleware";
import { setupPassport } from "./config/passport.config";
import router from "./Routes";

dotenv.config();

const PORT = process.env.PORT || 6001;
const MONGO_URL = process.env.MONGO_URL;

const app = express();

setupMiddleware(app);
setupPassport(app);

app.use(router);

app.listen(PORT, () => {
    set("strictQuery", true);
    connect(MONGO_URL)
        .then(() => {
            console.log(`Server listening on port ${PORT}`);
        })
        .catch((err) => {
            console.error(`Error connecting to MongoDB: ${err}`);
        });
});
