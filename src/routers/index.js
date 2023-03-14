const newsRouter = require("./news");
const siteRouter = require("./site");
const CoursesRouter = require("./courses");
const userRouter = require("./users");
function router(app) {
  app.use("/User", userRouter);
  app.use("/news", newsRouter);
  app.use("/Courses", CoursesRouter);
  app.use("/", siteRouter);
}
module.exports = router;
