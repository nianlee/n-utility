import test from "ava";
import util from "../lib";

test("randomString() should get random string by default", t => {
  t.regex(util.randomString(), /^[0-9a-zA-Z]{16}$/);
});

test("randomString(len, charset) should get number random string with 10 length", t => {
  t.regex(util.randomString(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), /^\d{10}$/);
});
