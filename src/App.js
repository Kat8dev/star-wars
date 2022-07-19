import { Routes, Route } from "react-router-dom";
import ShipInfo from './components/ShipInfo';
import Welcome from './a-pages/Welcome'
import ErrorPage from './components/ErrorPage';
import NavBar from "./components/NavBar";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import PrivateRoute from "./components/privateRoutes/PrivateRoute";
import ShipList from "./a-pages/ShipList";

const App = () => {
   
  const [loged, setLoged] = useState(false);

  return (
    <UserContext.Provider value={{loged, setLoged}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <PrivateRoute path='/ShipList' element={<ShipList />} />
        <Route path='/shipinfo/:id' element={<ShipInfo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
