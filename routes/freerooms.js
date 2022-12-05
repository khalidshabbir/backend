const express = require("express");
const router = express.Router();
const multer = require("multer");
const freeroom = require("../models/freerooms");

const csvtojson=require("csvtojson");

const storagefree = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./files/");
    },
    filename: (req, file, callback) => {
      callback(null, "myfileRee.csv");
    },
  });
  
  const uploadfree = multer({ storage: storagefree });
  router.post("/storeCsvFilesFreeroom/upload", uploadfree.single("photo"), async (req, res) => {
//    console.log("okay")
freeroom.collection.drop()
    try {
      csvtojson().fromFile("./files/myfileRee.csv").then(csvData=>{
        console.log(csvData);
        console.log("okay")
        freeroom.insertMany(csvData).then(function(){
          console.log("Data inserted")
        res.status(201).json("Your data updated successfully");
         }).catch((error)=>{
          console.log(error)
         })
      })
      console.log("Your Record Save Successfully");
      res.status(201)
    } catch (error) {
      console.log("This is catch block freeroom");
      res.status(422).json(error);
    }
  });

// =======================================
router.get("/freeRooms/available", async (req, res) => {
  
  try {
    const directv = await freeroom.find();
    res.status(201).json(directv);
  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});




module.exports = router;
