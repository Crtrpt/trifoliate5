import { nameGen } from "../src/utils/nameGen";
test(" test nameGen", () => {
  var name = "name";
  nameGen(name);

  expect(name).toBe("name-1");
});
