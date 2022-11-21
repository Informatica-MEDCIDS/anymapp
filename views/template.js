"use strict";

// views/template
import { html } from "html-express-js";
import { readFileSync } from "fs";
import logFactory from "debug";

const log = logFactory("express:view");

log("Initializing template...");

function content(data) {
  try {
    const content = readFileSync("public" + data.body, "utf8");
    log("Rendering %s ", data.body);
    return content;
  } catch (err) {
    log(err);
  }
}

export const view = (data, state) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${data.title}</title>
    </head>
    <body>
      ${content(data)}
    </body>
    <script src="${data.bundle}"></script>
  </html>
`;

log("Initializing template... done");
