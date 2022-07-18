import { Routes, Route } from "react-router-dom";
import ShipList from './a-pages/ShipList';
import ShipInfo from './components/ShipInfo';
import Welcome from './a-pages/Welcome'
import ErrorPage from './components/ErrorPage';
import NavBar from "./components/NavBar";
import { UserContext } from "./components/UserContext";
import { useState } from "react";

const App = () => {
   
  const [loged, setLoged] = useState(false);

  return (
    <UserContext.Provider value={{loged, setLoged}}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/ShipList' element={<ShipList />} />
        <Route path='/shipinfo/:id' element={<ShipInfo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
