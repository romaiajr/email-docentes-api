const NotFound = require("../model/NotFoundTeacher");

class NotFoundController {
  async store(req, res) {
    const data = await NotFound.create(req.body);
    return res.json(data);
  }
  async index(req, res) {
    const data = await NotFound.find();
    return res.json(data);
  }
}

module.exports = new NotFoundController();
