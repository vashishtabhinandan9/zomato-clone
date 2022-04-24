import googleOAuth from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config({
  path: require("path").resolve(__dirname, "../.env"),
});
import { UserModel } from "../database/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/google/callback",
        scope: ['profile', 'email'],
      },
      async (accessToken, refreshToken, profile, done) => {
          //these 4 pareametera are provided after authenticating with google
          //they should be in the order given

        // creating a new user object
        const newUser = {
          fullname: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };
        try {
          // check if the user exist
          const user = await UserModel.findOne({ email: newUser.email });

          if (user) {//if user exist
            // generate token
            const token = user.generateJwtToken();
            // return  exidting user, 
            done(null, { user, token });//done means processing is done ,
            //done returns user data and token to callbackURL
          } else {//if user doen,t exist
            // create new user
            const user = await UserModel.create(newUser);

            // generate token
            const token = user.generateJwtToken();
            // return user
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};