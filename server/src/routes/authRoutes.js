import express from "express";

//controllers
import {
  register,
  login,
  logout,
  currentUser,
  forgotPassword,
  resetPassword,
  verifyemail,
  page1,
} from "../controllers/auth";
// import googleSignIn from "../controllers/oauth-authenticate-handler";
// import { googleCallbackHandler } from "../controllers/oauth-callback-handler";
// import Oauthlogout from "../controllers/oauth-logout-handler";
// const passport = require("passport");
// import { requireSignin } from "./";
const { requireSignin } = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.get("/page1", requireSignin, page1);
router.patch("/forgotpassword", forgotPassword);
router.patch("/resetpassword", resetPassword);
router.post("/verifyemail", verifyemail);

// router.get("/oauthlogout", Oauthlogout);
// router.get("/google", googleSignIn);

//google callback route

// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", (error, user, info) => {
//     console.log("error", error);
//     console.log("user", user);
//     console.log("info", info);
//   }),
//   googleCallbackHandler
// );

module.exports = router;
