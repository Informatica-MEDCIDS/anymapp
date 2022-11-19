const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const session = require("express-session");
const log = require("debug")("express:application");
const http_logger = require("morgan");
const helmet = require("helmet");

log("Starting Express...");

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const apiRouter = require("./routes/api");

const app = express();

// View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Loggers
app.use(http_logger("dev"));

// Performance
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Security
// app.use(helmet());
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "sa3Cur3",
    name: "sessionId",
  })
);
app.use(cookieParser());

// Routes
// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRouter);

// main escape routes
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

log("Starting Express... done");

module.exports = app;
