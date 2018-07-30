"use strick";

/**
 * 随机字符串
 * @param length 随机长度，默认16
 * @param charSet 随机字符，默认字母+数字
 */
exports.randomString = function randomString(length, charSet) {
  var result = [];
  length = length || 16;
  charSet =
    charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  while (length--) {
    result.push(charSet[Math.floor(Math.random() * charSet.length)]);
  }
  return result.join("");
};
