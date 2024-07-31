import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import VehicleComponent from "./components/VehicleComponent";
import HomeComponent from "./components/HomeComponent";
import NewVehicleComponent from "./components/NewVehicleComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/listar" element={<VehicleComponent/>}/>
            <Route path="/nuevo_vehiculo" element={<NewVehicleComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
