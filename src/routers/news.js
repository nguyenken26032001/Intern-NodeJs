const express = require("express");
const NewsController = require("../app/controllers/NewsController");
const router = express.Router();

router.get("/:slug", NewsController.newsDetail);
router.get("/", NewsController.index);

module.exports = router;
