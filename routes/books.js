var express = require('express');
const{
 getbooks,
 addbook,
 updatebook,
 deletebook,
}  =require("../../secnd-express-app/controller/bookscontroller");
var router = express.Router();

router.get("/", getbooks);
router.post("/addbook", addbook);
router.put("/updatebook/:id", updatebook);
router.delete("/deletebook/:id", deletebook);
module.exports = router;