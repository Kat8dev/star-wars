import { Outlet, Link } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <h1>StarWars</h1>
      <nav className="APP_NAV">
        <Link className="APP_LINKS" to="/">Welcome</Link>
        <Link className="APP_LINKS" to="/ShipList">Ship List</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
