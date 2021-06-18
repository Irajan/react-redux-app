import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./views/login";
import Register from "./views/register";
import UserProfile from "./views/userProfile";
import QnAndAns from "./views/qunAndAnsList";
import UserList from "./views/userList";

import NavBar from "./components/navBar";

function App() {
  const errorOccured = useSelector((state) => state.errorOccured);
  const isLogged = useSelector((state) => state.logged.isLogged);
  const loggedId = useSelector((state) => state.logged.id);

  return (
    <div>
      <div className="err">{errorOccured.message}</div>
      <Router>
        <Switch>
          {isLogged && (
            <Route path="/profile">
              <NavBar active="profile" />
              <UserProfile id={loggedId} />
            </Route>
          )}

          {isLogged && (
            <Route path="/list">
              <NavBar active="list" />
              <UserList />
            </Route>
          )}

          {isLogged && (
            <Route path="/question-answer">
              <NavBar active="qAndA" />
              <QnAndAns />
            </Route>
          )}

          <Route path="/">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
