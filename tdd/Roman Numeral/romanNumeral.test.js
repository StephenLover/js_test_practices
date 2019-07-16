describe('Roman Numeral', () => {
  const romanNumeral = require('./romanNumeral')
  it('converts number 1 to Roman numerals "I"', function () {
    expect(romanNumeral.convert(1)).toBe('I')
  })
  it('converts number 2 to Roman numerals "II"', function () {
    expect(romanNumeral.convert(2)).toBe('II')
  })
  it('converts number 3 to Roman numerals "III"', function () {
    expect(romanNumeral.convert(3)).toBe('III')
  })
  it('converts number 4 to Roman numerals "IV"', function () {
    expect(romanNumeral.convert(4)).toBe('IV')
  })
  it('converts number 5 to Roman numerals "V"', function () {
    expect(romanNumeral.convert(5)).toBe('V')
  })
  it('converts number 6 to Roman numerals "VI"', function () {
    expect(romanNumeral.convert(6)).toBe('VI')
  })
  it('converts number 7 to Roman numerals "VII"', function () {
    expect(romanNumeral.convert(7)).toBe('VII')
  })
  it('converts number 8 to Roman numerals "VIII"', function () {
    expect(romanNumeral.convert(8)).toBe('VIII')
  })
  it('converts number 9 to Roman numerals "VIII"', function () {
    expect(romanNumeral.convert(9)).toBe('IX')
  })
  it('converts number 10 to Roman numerals "X"', function () {
    expect(romanNumeral.convert(10)).toBe('X')
  })
  it('converts number 11 to Roman numerals ""', function () {
    expect(romanNumeral.convert(11)).toBe('XI')
  })
  it('converts number 12 to Roman numerals "VIII"', function () {
    expect(romanNumeral.convert(12)).toBe('XII')
  })
  it('converts number 13 to Roman numerals "VIII"', function () {
    expect(romanNumeral.convert(13)).toBe('XIII')
  })
  it('converts number 14 to Roman numerals "XIV"', function () {
    expect(romanNumeral.convert(14)).toBe('XIV')
  })
  it('converts number 15 to Roman numerals "XV"', function () {
    expect(romanNumeral.convert(15)).toBe('XV')
  })
  it('converts number 16 to Roman numerals "XVI"', function () {
    expect(romanNumeral.convert(16)).toBe('XVI')
  })
  it('converts number 20 to Roman numerals "XX"', function () {
    expect(romanNumeral.convert(20)).toBe('XX')
  })
  it('converts number 40 to Roman numerals XL', function () {
    expect(romanNumeral.convert(40)).toBe('XL')
  })
  it('converts number 50 to Roman numerals "L"', function () {
    expect(romanNumeral.convert(50)).toBe('L')
  })
  it('converts number 90 to Roman numerals "XC"', function () {
    expect(romanNumeral.convert(90)).toBe('XC')
  })
  it('converts number 100 to Roman numerals "C"', function () {
    expect(romanNumeral.convert(100)).toBe('C')
  })
  it('converts number 400 to Roman numerals "CD"', function () {
    expect(romanNumeral.convert(400)).toBe('CD')
  })
  it('converts number 900 to Roman numerals "CM"', function () {
    expect(romanNumeral.convert(900)).toBe('CM')
  })
  it('converts number 4999 to Roman numerals "MMMMCMXCIX"', function () {
    expect(romanNumeral.convert(4999)).toBe('MMMMCMXCIX')
  })
  it('converts number 5555 to error message', function () {
    expect(romanNumeral.convert(5555)).toBe(`sorry we can not calculate number 5555`)
  })
})