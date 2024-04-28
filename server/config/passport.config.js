import passport from 'passport';
import googleAuthConfig from "./google.config";
import configureJwtStrategy from "./route.config";

export function setupPassport(app) {
    app.use(passport.initialize());
    googleAuthConfig(passport);
    configureJwtStrategy(passport);
}
