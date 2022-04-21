import { Commander } from "../src/tools/commander";
test("Start Commander  test", () => {
  var cmd = new Commander();
  var record: any[] = [];

  cmd.exec(
    1,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );

  cmd.undo();

  expect(record.length).toBe(0);

  cmd.redo();
  expect(record.length).toBe(1);

  cmd.undo();
  cmd.undo();

  expect(record.length).toBe(0);

  cmd.exec(
    1,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );
  cmd.exec(
    2,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );
  cmd.exec(
    3,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );
  cmd.exec(
    4,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );
  cmd.exec(
    5,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );
  cmd.exec(
    6,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );
  cmd.exec(
    7,
    (p: any) => {
      record.push(p);
    },
    (p: any) => {
      record.pop();
    }
  );
  expect(record.length).toBe(7);

  cmd.undo();
  cmd.redo();
  cmd.redo();
  cmd.redo();
  expect(cmd.cursor).toBe(6);
  expect(cmd.commandList.length).toBe(6);

  expect(record[5]).toBe(6);
});
