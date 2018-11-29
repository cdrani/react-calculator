import React from 'react'
import styled from 'styled-components'
import Display from './Display'
import ButtonPanel from './ButtonPanel'

const AppWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
`

const App = () => {
  return (
    <AppWrapper id="calc">
      <Display />
      <ButtonPanel />
    </AppWrapper>
  )
}

export default App
