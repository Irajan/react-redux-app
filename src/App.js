import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./views/login";
import Register from "./views/register";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
