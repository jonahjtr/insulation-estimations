var express = require("express");
var router = express.Router();

/* /users */
router.get("/", function (req, res, next) {
  res.send("Welcome to the AUTH endpoint!");
});

module.exports = router;
