const port = 3000;
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
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
    helpers: {
      sortAble: (field, sort) => {
        const names = {
          default: "sort",
          asc: "tăng dần",
          desc: "giảm dần",
        };
        const types = {
          default: "desc",
          asc: "desc",
          desc: "asc",
        };
        var name = names[sort.type];
        var type = types[sort.type];
        // return sort.type;
        return ` <a href="?sort&column=name&type=${type}">${name}</a>`;
      },
    },
  })
);
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride("X-HTTP-Method-Override"));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
//* router init
router(app);
app.listen(port);
