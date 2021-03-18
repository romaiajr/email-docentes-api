const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
/**
 *Database Setup
 */
mongoose
  .connect(process.env.VUE_APP_MONGO_URL || db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));
app.listen(process.env.PORT || 3001, () =>
  console.log(`Sua API REST está funcionando na porta 3001 `)
);
