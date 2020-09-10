import React from "react"
import styled from "styled-components"
import "./App.css"

const HeaderStyle = styled.h1`
  color: #64958f;
`

function App() {
  function login() {
    console.log("inloggat")
  }
  return (
    <div className="App">
      <HeaderStyle>Event App </HeaderStyle>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" placeholder="user@hotmail.com" />
        <div></div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" />
        </div>
        <button onClick={login}>Logga in</button>
      </div>
    </div>
  )
}

export default App
