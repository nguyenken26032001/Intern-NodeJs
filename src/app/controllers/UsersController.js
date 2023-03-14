const courses = require("../models/Courses");

class UsersController {
  async listCourse(req, res) {
    var listKhoaHoc = courses.find();
    // res.json(res.locals.sort);
    if (req.query.hasOwnProperty("sort")) {
      listKhoaHoc = listKhoaHoc.sort({
        [req.query.column]: req.query.type,
      });
    }
    const Courses = await listKhoaHoc;
    const listCourses = Courses.map((course) => course.toObject());
    res.render("users/ListCourses", { listCourses });
  }
  async courseDetail(req, res) {
    const course = await courses.findOne({ _id: req.params.id }).exec();
    const khoaHoc = course.toJSON();
    res.render("users/courseDetail", { khoaHoc });
  }
}
module.exports = new UsersController();
