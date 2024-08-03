import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent2 from "./NavbarComponent2";
import { useNavigate } from "react-router-dom";

const VehicleComponent = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:8080/reparation/vehicles/")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok " + res.statusText);
                }
                return res.text();
            })
            .then((text) => {
                return text ? JSON.parse(text) : [];
            })
            .then((data) => {
                setVehicles(data);
            })
            .catch((error) => {
                console.log("Error al obtener vehículos:", error);
                setVehicles([]);
            });
    }, []);


    const handleAddRepair = (patente) => {
        navigate("/nueva-reparacion", { state: { patente: patente } });
    };

    return (
        <div>
            <GlobalStyle />
            <NavbarComponent2 />
            <Styles>
                <div align="center" className="container my-2">
                    <h1><b>Listado de vehículos</b></h1>
                    <table border="3" className="table table-primary table-striped table-bordered border-secondary">
                        <thead className="table-dark">
                        <tr>
                            <th>Patente</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Tipo Vehículo</th>
                            <th>Año</th>
                            <th>Motor</th>
                            <th>Asientos</th>
                            <th>Kilometraje</th>
                            <th>Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicles.map((vehicle) => (
                            <tr key={vehicle.id}>
                                <td>{vehicle.patente}</td>
                                <td>{vehicle.marca}</td>
                                <td>{vehicle.modelo}</td>
                                <td>{vehicle.tipo_vehiculo}</td>
                                <td>{vehicle.ano_fabricacion}</td>
                                <td>{vehicle.tipo_motor}</td>
                                <td>{vehicle.num_asientos}</td>
                                <td>{vehicle.kilometraje}</td>
                                <td>
                                    <button
                                        onClick={() => handleAddRepair(vehicle.patente)}
                                        className="btn btn-primary mx-1"
                                    >
                                        Añadir Reparación
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Styles>
        </div>
    );
}

export default VehicleComponent;

const Styles = styled.div``;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
