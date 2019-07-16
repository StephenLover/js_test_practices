const stringCalculator = {
  add: function (expression) {
    let pieces = this.getPieces(expression)
    return this.calculateSum(pieces)
  },
  getPieces: function (expression) {
    let delimiters = [",", "\n"];

    if (this.hasCustomerDelimiter(expression)) {
      delimiters.push(this.getCustomerDelimiter(expression));
      expression = this.stripFirstLine(expression);
    }
    return this.getSubPieces([expression], delimiters);
  },
  hasCustomerDelimiter: function (expression) {
    return /^\/\//.test(expression);
  },
  getCustomerDelimiter: function (expression) {
    return expression.charAt(2)
  },
  stripFirstLine: function (expression) {
    return expression.substring(expression.indexOf('\n') + 1);
  },
  getSubPieces: function (piecesSoFar, delimiters) {
    if (delimiters.length === 0) return piecesSoFar;
    let subPieces = [];
    let delimiter = delimiters.pop();
    for (let i = 0; i < piecesSoFar.length; i++) {
      subPieces = subPieces.concat(piecesSoFar[i].split(delimiter))

    }
    return this.getSubPieces(subPieces, delimiters)
  },
  calculateSum: function (pieces) {
    const sum = pieces.reduce((accumulator, currentValue) => {
      return parseInt(accumulator) + parseInt(currentValue)
    }, 0)
    return sum
  },

}

module.exports = stringCalculator