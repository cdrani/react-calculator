import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ buttonName }) => <button>{buttonName}</button>

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
}

export default Button
