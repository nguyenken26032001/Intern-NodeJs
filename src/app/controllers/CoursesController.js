const courses = require("../models/Courses");
class CoursesController {
  CourseDetail(req, res) {
    courses.findOne({ slug: req.params.slug }).then((courses) => {
      res.render("clients/courseDetail", { courses });
    });
  }
}
module.exports = new CoursesController();
