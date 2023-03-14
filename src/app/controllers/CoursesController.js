const { json, response } = require("express");
const courses = require("../models/Courses");

class CoursesController {
  //[GET] /Courses/:slug
  async CourseDetail(req, res) {
    var course = await courses.findOne({ slug: req.params.slug }).exec();
    const khoaHoc = course.toJSON();
    return res.render("clients/courseDetail", { khoaHoc });
  }
  CreateCourse(req, res) {
    res.render("clients/createCourse");
  }
  //[POST] /Courses/Create
  async StoreCourse(req, res) {
    var formdata = req.body;
    const course = new courses(formdata);
    await course.save();
    res.redirect("/");
  }
  //[PUT] /Courses/:id
  async UpdateCourse(req, res) {
    await courses.updateOne({ _id: req.params.id }, req.body);
    res.redirect("/User/List-Courses");
  }
  //[DELETE] /Courses/:id
  async DeleteCourse(req, res) {
    await courses.deleteOne({ _id: req.params.id });
    res.redirect("back");
  }
}
module.exports = new CoursesController();
