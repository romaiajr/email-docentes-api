const WrongEmail = require("../model/WrongEmail");

class WrongEmailController {
  async store(req, res) {
    const data = await WrongEmail.create(req.body);
    return res.json(data);
  }
}

module.exports = new WrongEmailController();
