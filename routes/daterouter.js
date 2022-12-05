const express = require("express");
const router = express.Router();
const datesheets = require("../models/datesheet");
const csvtojson=require("csvtojson");
const multer = require("multer");
/*============================================================*/
router.get("/datesheet/getdata", async (req, res) => {
  console.log("datesheet request");
  try {
    const datesheetdata = await datesheets.find();
    res.status(201).json(datesheetdata);
    console.log(datesheetdata)
  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});
// =====================================================================



const storagefree = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./files/");
    },
    filename: (req, file, callback) => {
      callback(null, "myfileDatesheet.csv");
    },
  });
  
  const uploadfree = multer({ storage: storagefree });
router.post("/storeCsvFilesDateSheet/upload", uploadfree.single("photo"), async (req, res) => {
datesheets.collection.drop()
    try {
      csvtojson().fromFile("./files/myfileDatesheet.csv").then(csvData=>{
        datesheets .insertMany(csvData).then(function(){
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

/*===================================================================*/
module.exports = router;
