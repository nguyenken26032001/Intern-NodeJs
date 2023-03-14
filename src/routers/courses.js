const express = require("express");
const CoursesController = require("../app/controllers/CoursesController");
const router = express.Router();
const Islogin = require("../app/middlewares/testMiddleware");

router.get("/Create", Islogin, CoursesController.CreateCourse);
router.post("/Create", CoursesController.StoreCourse);
router.get("/:slug", CoursesController.CourseDetail);
router.put("/:id", CoursesController.UpdateCourse);
router.delete("/:id", CoursesController.DeleteCourse);

module.exports = router;
