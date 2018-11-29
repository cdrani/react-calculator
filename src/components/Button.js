import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CalcButton = styled.button`
  width: 25%;
  height: 100%;
  text-align: center;
  border: solid #eee 5px;
  color: #000;
  background-color: #ddd;
  cursor: pointer;
  font-size: 3rem;
`

const Button = ({ buttonName }) => <CalcButton>{buttonName}</CalcButton>

Button.propTypes = {
  buttonName: PropTypes.string.isRequired
}

export default Button
