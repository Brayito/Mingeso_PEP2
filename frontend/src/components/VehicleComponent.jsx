import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent2 from "./NavbarComponent2";
import { useNavigate } from "react-router-dom";

const VehicleComponent = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = React.useState([]);

    const fetchVehicles = () => {
        fetch("http://localhost:8080/reparation/vehicles/")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok " + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                setVehicles(data);
            })
            .catch((error) => {
                console.log("Error al obtener vehículos:", error);
                setVehicles([]);
            });
    };

    React.useEffect(() => {
        fetchVehicles();
    }, []);

    const updateVehicleState = (patente, estado) => {
        console.log(`Actualizando estado del vehículo con patente ${patente} a ${estado}`);
        fetch(`http://localhost:8080/reparation/actualizar/${patente}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ estado: estado }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok " + res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                console.log('Respuesta del servidor:', data);
                fetchVehicles(); // Recargar la tabla después de la actualización
            })
            .catch((error) => {
                console.error("Error al actualizar el estado del vehículo:", error);
            });
    };

    const handleAddRepair = (patente) => {
        navigate("/nueva-reparacion", { state: { patente: patente } });
    };

    const handleRepairs = (patente) => {
        navigate(`/listar-reparaciones/${patente}`, { state: { patente: patente } });
    };

    const handleEndRepairs = (patente) => {
        updateVehicleState(patente, "Listo para retirar");
        window.location.reload();
    };

    const handleRetired = (patente) => {
        updateVehicleState(patente, "Retirado");
    };

    const handleHistorial = (patente) => {
        navigate(`/historial/${patente}`);
    };

    const handleNewRepair = (patente) => {
        updateVehicleState(patente, "En reparacion");
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
                            <th>Estado</th>
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
                                <td>{vehicle.estado}</td>
                                <td>
                                    {vehicle.estado === "En reparacion" && (
                                        <>
                                            <button
                                                onClick={() => handleAddRepair(vehicle.patente)}
                                                className="btn btn-primary mx-1"
                                            >
                                                Añadir Reparación
                                            </button>
                                            <button
                                                onClick={() => handleRepairs(vehicle.patente)}
                                                className="btn btn-primary mx-1"
                                            >
                                                Ver reparaciones
                                            </button>
                                            <button
                                                onClick={() => handleEndRepairs(vehicle.patente)}
                                                className="btn btn-primary mx-1"
                                            >
                                                Finalizar reparaciones
                                            </button>
                                        </>
                                    )}
                                    {vehicle.estado === "Listo para retirar" && (
                                        <button
                                            onClick={() => handleRetired(vehicle.patente)}
                                            className="btn btn-primary mx-1"
                                        >
                                            Retirado
                                        </button>
                                    )}
                                    {vehicle.estado === "Retirado" && (
                                        <>
                                        <button
                                            onClick={() => handleHistorial(vehicle.patente)}
                                            className="btn btn-primary mx-1"
                                        >
                                            Ver historial
                                        </button>

                                        <button
                                        onClick={() => handleNewRepair(vehicle.patente)}
                                    className="btn btn-primary mx-1"
                                >
                                    Realizar nuevo ingreso
                                </button>
                                        </>
                                    )}
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
