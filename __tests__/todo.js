
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test suite", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "todo arun",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("Adding the new todo", () => {
    const todoLength = all.length;
    add({
      title: "todo arun",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLength + 1);
  });

  //markAsComplete function
  test("Mark the an todo as complete.", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test(" todos Overdue.", () => {
    add({
      title: "overdue Todo",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("Due_today todos", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("todos Due  later", () => {
    add({
      title: "Test the due later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});