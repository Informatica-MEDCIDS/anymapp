"use strict";

import express from "express";
import logFactory from "debug";

const log = logFactory("express:index");

log("Initializing Index...");

const index = express.Router();

// index.get("*", (req, res, next) => {
//   log(req.sessionID);
//   next();
// });

// Default root route gets redirected to index.html
index.get("/", (req, res) => {
  log("Redirecting root to index.html");
  res.redirect("/index.html#c=1");
});

// All html files, except index.html and resources, are rendered with template
index.get(/^(((?!index\w*\.html|resources).)*)(\.html)$/, (req, res) => {
  log("Match mockup file.");
  // Initialize the session so it get stored. This is only done when opening a mockup file.
  if (req.session) {
    if (req.session.views) {
      req.session.views++;
    } else {
      req.session.views = 1;
    }
  }
  res.render("template", {
    title: "AnyMapp layer",
    bundle: "/anymapp.js",
    body: req.path,
  });
});

log("Initializing Index... done");

export default index;
