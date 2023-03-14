module.exports = function (req, res, next) {
  const AllElementsAcceptSort = ["asc", "desc"];
  res.locals.sort = {
    enable: false,
    type: "default",
  };
  if (req.query.hasOwnProperty("sort")) {
    res.locals.sort.enable = true;
    res.locals.sort.type = req.query.type;
    res.locals.sort.column = req.query.column;
  }
  next();
};
