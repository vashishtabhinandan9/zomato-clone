// Importing Env Variables
require("dotenv").config();


// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

const session= require("express-session")
// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/menu";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";
/*
import MailService from "./API/Mail";
import Payments from "./API/Payments";
*/
// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

//console.log(process.env.GOOGLE_CLIENT_ID);

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'bla bla bla' 
}));
zomato.use(passport.session());

// passport cofiguration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);

zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
/*
zomato.use("/mail", MailService);
zomato.use("/payments", Payments);
*/

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

//const port = process.env.PORT || 4000;

zomato.listen(4000, () =>
  ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch((error) =>{
    console.log(error);
      console.log("Server is running, but database connection failed... ")
    }
    )
);