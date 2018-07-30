import test from "ava";
import util from "../lib";

test("md5() should return md5 string", t => {
  t.is(util.md5("nian"), "d5e1c22f261c7dd151448e6b86fac8bf");
  t.is(util.md5("念"), "8d32e5f54ac8bc75d65d65452a067517");
});

test("sha1() should return sha1 string", t => {
  t.is(util.sha1("nian"), "22683fb1d93c5d687e941e3d74ff0db0477aae54");
  t.is(util.sha1("念"), "13d060362fff8695bac069b881b8558dc9a43866");
});

test("sha256() should return sha256 string", t => {
  t.is(
    util.sha256("nian"),
    "9850fdca22f422d915e2f282285378719ecea4770c7206b6cc37cd9e3d4968f3"
  );

  t.is(
    util.sha256("念"),
    "99b5940c6d9474e34f68e96bfe090ffc16f38f4873c9e760fd7bbfa4c2ffb283"
  );
});

test("base64encode(), base64decode() should encode and decode", t => {
  const text = util.base64encode("你好 hello world", true);
  const buf = util.base64decode(text, true, "buffer");

  t.true(Buffer.isBuffer(buf));
  t.is(buf.toString(), util.base64decode(text, true));
  t.is(buf.toString(), util.base64decode(text, true, "utf8"));
});
