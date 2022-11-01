import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1>hw-router-v5</h1>
      </div>
      <div>
        <Link to="/users">UsersListPage</Link>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/users" component={UsersLayout} />
          <Redirect to="/" from="*" />
        </Switch>
      </div>
    </>
  );
}

const MainPage = () => {
  return <h1> MainPage</h1>;
};

const UsersLayout = () => {
  return (
    <>
      <h1>UsersLayout</h1>
      <Link to="/">MainPage</Link>

      <Switch>
        <Route exact path="/users" component={UsersListPage} />
        <Route path="/users/:userId?/profile" component={UserPage} />
        <Route path="/users/:userId?/edit" component={UserEdit} />
      </Switch>
    </>
  );
};

const UsersListPage = () => {
  return (
    <>
      <h4>UsersListPage</h4>
      <ul>
        <li>
          <Link to="/users/0/profile">User 0</Link>
        </li>
        <li>
          <Link to="/users/1/profile">User 1</Link>
        </li>
        <li>
          <Link to="/users/2/profile">User 2</Link>
        </li>
        <li>
          <Link to="/users/3/profile">User 3</Link>
        </li>
        <li>
          <Link to="/users/4/profile">User 4</Link>
        </li>
      </ul>
    </>
  );
};

const UserPage = () => {
  const { userId } = useParams();

  return (
    <>
      <h4>UserPage</h4>
      <ul>
        <li>
          <Link to="/users">UsersListPage</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit this User</Link>
        </li>
      </ul>
      <span>userId:{userId}</span>
      <Redirect to={`/users/${userId}/profile`} from="*" />
    </>
  );
};

const UserEdit = () => {
  const { userId } = useParams();

  return (
    <>
      <h4>UserEdit</h4>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Page</Link>
        </li>
        <li>
          <Link to={`/users/${Number(userId) + 1}/profile`}>
            Another User Page
          </Link>
        </li>
        <li>
          <Link to={`/users`}>UsersListPage</Link>
        </li>
      </ul>
      <span>userId:{userId}</span>
    </>
  );
};

export default App;
