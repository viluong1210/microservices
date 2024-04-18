const AccessServices = require("../services/access.service");

class AccessControllers {
  async signUP(req, res, next) {
    try {
      const res = await AccessServices.signUp(req.body);
      return res.status(200).json(res);
    } catch (error) {}
  }
}

module.exports = new AccessControllers();
