const port = 3000;
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const router = require("./routers/index");
const db = require("./config/db/index");
app.use(express.static(path.join(__dirname, "public")));
//* connect database
db.connect();
//* middleware
app.use(express.urlencoded());
app.use(express.json());
//* http loger
app.use(morgan("combined"));
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//* router init
router(app);

app.listen(port);
