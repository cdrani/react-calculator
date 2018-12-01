import Big from 'big.js'

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === '0') return numberTwo

  switch (operation) {
    case '+':
      return Big(numberOne)
        .plus(numberTwo)
        .toString()
    case '-':
      return Big(numberOne)
        .minus(numberTwo)
        .toString()
    case 'x':
      return Big(numberOne)
        .times(numberTwo)
        .toString()
    default:
      return Big(numberOne)
        .div(numberTwo)
        .toString()
  }
}

export default operate
