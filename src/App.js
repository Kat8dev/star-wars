import { Routes, Route } from "react-router-dom";
import ShipList from './a-pages/ShipList';
import ShipInfo from './components/ShipInfo';
import Welcome from './a-pages/Welcome'
import ErrorPage from './components/ErrorPage';
import NavBar from "./components/NavBar";

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/ShipList' element={<ShipList />} />
        <Route path='/shipinfo/:id' element={<ShipInfo />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
