import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

const ROOT_URL = "http://yoshi.willandskill.eu:8999/api/v1/"
const LOGIN_URL = `${ROOT_URL}auth/api-token-auth/`
// const EVENT_LIST_URL =

export default function LoginForm() {
  const history = useHistory()

  const [email, setEmail] = useState("test.user@willandskill.se")
  const [password, setPassword] = useState("js-lesson-10")
  const { token, setToken } = useContext(UserContext)

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
      .then(res => res.json()) // det man får tillbaka från fetch
      .then(data => {
        console.log("data", data.token) // får fram token
        setToken(data.token)
        history.push("/event-list")
      })
  }

  return (
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
          value={password}
          onChange={event => setPassword(event.currentTarget.value)}
        />
      </div>
      <button onClick={login}>Logga in</button>
    </div>
  )
}
