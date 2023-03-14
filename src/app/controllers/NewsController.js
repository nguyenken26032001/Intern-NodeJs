class NewsController {
  //[GET] /news/
  index(req, res) {
    res.render("clients/news");
  }
  //[GET] /news/:slug
  newsDetail(req, res) {
    res.render("clients/newsDetail");
    //res.send("this is a news detail" + req.params.slug);
  }
}
module.exports = new NewsController();
