const express = require("express");
const router = express.Router();
const aboutus = require("../models/about");
const multer = require("multer");
const aboutusp = require("../models/aboutusparagraph");
/*============================================================*/
router.get("/getdata/about", async (req, res) => {
    try {
      const about = await aboutus.find();
      
      res.status(201).json(about);
    } catch (error) {
      res.status(422).json();
      console.log("This catch part work here");
    }
  });
// ==============================================================
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "../client/public/uploads");
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  router.post("/register/about", upload.single("image"), async (req, res) => {
    try {
      console.log(req.name);
      const registerabout = new aboutus({
        name: req.body.name,
        profession: req.body.profession,
        position: req.body.position,
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
//   ====================update values of table=======================================
router.patch("/updataboutus/:id", async (req, res) => {
  console.log("okay it is working")
    try {
      const { id } = req.params;
      console.log(req.body);
      console.log(id)
  
      const updateduser = await aboutus.findByIdAndUpdate(id, req.body, {
        new: true,
      });
  
      console.log(updateduser);
      res.status(201).json(updateduser);
    } catch (error) {
      res.status(422).json(error);
    }
  });
  // ===================================================================
  router.delete("/about/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletuser = await aboutus.findByIdAndDelete({ _id: id });
      console.log(deletuser);
      res.status(201).json(deletuser);
    } catch (error) {
      res.status(422).json(error);
    }
  });
  // ================================================================
  router.get("/getdata/aboutusparagraph", async (req, res) => {
    try {
      const about = await aboutusp.find();
      res.status(201).json(about);
    } catch (error) {
      res.status(422).json(error);
      console.log("This catch part work here");
    }
  });
  // =====================================================

  router.post("/save/aboutusp", async (req, res) => {
     const des=req.body.description
    try {
      const adduser = new aboutusp({
        description:des
      });
      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
      console.log("Your record save successfully");
    } catch (error) {
      console.log("This is catch block");
      // res.status(422).json(error);
    }
  });
  // ==============================Update descrtiopn=====================================
  // router.patch("/updataboutusdesc/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     console.log("id", id);
  
  //     const updateduser = await aboutusp.findByIdAndUpdate(id, req.body, {
  //       new: true,
  //     });
  
  //     console.log(updateduser);
  //     res.status(201).json(updateduser);
  //   } catch (error) {
  //     res.status(422).json(error);
  //   }
  // });
  const storages = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "../client/public/uploads");
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    },
  });
  
  const uploads = multer({ storage: storages });
  
  router.post("/updataboutusValues",uploads.single('image'),function(req,res,next){

    console.log(req.body)
    //  userModel.findById(id,function(err,data){
 
    //   data.image=profilePic?profilePic:data.image;
     
    //     data.save()
    //       .then(doc=>{
    //          res.status(201).json({
    //              message:"Profile Image Updated Successfully",
    //              results:doc
    //          });
    //       })
    //       .catch(err=>{
    //           res.json(err);
    //       })
         
    //  });
 
 });



/*===================================================================*/
module.exports = router;
