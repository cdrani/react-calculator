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

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName)

  return (
    <Wrapper>
      <Div>
        <Button buttonName="AC" clickHandler={handleClick} />
        <Button buttonName="+/-" clickHandler={handleClick} />
        <Button buttonName="%" clickHandler={handleClick} />
        <Button color="#ff7200" buttonName="/" clickHandler={handleClick} />
      </Div>
      <Div>
        <Button buttonName="7" clickHandler={handleClick} />
        <Button buttonName="8" clickHandler={handleClick} />
        <Button buttonName="9" clickHandler={handleClick} />
        <Button color="#ff7200" buttonName="x" clickHandler={handleClick} />
      </Div>
      <Div>
        <Button buttonName="4" clickHandler={handleClick} />
        <Button buttonName="5" clickHandler={handleClick} />
        <Button buttonName="6" clickHandler={handleClick} />
        <Button color="#ff7200" buttonName="-" clickHandler={handleClick} />
      </Div>
      <Div>
        <Button buttonName="1" clickHandler={handleClick} />
        <Button buttonName="2" clickHandler={handleClick} />
        <Button buttonName="3" clickHandler={handleClick} />
        <Button color="#ff7200" buttonName="+" clickHandler={handleClick} />
      </Div>
      <Div>
        <Button buttonName="0" wide clickHandler={handleClick} />
        <Button buttonName="." clickHandler={handleClick} />
        <Button color="#ff7200" buttonName="=" clickHandler={handleClick} />
      </Div>
    </Wrapper>
  )
}

export default ButtonPanel
