const express = require("express");

const routes = express.Router();
const DocenteController = require("./app/controller/DocenteController");

//ROTAS ARTIGOS
routes.post("/docentes-get", DocenteController.index);
routes.post("/docentes-add", DocenteController.store);
// routes.post("/artigos-add", ArtigoController.store);
// routes.post("/artigos-remove", ArtigoController.remove);

module.exports = routes;
