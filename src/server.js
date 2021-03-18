const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
var cors = require("cors");
var bodyparser = require("body-parser");

class App {
  constructor() {
    this.express = express();
    this.express.use(cors());
    this.express.use(bodyparser.json());
    this.express.use(bodyparser.urlencoded({ extended: true }));
    this.database();
    this.middlewares();
    this.routes();

    this.express.listen(3001, () =>
      console.log(`Sua API REST está funcionando na porta 3001 `)
    );
  }

  database() {
    const connectionParams = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    mongoose
      .connect(db.uri, connectionParams)
      .then(() => {
        console.log("Connected to database ");
      })
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
