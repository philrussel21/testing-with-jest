const { repeatMessage } = require('../app.js');

test("Name for an example test set", () => {
  expect("this is a truthy string").toBeTruthy();
})

test("functionality", () => {
  expect(repeatMessage('hello', 3)).toEqual('hellohellohello');
})