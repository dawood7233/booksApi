const  userservices = require("../../services/userservices");
module.exports = {
  getuser: (req, res, next) => {
    res.send("respond with a resource");
    const data = userservices.getuser("get all users");
    res.send(data);
  },
  createuser: (req, res) => {
    res.send("to create user")
    console.log(req.body);
    const data = userservices.createuser(req.body);
    res.send(data);
  },
};