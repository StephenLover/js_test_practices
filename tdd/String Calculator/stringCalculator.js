const stringCalculator = {
  add: function (expression) {
    let pieces = this.getPieces(expression)
    return this.calculateSum(pieces)
  },
  getPieces: function (expression) {
    let delimiters = [",", "\n"];
    return this.getSubPieces([expression], delimiters);
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