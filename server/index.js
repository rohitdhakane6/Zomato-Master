require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
});

import express, { json } from "express";
import helmet from "helmet";
import { set, connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import {
    Images,
    Restaurant,
    Food,
    Menu,
    Review,
    User,
    Order,
} from "./model/index.js";

/* CONFIGURATIONS */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
const app = express();
dotenv.config();
app.use(json());
app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* MONGOOSE SETUP */
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
