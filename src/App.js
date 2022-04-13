import { Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ShipMent from "./components/ShipMent/ShipMent";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import ThreeWheeler from "./components/ThreeWheeler/ThreeWheeler";
import TwoWheeler from "./components/TwoWheeler/TwoWheeler";
import Battery from "./components/Battery/Battery";
import FourWheeler from "./components/FourWheeler/FourWheeler";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/cart" element={<Orders></Orders>}></Route>
        <Route path="/threewheeler" element={<ThreeWheeler></ThreeWheeler>}></Route>
        <Route path="/twowheeler" element={<TwoWheeler></TwoWheeler>}></Route>
        <Route path="/battery" element={<Battery></Battery>}></Route>
        <Route path="/fourWheeler" element={<FourWheeler></FourWheeler>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/shipment" element={
          <RequireAuth>
            <ShipMent></ShipMent>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
