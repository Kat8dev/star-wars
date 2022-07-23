import { Routes, Route } from "react-router-dom";
import ShipInfo from './components/ShipInfo';
import Welcome from './a-pages/Welcome'
import ErrorPage from './components/ErrorPage';
import NavBar from "./components/NavBar";
import { UserContext } from "./hooks/UserContext";
import { useState } from "react";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ShipList from "./a-pages/ShipList";
import PleaseLogin from "./components/PleaseLogin";

const App = () => {

  const [loged, setLoged] = useState(false);

  return (
    <UserContext.Provider value={ { loged, setLoged } }>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/ShipList' element={<ShipList />} />
        </Route>
        <Route path='/shipinfo/:id' element={<ShipInfo />} />
        <Route path="pleaseLogin" element={<PleaseLogin/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
