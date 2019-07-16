const primeFactors = require('./primeFactors')

describe('Prime Factors', () => {
  it("calculate the factors of an 1", function () {
    expect(primeFactors.of(1)).toEqual([])
  })
  it("calculate the factors of an 2", function () {
    expect(primeFactors.of(2)).toEqual([2])
  })
  it("calculate the factors of an 3", function () {
    expect(primeFactors.of(3)).toEqual([3])
  })
  it("calculate the factors of an 4", function () {
    expect(primeFactors.of(4)).toEqual([2, 2])
  })
  it("calculate the factors of an 5", function () {
    expect(primeFactors.of(5)).toEqual([5])
  })
  it("calculate the factors of an 6", function () {
    expect(primeFactors.of(6)).toEqual([2, 3])
  })
  it("calculate the factors of an 7", function () {
    expect(primeFactors.of(7)).toEqual([7])
  })
  it("calculate the factors of an 8", function () {
    expect(primeFactors.of(8)).toEqual([2, 2, 2])
  })
  it("calculate the factors of an 9", function () {
    expect(primeFactors.of(9)).toEqual([3, 3])
  })
  it("calculate the factors of an 60", function () {
    expect(primeFactors.of(2 * 2 * 3 * 5)).toEqual([2, 2, 3, 5])
  })
  it("calculate the factors of an 25116", function () {
    expect(primeFactors.of(2 * 2 * 3 * 7 * 13 * 23)).toEqual([2, 2, 3, 7, 13, 23])
  })
})