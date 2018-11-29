import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Div = styled.div`
  height: 100px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ButtonPanel = () => {
  return (
    <Wrapper>
      <Div>
        <Button buttonName="AC" />
        <Button buttonName="+/-" />
        <Button buttonName="%" />
        <Button buttonName="/" />
      </Div>
      <Div>
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button buttonName="x" />
      </Div>
      <Div>
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button buttonName="-" />
      </Div>
      <Div>
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button buttonName="+" />
      </Div>
      <Div>
        <Button buttonName="0" />
        <Button buttonName="." />
        <Button buttonName="=" />
      </Div>
    </Wrapper>
  )
}

export default ButtonPanel
