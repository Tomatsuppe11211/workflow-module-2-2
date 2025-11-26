//Mocking the localSturage manually

const storage = {}

global.localStorage = {
  setItem: (key, value) => (storage[key] = value),
  getItem: (key) => (storage[key])
}
//Results after mocking: test pass

import {
  describe,
  expect,
  it,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
} from "vitest";

describe("setting up two simle tests", () => {
  beforeEach(() => {
    console.log("preparing for testing");
  });

  afterEach(() => {
    console.log("Testing finished");
  });

  beforeAll(() => {
    console.log("mark befor all tests");
  });

  afterAll(() => {
    console.log("mark after all test");
  });

  it("Dummy test 1", () => {
    expect(1 + 1).toEqual(2);
  });

  it("Dummy test 2", () => {
    expect(2 + 2).toEqual(4);
  });
});

//Dummy test successfull :)

//using local storage without mocking
localStorage.setItem("testKey", "123");
expect(localStorage.getItem("testKey")).toBe("123");
//returns that localStorage is not defined.
