require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongooose = require("mongoose");
require("./db/conn");
const timetable = require("./models/timetableSchema");
const cors = require("cors");
const port = process.env.PORT || 8002;
const router = require("./routes/router");
const routerdatesheet = require("./routes/daterouter");
const routerregister = require("./routes/registeruser");
const routeraboutus = require("./routes/aboutus");
const freeroomss = require("./routes/freerooms");
const directorvison = require("./routes/DirectorV");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(routerdatesheet);
app.use(routerregister);
app.use(routeraboutus);
app.use(freeroomss);
app.use(directorvison);

app.listen(port, () => {
  console.log(`Server start at port: ${port}`);
});
