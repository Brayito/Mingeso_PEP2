import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent4 from "./NavbarComponent4";
import { useNavigate, useParams } from "react-router-dom";
import RepairService from "../services/RepairService";

const RepairComponentVehicle = () => {
    const navigate = useNavigate();
    const { patente } = useParams(); // Usar useParams para obtener la patente desde la URL
    const [repairs, setRepairs] = React.useState([]);

    React.useEffect(() => {
        RepairService.obtenerReparacionesPorVehiculo(patente)
            .then((res) => {
                const data = res.data;
                // Asegúrate de que data es un array antes de establecer el estado
                if (Array.isArray(data)) {
                    setRepairs(data);
                } else {
                    setRepairs([]);
                }
            })
            .catch((error) => {
                console.log("Error al obtener reparaciones:", error);
                setRepairs([]);
            });
    }, [patente]);

    const handleBack = () => {
        navigate("/listar-vehiculos", { state: { patente: patente } });
    };

    return (
        <div>
            <GlobalStyle />
            <NavbarComponent4 />
            <Styles>
                <div align="center" className="container my-2">
                    <h1><b>Listado de reparaciones para el vehículo {patente}</b></h1>
                    <table border="3" className="table table-primary table-striped table-bordered border-secondary">
                        <thead className="table-dark">
                        <tr>
                            <th>Patente</th>
                            <th>Tipo</th>
                            <th>Valor</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                        </thead>
                        <tbody>
                        {repairs.map((repair) => (
                            <tr key={repair.id}>
                                <td>{repair.patente}</td>
                                <td>{repair.type}</td>
                                <td>{repair.value}</td>
                                <td>{repair.fecha}</td>
                                <td>{repair.hora}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <button className="btn btn-primary mt-3" onClick={handleBack}>Volver atrás</button>
                </div>
            </Styles>
        </div>
    );
}

export default RepairComponentVehicle;

const Styles = styled.div``;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
