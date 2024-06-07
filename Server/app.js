const express = require("express");
const app = express();
const connectDatabase = require("./config/database.js");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { main } = require("./operation/dynamic.js");
const boxcontroller = require("./controller/boxcontroller.js");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
dotenv.config({ path: "config/.env" });
connectDatabase();

main().then((result) => {
  // console.log(result);
});

app.post("/addbox", boxcontroller.addBox); // Add a new box to the database
app.get("/getbox", boxcontroller.getBox); // Get all the boxes from the database
app.get("/getresult", boxcontroller.getResult); // Get the result from the database
app.put("/updatebox/:id", boxcontroller.updateBox); // Update the container number of the box
app.delete("/deletebox/:id", boxcontroller.deleteBox); // Delete a box from the database
app.post("/addlog", boxcontroller.addLog); // Add a new log to the database
app.get("/getlog", boxcontroller.getLog); // Get all the logs from the database
app.delete("/deletebox/:id", boxcontroller.deleteBox); // Delete a box from the database
// console.log(dynamic.main().result);
console.log(`Server is running on port ${process.env.PORT}`);
app.listen(process.env.PORT, () => {});
