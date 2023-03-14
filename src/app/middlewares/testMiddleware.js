const Islogin = function (req, res, next) {
  if (req.query.login == "true") {
    return next();
  }
  res.json({
    message: "Access denied",
  });
};
module.exports = Islogin;
