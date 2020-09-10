import React, { useRef, useState } from "react"
import styled from "styled-components"
import "./App.css"

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`
// const EVENT_LIST_URL =

// STYLE
const HeaderStyle = styled.h1`
  color: #64958f;
`

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function login() {
    console.log(email, password)
    const payload = {
      email: email,
      password: password
    }

    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
  }
  return (
    <div className="App">
      <HeaderStyle>Event App </HeaderStyle>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={event => setEmail(event.currentTarget.value)}
          placeholder="user@hotmail.com"
        />
        <div></div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={event => setPassword(event.currentTarget.value)}
          />
        </div>
        <button onClick={login}>Logga in</button>
      </div>
    </div>
  )
}

export default App
