import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  display: flex;
  height: 100px;
  padding: 10px;
  font-weight: bold;
  text-align: right;
  background-color: #aaa;
  color: #fff;
  font-size: 3rem;
  border: none;
  outline: none;
`

const Display = ({ result }) => {
  const handleChange = e => {
    e.target.value = result
  }
  return <Input value={result} onChange={handleChange} />
}

Display.propTypes = {
  result: PropTypes.string.isRequired
}

Display.defaultProps = {
  result: '0'
}

export default Display
