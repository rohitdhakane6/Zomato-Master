import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from "../model/user"
  
const configureJwtStrategy = (passport) => {
    // JWT options
    const jwtOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key', // Replace with your actual secret key
    };
  
    // Configure the JWT strategy
    passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
      try {
        // Find the user based on the token's payload
        const user = await User.findById(payload.User);
  
        // If the user is found, return the user object
        if (user) {
          return done(null, user);
        }
  
        // If user not found, return false
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }));
  };
  
  export default configureJwtStrategy;