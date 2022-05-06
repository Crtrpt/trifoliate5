import { nameGen } from "../src/utils/nameGen";
test(" test nameGen", () => {
  var name = "name";
  expect(nameGen(name)).toBe("name-1");
});
