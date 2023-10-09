var express = require('express');
var router = express.Router();
const { usercontroller } = require("../controller");

/* GET users listing. */

router.get("/", usercontroller.getuser);
router.post("/createUser", usercontroller.createuser);
module.exports = router;
