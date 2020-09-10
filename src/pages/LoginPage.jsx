import React from "react"
import styled from "styled-components"
import LoginForm from "../components/LoginForm"

const HeaderStyle = styled.h1`
  color: #64958f;
`

export default function LoginPage() {
  return (
    <div>
      <HeaderStyle>Login page</HeaderStyle>
      <LoginForm />
    </div>
  )
}
