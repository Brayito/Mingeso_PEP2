import React, { useState } from "react";
import styled from "styled-components";
import NavbarComponent3 from "./NavbarComponent3";
import VehicleService from "../services/VehicleService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import { createGlobalStyle } from 'styled-components'


export default function NuevoProveedorComponent(props) {

    const initialState = {
        marca: "",
        modelo: "",
        tipo_vehiculo: "",
        ano_fabricacion: 0,
        tipo_motor: "",
        num_asientos: 0,
        kilometraje: 0
    };

    const [input, setInput] = useState(initialState);

    const changePatenteHandler = event => {
        setInput({ ...input, patente: event.target.value });
        console.log(input.patente);
    };
    const changeMarcaHandler = event => {
        setInput({ ...input, marca: event.target.value });
        console.log(input.marca);
    };
    const changeModeloHandler = event => {
        setInput({ ...input, modelo: event.target.value });
        console.log(input.modelo);
    };
    const changeTipoVehiculoHandler = event => {
        setInput({ ...input, tipo_vehiculo: event.target.value });
        console.log(input.tipo_vehiculo);
    };
    const changeAnoFabricacionHandler = event => {
        setInput({ ...input, ano_fabricacion: event.target.value });
        console.log(input.ano_fabricacion);
    };
    const changeTipoMotorHandler = event => {
        setInput({ ...input, tipo_motor: event.target.value });
        console.log(input.tipo_motor);
    };
    const changeNumAsientosHandler = event => {
        setInput({ ...input, num_asientos: event.target.value });
        console.log(input.num_asientos);
    };
    const changeKilometrajeHandler = event => {
        setInput({ ...input, kilometraje: event.target.value });
        console.log(input.kilometraje);
    };

    const ingresarVehiculo = e => {
        e.preventDefault();
        swal({
            title: "¿Está seguro de que desea ingresar al vehiculo?",
            text: "Una vez ingresado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta=>{
            if(respuesta){
                swal("Vehiculo ingresado correctamente!", {icon: "success", timer: "3000"});
                let vehiculo = { patente: input.patente, marca: input.marca, modelo: input.modelo, tipo_vehiculo: input.tipo_vehiculo, ano_fabricacion: input.ano_fabricacion, tipo_motor: input.tipo_motor, num_asientos: input.num_asientos, kilometraje: input.kilometraje};
                console.log(input.patente)
                console.log(input.marca)
                console.log(input.modelo)
                console.log(input.tipo_vehiculo)
                console.log(input.ano_fabricacion)
                console.log(input.tipo_motor)
                console.log(input.num_asientos)
                console.log(input.kilometraje)
                console.log("vehiculo => " + JSON.stringify(vehiculo));
                VehicleService.ingresarVehiculo(vehiculo).then(
                    (res) => {
                    }
                );
            }
            else{
                swal({text: "Vehiculo no ingresado.", icon: "error"});
            }
        });
    };



    return (
        <div>
            <GlobalStyle />
            <NavbarComponent3 />
            <Styles>
                <div className="mainclass">
                    <div>
                        <h1>Registrar nuevo vehiculo</h1>
                        <div className="formcontainer" align="center">
                            <hr />
                            <div className=" container">
                                <Form>
                                    <Form.Group controlId="patente" value={input.patente} onChange={changePatenteHandler}>
                                        <Form.Label>
                                            <strong>Patente</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="patente"
                                            placeholder="Ingrese la patente del vehiculo"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="marca" value={input.marca} onChange={changeMarcaHandler}>
                                        <Form.Label>
                                            <strong>Marca</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="marca"
                                            placeholder="Ingrese la marca del vehiculo"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="modelo" value={input.modelo} onChange={changeModeloHandler}>
                                        <Form.Label>
                                            <strong>Modelo</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="modelo"
                                            placeholder="Ingrese el modelo del vehiculo"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="tipo_vehiculo" value={input.tipo_vehiculo} onChange={changeTipoVehiculoHandler}>
                                        <Form.Label>
                                            <strong>Tipo Vehículo</strong>
                                        </Form.Label>
                                        <Form.Control as="select" name="tipo_vehiculo">
                                            <option value="Sedan">Sedan</option>
                                            <option value="Hatchback">Hatchback</option>
                                            <option value="SUV">SUV</option>
                                            <option value="Pickup">Pickup</option>
                                            <option value="Furgoneta">Furgoneta</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="ano_fabricacion" value={input.ano_fabricacion} onChange={changeAnoFabricacionHandler}>
                                        <Form.Label>
                                            <strong>Ano fabricacion</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="ano_fabricacion"
                                            placeholder="Ingrese el año de fabricación del vehículo"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="tipo_motor" value={input.tipo_motor} onChange={changeTipoMotorHandler}>
                                        <Form.Label>
                                            <strong>Tipo Motor</strong>
                                        </Form.Label>
                                        <Form.Control as="select" name="tipo_motor">
                                            <option value="Gasolina">Gasolina</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Hibrido">Hibrido</option>
                                            <option value="Electrico">Electrico</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="num_asientos" value={input.num_asientos} onChange={changeNumAsientosHandler}>
                                        <Form.Label>
                                            <strong>Num asientos</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="num_asientos"
                                            placeholder="Ingrese el número de asientos del vehículo"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="kilometraje" value={input.kilometraje} onChange={changeKilometrajeHandler}>
                                        <Form.Label>
                                            <strong>Kilometraje</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="kilometraje"
                                            placeholder="Ingrese el kilometraje del vehículo"
                                        />
                                    </Form.Group>
                                </Form>
                            </div>
                            <Button className="btn-3" onClick={ingresarVehiculo}>Registrar Vehiculo</Button>
                        </div>
                    </div>
                </div>
            </Styles>
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
`
const Styles = styled.div`
`