const stringCalculator = {
  add: function (expression) {
    let pieces = this.getPieces(expression)
    return this.calculateSum(pieces)
  },
  getPieces: function (expression) {
    return expression.split(/,|\n/g)
  },
  calculateSum: function (pieces) {
    const sum = pieces.reduce((accumulator, currentValue) => {
      return parseInt(accumulator) + parseInt(currentValue)
    }, 0)
    return sum
  },

}

module.exports = stringCalculator