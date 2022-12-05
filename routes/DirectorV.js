
const express = require("express");
const router = express.Router();
const aboutus = require("../models/about");
const multer = require("multer");
const direcvision = require("../models/director");

router.get("/getdata/directorv", async (req, res) => {
  
    try {
      const directv = await direcvision.find();
      res.status(201).json(directv);
    } catch (error) {
      res.status(422).json(error);
      console.log("This catch part work here");
    }
  });
// ================================================================

const storage = multer.diskStorage({
   
    destination: (req, file, callback) => {
       
      callback(null, "../client/public/uploads");
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });
  
  const upload = multer(
   
    { storage: storage }
    
    );
  
  router.post("/register/directorvison", upload.single("image"), async (req, res) => {
    try {
   
      const registerabout = new direcvision({
        name: req.body.name,
        text: req.body.text,
        image: req.file.originalname,
      });
      await registerabout.save();
      res.status(201).json(registerabout);
      console.log(registerabout);
      console.log("Your record save successfully");
    } catch (error) {
      console.log("This is catch block");
      res.status(422).json(error);
    }
  });
// =========================Update================================
// router.patch("/udate/directorVision/:id", async (req, res) => {
//   console.log("req.body.name");
  
  
// });

// ==========================================================
  module.exports = router;
