
const { calculateSum } = require('../calculateSum.js');

// Function named calculateSum

describe('calculate input functionality', () => {
  test('should only accept an array as input args', () => {
    expect(() => {
      calculateSum([1, 2, 3, 4])
    }).not.toThrow();

    // expect(() => {
    //   calculateSum('hello', 'world')
    // }).toThrow();

    // expect(() => {
    //   calculateSum(["1", 2, "3", 4])
    // }).toThrow("Should not accept string type input")

  })

  // test('should only generate numbers as output', () => {
  //   // expect(() => {
  //   //   calculateSum([1, 2, 3, 4, 5])
  //   // }).toEqual(15);
  //   expect(calculateSum([1, 2, 3, 4, 5]).toEqual(15))
  //   expect(calculateSum([1.5, 2.5, 3.5]).toEqual(7.5))
  // })
})