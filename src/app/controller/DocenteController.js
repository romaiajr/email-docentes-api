const Docente = require("../model/Docente");

class DocenteController {
  async store(req, res) {
    const data = await Docente.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await Docente.find();
    console.log(data);
    return res.json(data);
  }
  //   async remove(req, res) {
  //     const data = await Docente.deleteOne({ _id: req.body.data });
  //     return res.json(data);
  //   }
}

module.exports = new DocenteController();
