const values = [{
    arabic: 1000,
    roman: 'M'
  }, {
    arabic: 900,
    roman: 'CM'
  }, {
    arabic: 400,
    roman: 'CD'
  },
  {
    arabic: 100,
    roman: 'C'
  }, {
    arabic: 90,
    roman: 'XC'
  },
  {
    arabic: 50,
    roman: 'L'
  },
  {
    arabic: 40,
    roman: 'XL',
  },
  {
    arabic: 10,
    roman: 'X'
  }, {
    arabic: 9,
    roman: 'IX'
  },
  {
    arabic: 5,
    roman: 'V'
  },
  {
    arabic: 4,
    roman: 'IV'
  },
  {
    arabic: 1,
    roman: 'I'
  }
]


const romanNumeral = {
  convert: function (number) {
    let remaining = number;
    let result = "";
    if (number > 5000) {
      return `sorry we can not calculate number ${number}`
    }
    values.forEach(value => {
      while (remaining >= value.arabic) {
        result += value.roman;
        remaining -= value.arabic
      }
    })
    return result
  }
}

module.exports = romanNumeral;