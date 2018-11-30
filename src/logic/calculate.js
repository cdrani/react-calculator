import operate from './operate'

const calculate = ({ total, next, operation }, buttonName) => {
  let result

  switch (buttonName) {
    case '+/-':
      result = total * next * -1
      break
    case 'AC':
      result = 0
      break
    case '%':
      result = (total * next) / 100
      break
    default:
      result = operate(total, next, buttonName)
  }

  return result
}

export default calculate
