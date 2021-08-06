const express = require("express");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

const reportControllers = require("../controllers/reports");

router.post("/add-report", isAuth, reportControllers.postAddReport);
router.get("/get-report", isAuth, reportControllers.getReport);

module.exports = router;
