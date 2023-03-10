const courses = require("../models/Courses");
// const mongoose = require("mongoose");
class SiteController {
  index(req, res) {
    res.render("clients/news");
  }
  home(req, res) {
    courses
      .find({})
      .then((courses) => {
        courses = courses.map((course) => course.toObject());
        res.render("home", {
          courses: courses,
        });
      })
      .catch((err) => console.log(err));
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
