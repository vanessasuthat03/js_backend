import React, { useState } from "react"
import "./App.css"
import { Switch, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import EventListPage from "./pages/EventListPage"
import { UserContext } from "./contexts/UserContext"
import EventDetailPage from "./pages/EventDetailPage"

function App() {
  const [token, setToken] = useState(null)
  return (
    <div className="App">
      <UserContext.Provider value={{ token, setToken }}>
        <Switch>
          <Route path="/event/:slug" component={EventDetailPage} />{" "}
          {/*kolon innan slug säger till att leta efter slug.*/}
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
