import React, { useState } from "react";
import styled from "styled-components";
import NavbarComponent3 from "./NavbarComponent3";
import VehicleService from "../services/VehicleService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import { createGlobalStyle } from 'styled-components'

export default function NewVehicleComponent(props) {

    const initialState = {
        patente: "",
        marca: "",
        modelo: "",
        tipo_vehiculo: "",
        ano_fabricacion: "",
        tipo_motor: "",
        num_asientos: "",
        kilometraje: ""
    };

    const [input, setInput] = useState(initialState);
    const [errors, setErrors] = useState({});

    // Función para validar los campos del formulario
    const validate = () => {
        const newErrors = {};
        if (!input.patente) newErrors.patente = "La patente es obligatoria.";
        if (!input.marca) newErrors.marca = "La marca es obligatoria.";
        if (!input.modelo) newErrors.modelo = "El modelo es obligatorio.";
        if (!input.tipo_vehiculo) newErrors.tipo_vehiculo = "El tipo de vehículo es obligatorio.";
        if (!input.ano_fabricacion) newErrors.ano_fabricacion = "El año de fabricación es obligatorio.";
        if (!input.tipo_motor) newErrors.tipo_motor = "El tipo de motor es obligatorio.";
        if (!input.num_asientos) newErrors.num_asientos = "El número de asientos es obligatorio.";
        if (!input.kilometraje) newErrors.kilometraje = "El kilometraje es obligatorio.";

        setErrors(newErrors);
        // Solo devolvemos true si no hay errores
        return Object.keys(newErrors).length === 0;
    };

    // Manejadores de cambio para cada campo
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const ingresarVehiculo = e => {
        e.preventDefault();

        if (!validate()) {
            swal({
                text: "Por favor, completa todos los campos obligatorios.",
                icon: "warning"
            });
            return;
        }

        swal({
            title: "¿Está seguro de que desea ingresar al vehiculo?",
            text: "Una vez ingresado, no podrá ser modificado.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta => {
            if (respuesta) {
                swal("Vehiculo ingresado correctamente!", { icon: "success", timer: "3000" });
                let vehiculo = {
                    patente: input.patente,
                    marca: input.marca,
                    modelo: input.modelo,
                    tipo_vehiculo: input.tipo_vehiculo,
                    ano_fabricacion: input.ano_fabricacion,
                    tipo_motor: input.tipo_motor,
                    num_asientos: input.num_asientos,
                    kilometraje: input.kilometraje
                };

                VehicleService.ingresarVehiculo(vehiculo).then((res) => {
                    setInput(initialState);
                }).catch(error => {
                    swal({
                        text: "Hubo un error al ingresar el vehículo.",
                        icon: "error"
                    });
                });
            } else {
                swal({ text: "Vehiculo no ingresado.", icon: "error" });
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
                            <div className="container">
                                <Form>
                                    <Form.Group controlId="patente">
                                        <Form.Label>
                                            <strong>Patente</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese la patente del vehiculo"
                                            name="patente"
                                            value={input.patente}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.patente}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.patente}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="marca">
                                        <Form.Label>
                                            <strong>Marca</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese la marca del vehiculo"
                                            name="marca"
                                            value={input.marca}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.marca}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.marca}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="modelo">
                                        <Form.Label>
                                            <strong>Modelo</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese el modelo del vehiculo"
                                            name="modelo"
                                            value={input.modelo}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.modelo}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.modelo}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="tipo_vehiculo">
                                        <Form.Label>
                                            <strong>Tipo Vehículo</strong>
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="tipo_vehiculo"
                                            value={input.tipo_vehiculo}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.tipo_vehiculo}
                                        >
                                            <option value="">Seleccione el tipo de vehículo</option>
                                            <option value="Sedan">Sedan</option>
                                            <option value="Hatchback">Hatchback</option>
                                            <option value="SUV">SUV</option>
                                            <option value="Pickup">Pickup</option>
                                            <option value="Furgoneta">Furgoneta</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.tipo_vehiculo}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="ano_fabricacion">
                                        <Form.Label>
                                            <strong>Año fabricación</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingrese el año de fabricación del vehículo"
                                            name="ano_fabricacion"
                                            value={input.ano_fabricacion}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.ano_fabricacion}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.ano_fabricacion}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="tipo_motor">
                                        <Form.Label>
                                            <strong>Tipo Motor</strong>
                                        </Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="tipo_motor"
                                            value={input.tipo_motor}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.tipo_motor}
                                        >
                                            <option value="">Seleccione el tipo de motor</option>
                                            <option value="Gasolina">Gasolina</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Hibrido">Hibrido</option>
                                            <option value="Electrico">Electrico</option>
                                        </Form.Control>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.tipo_motor}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="num_asientos">
                                        <Form.Label>
                                            <strong>Número de asientos</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingrese el número de asientos del vehículo"
                                            name="num_asientos"
                                            value={input.num_asientos}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.num_asientos}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.num_asientos}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="kilometraje">
                                        <Form.Label>
                                            <strong>Kilometraje</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Ingrese el kilometraje del vehículo"
                                            name="kilometraje"
                                            value={input.kilometraje}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.kilometraje}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.kilometraje}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button
                                        className="btn-3"
                                        onClick={ingresarVehiculo}
                                    >
                                        Registrar Vehiculo
                                    </Button>
                                </Form>
                            </div>
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
