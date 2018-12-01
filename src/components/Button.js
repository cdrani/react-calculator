import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CalcButton = styled.input`
  width: ${props => (props.wide ? '50%' : '25%')};
  height: 100%;
  font-size: 3rem;
  text-align: center;
  border: solid #eee 5px;
  color: #000;
  background-color: ${props => props.color || '#ddd'};
  cursor: pointer;

  :hover {
    background-color: ${props => (props.color ? '#ff9926' : '#bbb')};
  }
`

const Button = ({ buttonName, color, wide, clickHandler }) => {
  let input

  const handleClick = buttonName => {
    return clickHandler(input.value)
  }

  return (
    <CalcButton
      ref={i => (input = i)}
      color={color}
      wide={wide}
      onClick={handleClick}
      type="button"
      value={buttonName}
    />
  )
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool
}

export default Button
