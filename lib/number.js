"use strict";

/**
 * Produces a random integer between the inclusive `lower` and `upper` bounds.
 *
 * @param {Number} lower The lower bound.
 * @param {Number} upper The upper bound.
 * @return {Number} Returns the random number.
 */
exports.random = function random(lower, upper) {
  if (lower === undefined && upper === undefined) {
    return 0;
  }
  if (upper === undefined) {
    upper = lower;
    lower = 0;
  }
  var temp;
  if (lower > upper) {
    temp = lower;
    lower = upper;
    upper = temp;
  }
  return Math.floor(lower + Math.random() * (upper - lower));
};
