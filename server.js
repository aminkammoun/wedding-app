const mongoose = require("mongoose");
const express = require("express");
const app = express();
const apiUser = require("./routes/user");
const apijob = require("./routes/addJob");


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "x-www-form-urlencoded,Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
mongoose
  .connect("mongodb+srv://Amine:amine22102439@cluster0.ojlma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
  })
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log("problem to connect to data base ", err);
  });

app.use(express.json());
app.use("/user", apiUser);
app.use("/job", apijob);
app.use(express.static("./uploads"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
