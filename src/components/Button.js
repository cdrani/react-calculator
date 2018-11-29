import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CalcButton = styled.button`
  width: ${props => (props.wide ? '50%' : '25%')};
  height: 100%;
  text-align: center;
  border: solid #eee 5px;
  color: #000;
  background-color: ${props => props.color || '#ddd'};
  cursor: pointer;
  font-size: 3rem;
`

const Button = ({ buttonName, color, wide }) => (
  <CalcButton color={color} wide={wide}>
    {buttonName}
  </CalcButton>
)

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool
}

export default Button
