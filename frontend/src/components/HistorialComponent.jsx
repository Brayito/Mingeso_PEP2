import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent4 from "./NavbarComponent4";
import { useNavigate } from "react-router-dom";
import HistorialService from "../services/HistorialService";

const HistorialComponent = () => {
    const navigate = useNavigate();
    const [historial, setHistorial] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        setError(null);
        HistorialService.obtenerHistorial()
            .then((res) => {
                const data = res.data;
                if (Array.isArray(data)) {
                    setHistorial(data);
                } else {
                    console.error("Datos recibidos no son un array:", data);
                    setHistorial([]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener el historial:", error);
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleActualizarHistorial = () => {
        setLoading(true);
        setError(null);
        HistorialService.actualizarHistorial()
            .then((res) => {
                console.log("Respuesta al actualizar historial:", res.data);
                return HistorialService.obtenerHistorial();
            })
            .then((res) => {
                const data = res.data;
                if (Array.isArray(data)) {
                    setHistorial(data);
                } else {
                    console.error("Datos recibidos no son un array:", data);
                    setHistorial([]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al actualizar el historial:", error);
                setError(error);
                setLoading(false);
            });
    };

    return (
        <div>
            <GlobalStyle />
            <NavbarComponent4 />
            <Styles>
                <div align="center" className="container my-2">
                    <h1><b>Historial de Vehículos</b></h1>
                    {loading && <p>Cargando...</p>}
                    {error && <p>Error: {error.message}</p>}
                    <button onClick={handleActualizarHistorial}>Actualizar Historial</button>
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
                        {historial.map((historial) => (
                            <tr key={historial.id}>
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
                        ))}
                        </tbody>
                    </table>
                </div>
            </Styles>
        </div>
    );
}

export default HistorialComponent;

const Styles = styled.div``;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
