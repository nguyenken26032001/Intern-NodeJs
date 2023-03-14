const express = require("express");
const UsersController = require("../app/controllers/UsersController");
const sortMiddleware = require("../app/middlewares/sortMiddleware");
const router = express.Router();
router.get("/List-Courses", sortMiddleware, UsersController.listCourse);
router.get("/:id/edit", UsersController.courseDetail);
module.exports = router;
