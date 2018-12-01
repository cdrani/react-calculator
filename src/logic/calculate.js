import operate from './operate'

const calculate = (data, buttonName) => {
  const { total, next, operation } = data

  switch (buttonName) {
    case '+/-':
      return Object.assign(data, {
        next: -1 * next,
        total: -1 * total,
        operation: null
      })
    case 'AC':
      return Object.assign(data, {
        total: 0,
        next: '',
        operation: null
      })
    case '%':
      return Object.assign(data, {
        total: total ? total / 100 : next / 100,
        next: '',
        operation: null
      })
    case '+':
    case '-':
    case 'x':
    case '/':
      if (total && next && operation && operation !== buttonName) {
        let prevCalculation = operate(total, next, operation)
        return Object.assign(data, {
          total: prevCalculation,
          next: '',
          operation: buttonName
        })
      } else if (!next)
        return Object.assign(data, {
          operation: buttonName
        })
      else if (total && !operation)
        return Object.assign(data, { operation: buttonName })
      else
        return Object.assign(data, {
          total: next,
          next: '',
          operation: buttonName
        })
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (!total || total === 0)
        return Object.assign(data, { next: next + buttonName })
      else if (!next || (total && next))
        return Object.assign(data, { next: next + buttonName })
      else
        return Object.assign(data, {
          total: operate(total, buttonName, operation),
          next: '',
          operation: null
        })
    default:
      if (total && operation && next)
        return Object.assign(data, {
          total: operate(total, next, operation),
          next: '',
          operation: null
        })
      else
        return Object.assign(data, {
          total: operate(total, next, operation),
          next: '',
          operation: null
        })
  }
}

export default calculate
