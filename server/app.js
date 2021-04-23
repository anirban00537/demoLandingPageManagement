const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const customercontact = require("./routes/customerContact.js");
const auth = require("./routes/auth.js");
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: false }));

app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected Successfully");
    app.use("/", auth);
    app.use("/customercontact", customercontact);
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(PORT, () => {
  console.log("Server running successfully on localhost:" + PORT);
});

mongoose.set("useFindAndModify", false);
