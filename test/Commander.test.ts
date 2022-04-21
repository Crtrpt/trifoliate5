import { Commander } from "../src/tools/commander";
test("Start Commander  test", () => {
  var cmd = new Commander();


  var record:any[] = [];

  cmd.exec(1, (p:any) => {
    record.push(p)
  }, (p:any) => {
    record.pop();
  })

  cmd.undo();
  
  expect(record.length).toBe(0);

  cmd.redo();
  expect(record.length).toBe(1);
});
