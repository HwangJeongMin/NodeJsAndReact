import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/users">Users</Route>
          <Route path="/">Home</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
