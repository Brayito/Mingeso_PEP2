import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent2 from "./NavbarComponent2"; // Asegúrate de que esta ruta sea correcta

class VehicleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicles: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/vehicles/")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ vehicles: data });
            })
            .catch(console.log);
    }

    render() {
        return (
            <div>
                <GlobalStyle />
                <NavbarComponent2 />
                <Styles>
                    <div align="center" className="container my-2">
                        <h1><b> Listado de vehículos</b></h1>
                        <table border="3" className="table table-primary table-striped table-bordered border-secondary">
                            <thead className="table-dark">
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Tipo Vehículo</th>
                                <th>Año</th>
                                <th>Motor</th>
                                <th>Asientos</th>
                                <th>Kilometraje</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.vehicles.map((vehicle) => (
                                <tr key={vehicle.id}>
                                    <td>{vehicle.marca}</td>
                                    <td>{vehicle.modelo}</td>
                                    <td>{vehicle.tipo_vehiculo}</td>
                                    <td>{vehicle.ano_fabricacion}</td>
                                    <td>{vehicle.tipo_motor}</td>
                                    <td>{vehicle.num_asientos}</td>
                                    <td>{vehicle.kilometraje}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Styles>
            </div>
        );
    }
}

export default VehicleComponent;

const Styles = styled.div`
  /* Aquí puedes añadir estilos específicos */
`;

const GlobalStyle = createGlobalStyle`
    /* Aquí puedes añadir estilos globales */
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
