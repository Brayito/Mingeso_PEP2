import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent4 from "./NavbarComponent4";
import { useParams } from "react-router-dom";
import HistorialService from "../services/HistorialService";

const HistorialComponentVehicle = () => {
    const { patente } = useParams();
    const [historial, setHistorial] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        HistorialService.obtenerHistorialByPatente(patente)
            .then((res) => {
                const data = res.data;
                if (data && typeof data === 'object') {
                    setHistorial(data);
                } else {
                    console.error("Datos recibidos no son un objeto:", data);
                    setHistorial(null);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener el historial:", error);
                setError(error);
                setLoading(false);
            });
    }, [patente]);

    return (
        <div>
            <GlobalStyle />
            <NavbarComponent4 />
            <Styles>
                <div align="center" className="container my-2">
                    <h1><b>Historial de Reparaciones para la Patente: {patente}</b></h1>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Error: {error.message}</p>}
                    {historial && (
                        <table border="3" className="table table-primary table-striped table-bordered border-secondary">
                            <thead className="table-dark">
                            <tr>
                                <th>Patente</th>
                                <th>Fecha Ingreso</th>
                                <th>Hora Ingreso</th>
                                <th>Monto Reparaciones</th>
                                <th>Monto Recargos</th>
                                <th>Monto Descuentos</th>
                                <th>Monto IVA</th>
                                <th>Monto Total</th>
                                <th>Fecha Salida</th>
                                <th>Hora Salida</th>
                                <th>Fecha Retiro</th>
                                <th>Hora Retiro</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{historial.patente}</td>
                                <td>{historial.fecha_ingreso}</td>
                                <td>{historial.hora_ingreso}</td>
                                <td>{historial.monto_reparaciones}</td>
                                <td>{historial.monto_recargos}</td>
                                <td>{historial.monto_descuentos}</td>
                                <td>{historial.monto_iva}</td>
                                <td>{historial.monto_total}</td>
                                <td>{historial.fecha_salida}</td>
                                <td>{historial.hora_salida}</td>
                                <td>{historial.fecha_retiro}</td>
                                <td>{historial.hora_retiro}</td>
                            </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </Styles>
        </div>
    );
}

export default HistorialComponentVehicle;

const Styles = styled.div``;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
