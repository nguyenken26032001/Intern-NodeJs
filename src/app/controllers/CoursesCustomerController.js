const Courses = require("../models/Courses");
class CoursersCustomerController {
  listCourses(req, res) {
    res.send("okok");
  }
}
module.exports = new CoursersCustomerController();
