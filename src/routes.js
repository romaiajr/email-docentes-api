const express = require("express");

const routes = express.Router();
const DocenteController = require("./app/controller/DocenteController");
const NotFoundController = require("./app/controller/NotFoundController");
const WrongEmailController = require("./app/controller/WrongEmailController");

routes.post("/docentes-get", DocenteController.index);
routes.post("/docentes-add", DocenteController.store);

routes.post("/email-errado-add", WrongEmailController.store);

routes.post("/nao-encontrado-get", NotFoundController.index);
routes.post("/nao-encontrado-add", NotFoundController.store);

module.exports = routes;
