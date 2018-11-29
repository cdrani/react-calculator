import React from 'react'
import Display from './Display'
import Button from './Button'

const App = () => {
  return (
    <div id="calc">
      <Display />
      <Button buttonName="+" />
    </div>
  )
}

export default App
