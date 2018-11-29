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
        <Button color="orange" buttonName="/" />
      </Div>
      <Div>
        <Button buttonName="7" />
        <Button buttonName="8" />
        <Button buttonName="9" />
        <Button color="orange" buttonName="x" />
      </Div>
      <Div>
        <Button buttonName="4" />
        <Button buttonName="5" />
        <Button buttonName="6" />
        <Button color="orange" buttonName="-" />
      </Div>
      <Div>
        <Button buttonName="1" />
        <Button buttonName="2" />
        <Button buttonName="3" />
        <Button color="orange" buttonName="+" />
      </Div>
      <Div>
        <Button buttonName="0" wide />
        <Button buttonName="." />
        <Button color="orange" buttonName="=" />
      </Div>
    </Wrapper>
  )
}

export default ButtonPanel
