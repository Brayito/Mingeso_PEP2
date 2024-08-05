import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import VehicleComponent from "./components/VehicleComponent";
import HomeComponent from "./components/HomeComponent";
import NewVehicleComponent from "./components/NewVehicleComponent";
import RepairComponent from "./components/RepairComponent";
import NewRepairComponent from "./components/NewRepairComponent";
import RepairComponentVehicle from "./components/RepairComponentVehicle";
import HistorialComponent from "./components/HistorialComponent";
import HistorialComponentVehicle from "./components/HistorialComponentVehicle";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/listar-vehiculos" element={<VehicleComponent/>}/>
            <Route path="/nuevo-vehiculo" element={<NewVehicleComponent/>}/>
            <Route path="/listar-reparaciones" element={<RepairComponent/>}/>
            <Route path="/nueva-reparacion" element={<NewRepairComponent/>}/>
            <Route path="/listar-reparaciones/:patente" element={<RepairComponentVehicle/>}/>
            <Route path="/historial" element={<HistorialComponent/>}/>
            <Route path="/historial/:patente" element={<HistorialComponentVehicle/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
