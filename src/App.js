import { Outlet, Link } from "react-router-dom";

const App = () => {

  return (
    <div>
      <h1>StarWars</h1>
      <nav  style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}>
        <Link className="APP_LINKS" to="/Welcome">Welcome</Link>
        <Link className="APP_LINKS" to="/ShipList">Ship List</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
