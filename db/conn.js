const mongoose = require("mongoose");
const DB =
  "mongodb://khalidshabbir08:vG8OJNezGl1SkRoj@cluster0-shard-00-00.ts39v.mongodb.net:27017,cluster0-shard-00-01.ts39v.mongodb.net:27017,cluster0-shard-00-02.ts39v.mongodb.net:27017/?ssl=true&replicaSet=atlas-hvhw03-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));

//   "mongodb://khalidshabbir08:vG8OJNezGl1SkRoj@cluster0-shard-00-00.ts39v.mongodb.net:27017,cluster0-shard-00-01.ts39v.mongodb.net:27017,cluster0-shard-00-02.ts39v.mongodb.net:27017/?ssl=true&replicaSet=atlas-hvhw03-shard-0&authSource=admin&retryWrites=true&w=majority";
// mongodb://localhost:27017/timetable
