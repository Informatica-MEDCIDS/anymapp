"use strict";

import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import compression from "compression";
import session from "express-session";
import favicon from "serve-favicon";
import logFactory from "debug";
import http_logger from "morgan";
import helmet from "helmet";
import htmlExpress from "html-express-js";

const log = logFactory("express:application");

log("Starting Express...");

const app = express();
const dirname__ = "/" + path.dirname(import.meta.url.substring(8));
app.use(favicon(path.join(dirname__, "public", "favicon.ico")));

app.set("title", "AnyMapp");

// dev
if (app.get("env") === "development") {
  app.enable("compileDebug");
  app.disable("view cache");
  app.use(http_logger("dev"));
}

import indexRouter from "./routes/index.js";
import apiRouter from "./routes/api.js";

// View engine
app.engine(
  "js",
  htmlExpress({
    includesDir: "includes", // where all includes reside
  })
);
app.set("views", path.join(dirname__, "views"));
app.set("view engine", "js");

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
app.use("/", indexRouter);
app.use("/api", apiRouter);
app.use(express.static(path.join(dirname__, "public")));

// error handler
app.use((err, req, res, next) => {
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ error: err.message }).end();
});

app.use((req, res) => {
  res.status(404);
  res.send({ error: "Sorry, can't find that" }).end();
});

log("Starting Express... done");

export default app;
