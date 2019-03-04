import Big from 'big.js'

const numLength = value =>
  Math.abs(value)
    .toString()
    .split('.')
    .join('').length

const toSigDigs = value =>
  (numLength(value) > 11 ? value.toExponential(9) : value).toString()

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === '0') return numberTwo

  switch (operation) {
    case '+':
      const sum = Big(numberOne).plus(numberTwo)
      return toSigDigs(sum)
    case '-':
      const diff = Big(numberOne).minus(numberTwo)
      return toSigDigs(diff)
    case 'x':
      const product = Big(numberOne).times(numberTwo)
      return toSigDigs(product)
    default:
      const quotient = Big(numberOne).div(numberTwo)
      return toSigDigs(quotient)
  }
}

export default operate
