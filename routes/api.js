"use strict";

/**
 * Module dependencies.
 */

import express from "express";
import logFactory from "debug";
import bunyan from "bunyan";
import browser from "detect-browser";
import { MongoClient } from "mongodb";

const log = logFactory("express:api");
// Enable command monitoring for debugging

log("Initializing API...");

const api = express.Router();

// Loggers
function reqSerializer(req) {
  return {
    method: req.method,
    url: req.originalUrl,
  };
}

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
      path: "/var/log/anymapp-error.log", // log INFO and above to a file
    },
  ],
});

var datalog = bunyan.createLogger({
  name: "anymapp",
  streams: [{ path: "/var/log/anymapp-data.log" }], // log INFO and above to a file
});

// Loggers - end

// if we wanted to supply more than JSON, we could
// use something similar to the content-negotiation
// example.

// if (api.get("env") === "development") {
//   api.use((req, res, next) => {
//     log("Time: ", Date.now());
//     logger.info({ data: req });
//     next();
//   });
// }

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

// api keys do _not_ serve as authentication, merely to
// track API usage or help prevent malicious behavior etc.
var apiKeys = ["foo", "bar", "baz"];

function checkApiKey(req, res, next) {
  var key = req.query["api-key"];
  // key isn't present
  if (!key) {
    return next(error(400, "api key required"));
  }
  // key is invalid
  if (apiKeys.indexOf(key) === -1) {
    return next(error(401, "invalid api key"));
  }
  // all good, store req.key for route access
  req.key = key;
  next();
}

api.all("(.*)", checkApiKey);

/// MongoDB
// const client = new MongoClient(
//   "mongodb://root:example@localhost:27017/anymapp",
//   {
//     monitorCommands: true,
//   }
// );

// async function run(req) {
//   try {
//     client.connect();
//     const database = client.db("anymapp");
//     const haiku = database.collection("main");
//     // create a document to insert
//     const doc = {
//       title: "Record of a Shriveled Datum",
//       content: "No bytes, no problem. Just insert a document, in MongoDB",
//     };
//     const result = await haiku.insertOne(req.body);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);
//   } finally {
//     await client.close();
//   }
// }
/// MongoDB - end

function storeMessage(req, res, next) {
  if (req.session) {
    var userAgent = browser.parseUserAgent(req.headers["user-agent"]);
    log("Session ID:", req.sessionID);
    datalog.info(
      { session: req.session.id, userAgent: userAgent, event: req.body },
      "logEvent"
    );
  } else {
    log("Session ID: not defined");
    datalog.info({ session: "no-cookie-for-you", event: req.body }, "logEvent");
  }

  // run(req).catch(console.dir);/// MongoDB

  res.send({ response: "ok" }).end();
}

function endSession(req, res, next) {
  req.session.destroy(function (err) {
    log("destroy session ", err);
  });

  res.send({ response: "ok" }).end();
}

api.put("/v1", storeMessage);

api.put("/v1/logout", endSession);

// create an error with .status. we
// can then use the property in our
// custom error handler (Connect respects this prop as well)
function error(status, msg) {
  var err = new Error(msg);
  err.status = status;
  return err;
}

// middleware with an arity of 4 are considered
// error handling middleware. When you next(err)
// it will be passed through the defined middleware
// in order, but ONLY those with an arity of 4, ignoring
// regular middleware.
api.use((err, req, res, next) => {
  // whatever you want here, feel free to populate
  // properties on `err` to treat it differently in here.
  res.status(err.status || 500);
  res.send({ error: err.message }).end();
});

// our custom JSON 404 middleware. Since it's placed last
// it will be the last middleware called, if all others
// invoke next() and do not respond.
api.use((req, res) => {
  res.status(404);
  res.send({ error: "Sorry, can't find that" }).end();
});

log("Initializing API... done");

export default api;
