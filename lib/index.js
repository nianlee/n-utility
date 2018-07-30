"use strict";

var copy = require("copy-to");

copy(require("./crypto"))
  .and(require("./number"))
  .and(require("./string"))
  .to(module.exports);
