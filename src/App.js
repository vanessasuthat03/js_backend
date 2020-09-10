import React, { useState } from "react"
import "./App.css"
import { Switch, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import EventListPage from "./pages/EventListPage"
import { UserContext } from "./contexts/UserContext"

function App() {
  const [token, setToken] = useState(null)
  return (
    <div className="App">
      <UserContext.Provider value={{ token, setToken }}>
        <Switch>
          <Route path="/event-list">
            <EventListPage />
          </Route>

          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </div>
  )
}

export default App
