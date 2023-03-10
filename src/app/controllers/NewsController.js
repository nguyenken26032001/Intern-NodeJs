class NewsController {
  index(req, res) {
    res.render("clients/news");
  }
  newsDetail(req, res) {
    res.render("clients/newsDetail");
    //res.send("this is a news detail" + req.params.slug);
  }
}
module.exports = new NewsController();
