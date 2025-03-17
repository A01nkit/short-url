import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_WEB_CLIENT_ID,
    clientSecret: process.env.GOOGLE_WEB_CLIENT_SECRET,
    callbackURL: "https://localhost:8000/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
   
  }
));


passport.deserializeUser(function (user, done) {
    done(null, user)   
})

passport.serializeUser(function(user, done) {
    done(null, user)
})