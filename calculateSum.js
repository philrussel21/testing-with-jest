function calculateSum(inputArr) {
  let total = 0

  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    total += element
  }

  return total
}
// console.log(calculateSum([1, 2]))
module.exports = { calculateSum }