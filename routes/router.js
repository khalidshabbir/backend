const express = require("express");
const router = express.Router();
const timetable = require("../models/timetableSchema");
const Lectures = require("../models/LectureSchema");
const aboutus = require("../models/about");
const director = require("../models/director");
const feedback = require("../models/feedback");
const multer = require("multer");
const aboutusp = require("../models/aboutusparagraph");
const lectureRecords = require("../models/lectureRecords");
const contacts = require("../models/contacts");
const csvtojson=require("csvtojson");
/*==================Contcts==============================================*/
router.post("/register/contacts", async (req, res) => {


  const { phone, email, address } = req.body;

  try {
    const addcontact = new contacts({
      phone,
      email,
      address,
    });
    await addcontact.save();
    res.status(201).json(addcontact);

    console.log("Your record save successfully");
  } catch (error) {
    console.log(error);
    // res.status(422).json(error);
  }
});

router.get("/getdata/contacts", async (req, res) => {
  try {
    const contact = await contacts.find();
    res.status(201).json(contact);
  } catch (error) {
    res.status(422).json(error);
   
  }
});
router.patch("/updatcontact/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await contacts.findByIdAndUpdate(id, req.body, {
      new: true,
    });


    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});
/*=======================Timetable register Rest Api======================================*/
router.post("/register", async (req, res) => {

  const { Subjects, Classess, Subject1, Lecture, Day, Teacher, Room } =
    req.body;

  try {
    const adduser = new timetable({
      Subjects,
      Classess,
      Subject1,
      Lecture,
      Day,
      Teacher,
      Room,
    });
    await adduser.save();
    res.status(201).json(adduser);

    console.log("Your record save successfully");
  } catch (error) {
    console.log("This is catch block");
    // res.status(422).json(error);
  }
});
/*==========================================================*/

router.post("/register/directorv", async (req, res) => {
 
  const { text, image } = req.body;

  try {
    const directorvision = new director({
      text,
      image,
    });
    await directorvision.save();
    res.status(201).json(directorvision);

    console.log("Your record save successfully");
  } catch (error) {
    console.log("This is catch block");
    // res.status(422).json(error);
  }
});

/*=====================================================*/

router.get("/getdata", async (req, res) => {

  try {
    const timetabledata = await timetable.find();
    res.status(201).json(timetabledata);

  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});
/*=======================================================*/

/*=============================================================*/
router.get("/getdata/about/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const getabout = await aboutus.findById({ _id: id });

    res.status(201).json(getabout);
  } catch (error) {
    res.status(422).json(error);
  }
});
/*================================================================*/

/*=======================================================*/

