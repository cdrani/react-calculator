import React, { Component } from 'react'
import styled from 'styled-components'
import Display from './Display'
import ButtonPanel from './ButtonPanel'
import calculate from '../logic/calculate.js'

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`

export default class App extends Component {
  state = {
    total: '0',
    next: '',
    operation: null
  }

  handleClick = buttonName => {
    const { total, next, operation } = calculate(this.state, buttonName)
    this.setState({
      total,
      next,
      operation
    })
    console.log(this.state)
  }

  render() {
    const { next, total } = this.state
    return (
      <AppWrapper id="calc">
        <Display result={next ? next.toString() : total.toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </AppWrapper>
    )
  }
}
