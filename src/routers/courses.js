const express = require("express");
const CoursesController = require("../app/controllers/CoursesController");
const router = express.Router();

router.get("/:slug", CoursesController.CourseDetail);

module.exports = router;
