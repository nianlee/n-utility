import test from "ava";
import util from "../lib";

test("random() should get zero when no arguments", t => {
  t.is(util.random(), 0);
});

test("random(max) should get number between 0 and max", t => {
  const numbers = [100, 1.5, 1000];
  numbers.forEach(num => {
    const result = util.random(num);
    t.true(result >= 0);
    t.true(result < num);
  });
});

test("random(min, max) should get number between min and max ", t => {
  const cases = [[1, 100], [-5, 10], [1000, 100000]];
  cases.forEach(numbers => {
    const result = util.random(numbers[0], numbers[1]);

    t.true(result >= numbers[0]);
    t.true(result < numbers[1]);
  });
});
