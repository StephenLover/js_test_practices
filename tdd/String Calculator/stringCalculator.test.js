// 1.Create a simple String calculator with a method signature:
const stringCalculator = require('./stringCalculator');

describe('stringCalculator solution', () => {
  const checkResult = (expression, result) => {
    // replace "\n" to "\\n" fix the test description issue'
    test(`${expression.replace(/\n/g,"\\n")} should return ${result}`, () => {
      expect(stringCalculator.add(expression)).toBe(result)
    })
  }

  describe('basic functionality', () => {
    checkResult('0', 0)
    checkResult('42', 42)
  })

  describe('comma-separator', () => {
    checkResult('1,2', 3)
    checkResult('1,2,3,4', 10)
    // 2. Allow the Add method to handle an unknown amount of numbers
    checkResult('1,3,4,5,6,7,7,7,7,8', 55)
  })

  // 3. Allow the Add method to handle new lines between numbers (instead of commas).
  // a. the following input is ok: “1\n2,3” (will equal 6)
  // b. the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)
  describe('newline-separtor', () => {
    checkResult("1\n2", 3);
    checkResult("1\n2\n3\n4\n5", 15)
    checkResult('1\n2,3', 6)
  })

  describe('mixed-separators', () => {
    checkResult("1\n2,3\n4,5", 15)
  })

  describe('customer separator', () => {
    checkResult('//;\n1;2', 3)
  })

})