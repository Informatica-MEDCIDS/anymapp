"use strict";

import express from "express";
import logFactory from "debug";

const log = logFactory("express:index");

log("Initializing Index...");

const index = express.Router();

index.get("/", (req, res) => {
  log("Redirecting root to index.html");
  res.redirect("/index.html#c=1");
});
index.get(/^(((?!index\w*\.html|resources).)*)(\.html)$/, (req, res) => {
  log("Match mockup file.");
  res.render("template", {
    title: "AnyMapp layer",
    bundle: "/anymapp.js",
    body: req.path,
  });
});

log("Initializing Index... done");

export default index;
