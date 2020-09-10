import React, { useRef } from "react"
import styled from "styled-components"
import "./App.css"

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL} auth/api-token-auth/`
// const EVENT_LIST_URL =

// STYLE
const HeaderStyle = styled.h1`
  color: #64958f;
`

function App() {
  const emailInput = useRef(null)
  const passwordInput = useRef(null)

  function login() {
    const email = emailInput.current.value
    const password = passwordInput.current.value
    console.log(email, password)

    fetch(LOGIN_URL)
  }
  return (
    <div className="App">
      <HeaderStyle>Event App </HeaderStyle>
      <div>
        <label htmlFor="email">Email</label>
        <input ref={emailInput} name="email" placeholder="user@hotmail.com" />
        <div></div>
        <div>
          <label htmlFor="password">Password</label>
          <input ref={passwordInput} name="password" type="password" />
        </div>
        <button onClick={login}>Logga in</button>
      </div>
    </div>
  )
}

export default App
