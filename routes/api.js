"use strict";

/**
 * Module dependencies.
 */

const express = require("express");
const api = express.Router();
var log = require("debug")("express:api");
var bunyan = require("bunyan");

var logger = bunyan.createLogger({
  name: "anymapp",
  serializers: { data: reqSerializer },
  streams: [
    {
      level: "info",
      stream: process.stdout, // log ERROR and above to stdout
    },
    {
      level: "error",
      path: "anymapp-error.log", // log INFO and above to a file
    },
  ],
});

var datalog = bunyan.createLogger({
  name: "anymapp",
  streams: [{ path: "anymapp-data.log" }], // log INFO and above to a file
});

log("Initializing API...");

// create an error with .status. we
// can then use the property in our
// custom error handler (Connect respects this prop as well)

function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

function reqSerializer(req) {
  return {
    method: req.method,
    url: req.originalUrl,
  };
}

// if we wanted to supply more than JSON, we could
// use something similar to the content-negotiation
// example.

api.use((req, res, next) => {
  log("Time: ", Date.now());
  logger.info({ data: req });
  next();
});

// here we validate the API key,
// by mounting this middleware to /api
// meaning only paths prefixed with "/api"
// will cause this middleware to be invoked

// var newdata = {
//   elementID: data.elementID,
//   eventInfo: {
//     cursor: data.eventInfo.cusor,
//     dragInfo: data.eventInfo.dragInfo,
//     item: data.eventInfo.item,
//     keyInfo: data.eventInfo.keyInfo,
//     pageX: data.eventInfo.pageX,
//     pageY: data.eventInfo.pageY,
//     srcElement: data.eventInfo.srcElement,
//     window: data.eventInfo.window
//   },
//   eventType: data.eventType,
//   path: data.path,
//   timeStamp: data.timeStamp
// }

api.post("/", function (req, res, next) {
  datalog.info({ event: req.body }, "logEvent");
  res.send({ response: "ok" }).end();
  // var key = req.query["api-key"];

  // req.logger.info({msg: "me"});

  // // key isn't present
  // if (!key) return next(error(400, "api key required"));

  // // key is invalid
  // if (apiKeys.indexOf(key) === -1) return next(error(401, "invalid api key"));

  // // all good, store req.key for route access
  // req.key = key;
  // next();
});

// map of valid api keys, typically mapped to
// account info with some sort of database like redis.
// api keys do _not_ serve as authentication, merely to
// track API usage or help prevent malicious behavior etc.

var apiKeys = ["foo", "bar", "baz"];

// these two objects will serve as our faux database

var repos = [
  { name: "express", url: "https://github.com/expressjs/express" },
  { name: "stylus", url: "https://github.com/learnboost/stylus" },
  { name: "cluster", url: "https://github.com/learnboost/cluster" },
];

var users = [{ name: "tobi" }, { name: "loki" }, { name: "jane" }];

var userRepos = {
  tobi: [repos[0], repos[1]],
  loki: [repos[1]],
  jane: [repos[2]],
};

// we now can assume the api key is valid,
// and simply expose the data

// example: http://localhost:3000/api/users/?api-key=foo
api.get("/users", function (req, res, next) {
  res.send(users);
});

// example: http://localhost:3000/api/repos/?api-key=foo
api.get("/repos", function (req, res, next) {
  res.send(repos);
});

// example: http://localhost:3000/api/user/tobi/repos/?api-key=foo
api.get("/user/:name/repos", function (req, res, next) {
  var name = req.params.name;
  var user = userRepos[name];

  if (user) res.send(user).end();
  else next();
});

// middleware with an arity of 4 are considered
// error handling middleware. When you next(err)
// it will be passed through the defined middleware
// in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
api.use((err, req, res, next) => {
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.status(err.status || 500);
  res.send({ error: err.message });
});

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
api.use(function (req, res) {
  res.status(404);
  res.send({ error: "Sorry, can't find that" });
});

log("Initializing API... done");

module.exports = api;
