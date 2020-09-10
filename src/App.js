import React, { useRef, useState } from "react"
import "./App.css"
import styled from "styled-components"
import LoginForm from "./components/LoginForm"

const HeaderStyle = styled.h1`
  color: #64958f;
`

function App() {
  return (
    <div className="App">
      <HeaderStyle>Event App </HeaderStyle>
      <LoginForm />
    </div>
  )
}

export default App
