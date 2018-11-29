import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  display: flex;
  width: 700px;
  height: 100px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: right;
  background-color: #ccc;
  font-size: 3rem;
`

const Display = ({ result }) => <Input defaultValue={result} />

Display.propTypes = {
  result: PropTypes.string.isRequired
}

Display.defaultProps = {
  result: '0'
}

export default Display
