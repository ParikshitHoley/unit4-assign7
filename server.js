const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const batchController = require("./controllers/batch.controller");
const evaluationController = require("./controllers/evaluation.collection");
const studentController = require("./controllers/student.controller");
const submissiobController = require("./controllers/submission.controller");

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/batch", batchController);

app.use("/evaluation", evaluationController);

app.use("/students", studentController);

app.use("/submission", submissiobController);

app.listen(8090, async () => {
  try {
    await connect();
    console.log(`Port is working`);
  } catch (e) {
    console.log("e:", e.message);
  }
});
