const newsRouter = require("./news");
const siteRouter = require("./site");
const CoursesRouter = require("./courses");

function router(app) {
  app.use("/news", newsRouter);
  app.use("/courses", CoursesRouter);
  app.use("/", siteRouter);
}
module.exports = router;
