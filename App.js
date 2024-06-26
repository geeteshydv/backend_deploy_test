const userRouter = require("./routes/routes.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 1234;
const todoSchema = require("./models/todoSchema.js");
const cors = require("cors");
const { connectMongoDB } = require("./connection.js");
app.use(cors());

//  to-do is an object with title , description and ID
app.use(bodyParser.json());

connectMongoDB("mongodb://localhost:27017/todo-list-database");

// app.use("/todos", userRouter);
app.get(
  "backend-deploy-test-8k9w6yjx4-moreofgeet25s-projects.vercel",
  (req, res) => {
    res.send("Hello World");
  }
);
app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
