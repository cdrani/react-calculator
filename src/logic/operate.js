import Big from 'big-js'

const operate = (numberOne, numberTwo, operation) => {
  let result
  switch (operation) {
    case '+':
      result = Big(numberOne).plus(numberTwo)
      break
    case '-':
      result = Big(numberOne).minus(numberTwo)
      break
    case 'x':
      result = Big(numberOne).times(numberTwo)
      break
    case '/':
      result = Big(numberOne).div(numberTwo)
      break
    default:
      result = Big(numberOne) / 100
  }

  return result
}

export default operate
