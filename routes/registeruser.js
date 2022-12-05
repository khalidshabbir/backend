const express = require("express");
const router = express.Router();
const loginusers = require("../models/loginSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");
const multer = require("multer");
/*============================================================*/
/*==========================User SignIn =================================*/
// router.post("/register/users", async (req, res) => {
//   console.log(req.body);
//   try {
//     const newPassword = await bcrypt.hash(req.body.password, 10);
//     await loginusers.create({
//       name: req.body.name,
//       email: req.body.email,
//       password: newPassword,
//     });
//     res.json({ status: "ok" });
//   } catch (err) {
//     res.json({ status: "error", error: "Duplicate email" });
//   }
// });
/*===================================================================*/
router.post("/login/users", async (req, res) => {

  const user = await loginusers.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.TOKEN_KEY
    );

    return res.json({
      status: "ok",
      isAuthenticated: "true",
      user: token,
      username: user.id,
    });
  } else {
    return res.json({ status: "error", user: false });
  }
});
/*==============================================================*/
/*===============================================================*/

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../client/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const uploadimg = multer({ storage: storage });
//  const newPassword = await bcrypt.hash(req.body.password, 10);
router.post( "/register/signupusers",
  uploadimg.single("image"),
  async (req, res) => {
    const file = req.image;

    try {
 
      const newPassword = await bcrypt.hash(req.body.password, 10);
      const registerabout = new loginusers({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        number: req.body.number,
        password: newPassword,
        bio: req.body.bio,
        image: req.file.originalname,
      });

      await registerabout.save();
      res.status(201).json(registerabout);
      
      console.log("Your record save successfully");
    } catch (error) {
      console.log(error);
      res.status(422).json(error);
    }
  }
);

/*=======================================================*/
router.get("/gertusers/signin", async (req, res) => {

  try {
    const directv = await loginusers.find();
    res.status(201).json(directv);
  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});
/*===========================================================================*/
// delete about
router.delete("/signup/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await loginusers.findByIdAndDelete({ _id: id });
    
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});
/*=======================================================================*/
router.get("/getdata/signup/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getabout = await loginusers.findById({ _id: id });

    res.status(201).json(getabout);
  } catch (error) {
    res.status(422).json(error);
  }
});
/*================================================================*/
module.exports = router;
