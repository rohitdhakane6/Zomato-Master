import express, { json } from "express";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";

export function setupMiddleware(app) {
    app.use(json());
    app.use(helmet());
    app.use(cors());
    
    app.use(
        session({
            secret: 'your-secret-key',
            resave: false,
            saveUninitialized: true,
            cookie: {
                secure: false,
                maxAge: 24 * 60 * 60 * 1000,
            },
        })
    );
}
