import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Profile from "../components/profile";
import QunAndAns from "../components/qnAndAns";
import UserList from "../components/userList";

function Dashboard() {
  const isLogged = useSelector((state) => state.logged.isLogged);
  const userId = useSelector((state) => state.logged.userId);

  return isLogged ? (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/qunAndAns">Q &amp; A</Link>
          </li>

          <li>
            <Link to="/dashboard/users">Users</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/dashboard/qunAndAns">
          <QunAndAns />
        </Route>

        <Route path="/dashboard/users">
          <UserList />
        </Route>

        <Route path="/dashboard/">
          <Profile id={userId} />
        </Route>
      </Switch>
    </Router>
  ) : (
    "You dont have access"
  );
}

export default Dashboard;