/*=======================================================================*/
router.patch("/updatedirector/:id", async (req, res) => {
  try {
    const { id } = req.params;


    const updateduser = await director.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});
/*=========================Feeedback=================================*/

router.post("/register/feedback", async (req, res) => {

  const { Name, Email, Message } = req.body;

  try {
    const feedbackbody = new feedback({
      Name,
      Email,
      Message,
    });
    await feedbackbody.save();
    res.status(201).json(feedbackbody);

    console.log("Your record save successfully");
  } catch (error) {
    console.log("This is catch block");
    res.status(422).json(error);
  }
});
/*=======================================================*/
router.get("/getdata/feedback", async (req, res) => {
  console.log("get api work");
  try {
    const feedbackdataf = await feedback.find();
    res.status(201).json(feedbackdataf);
  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});

/*=====================================================*/

/*=====================================================*/

// delete user
router.delete("/feedback/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await feedback.findByIdAndDelete({ _id: id });
    
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

/*==========================================================*/

/*==========================Report Lectures here=================================*/
router.post("/record/lectures", async (req, res) => {

  const {
    Subjects,
    Classess,
    Lecture,
    Day,
    Teacher,
    Room,
    Option,
    Comment,
    Report,
    Date,
    id,
    Status,
  } = req.body;

  const datas = {
    Subjects: req.body.Subjects,
    Classess: req.body.Classess,
    Lecture: req.body.Lecture,
    Day: req.body.Day,
    Teacher: req.body.Teacher,
    Room: req.body.Room,
    Status: "1",
  };
  try {
    const lectureRecord = new lectureRecords({
      Subjects,
      Classess,
      Lecture,
      Day,
      Teacher,
      Room,
      Option,
      Comment,
      Report,
      Date,
      id,
      Status,
    });
    await lectureRecord.save();
    const updateduser = await Lectures.findByIdAndUpdate(id, datas, {
      new: true,
    });

    res.status(201).json(lectureRecord);
    console.log("Your record save successfully");
  } catch (error) {
    console.log("This is catch block");
    res.status(422).json(error);
  }
});
/*============================================================================*/
router.get("/getrecord/lectures", async (req, res) => {

  try {
    const lecturedata = await lectureRecords.find();
    res.status(201).json(lecturedata);

  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});

/*==========================Report Lectures End=================================*/

router.get("/lecture/data", async (req, res) => {

  try {
    const lecturedata = await Lectures.find();
    res.status(201).json(lecturedata);

  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});

router.post("/register/lecture/data", async (req, res) => {
 

  const { Subjects, Classess, Subject1, Lecture, Day, Teacher, Room, Status } =
    req.body;

  try {
    const adduser = new Lectures({
      Subjects,
      Classess,
      Subject1,
      Lecture,
      Day,
      Teacher,
      Room,
      Status,
    });
    await adduser.save();
    res.status(201).json(adduser);


    console.log("Your record save successfully record");
  } catch (error) {
    console.log("This is catch block");
  }
});
/*===============================================*/
router.put("/update/lectures/status", async (req, res) => {

  try {
    const updateall = await Lectures.updateMany(
      { Status: true },
      { $set: { Status: false } }
    );  
    res.status(201).json("ok");
  } catch (error) {
    res.status(422).json(error);
  }
});
/*=========================Delete Record data==============================================*/
// delete user
router.delete("/record/lecturesdelete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await lectureRecords.findByIdAndDelete({ _id: id });

    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// =========================Update status by ID===============================================
router.patch("/updatestatus/:id", async (req, res) => {
  try {
    const { id } = req.params;
  
    const updateduser = await Lectures.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});
// ===================================================================
router.get("/lecturerocord/data", async (req, res) => {

  try {
    const lecturedata = await lectureRecords.find();
    res.status(201).json(lecturedata);
    
  } catch (error) {
    res.status(422).json(error);
    console.log("This catch part work here");
  }
});
// ------------------------------------------------------------------------
router.patch("/updatestatus/recordvalues/:id", async (req, res) => {
  try {
    const { id } = req.params;
  
    const updateduser = await lectureRecords.findByIdAndUpdate(id, req.body, {
      new: true,
    });
   
    res.status(201).json(updateduser);
  } catch (error) {
    res.status(422).json(error);
  }
});
// =====================================================================


// ===================================================================


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./files/");
  },
  filename: (req, file, callback) => {
    callback(null, "myfile.csv");
  },
});

const upload = multer({ storage: storage });
router.post("/storeCsvFiles/upload", upload.single("photo"), async (req, res) => {
 
  try {
    //  Lectures.collection.drop()
    csvtojson().fromFile("./files/myfile.csv").then(csvData=>{
 
   
      Lectures.insertMany(csvData).then(function(){
  
      res.status(201).json("Your data updated successfully");
       }).catch((error)=>{
        console.log(error)
       })
       timetable.insertMany(csvData).then(function(){
     
      res.status(201).json("Your data updated successfully");
       }).catch((error)=>{
        console.log(error)
       })
    })
    console.log("Your record save successfully");
    res.status(201)
  } catch (error) {
    console.log("This is catch block");
    res.status(422).json(error);
  }
});
// ===============================Free Roooms============================================



/*===========================================================================*/
module.exports = router;
