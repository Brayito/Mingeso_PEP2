import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import NavbarComponent3 from "./NavbarComponent3";
import RepairService from "../services/RepairService";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import { createGlobalStyle } from 'styled-components';
import { format, parseISO } from 'date-fns';

export default function NewRepairComponent(props) {
    const location = useLocation();
    const { patente } = location.state || {};

    const initialState = {
        type: "",
        fecha: "",
        hora: "",
        patente: patente || ""
    };

    const [input, setInput] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!input.type) newErrors.type = "El tipo de reparación es obligatorio.";
        if (!input.fecha) newErrors.fecha = "La fecha es obligatoria.";
        if (!input.hora) newErrors.hora = "La hora es obligatoria.";
        if (!input.patente) newErrors.patente = "La patente es obligatoria.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const formatTime = (time) => {
        return time.length === 5 ? `${time}:00` : time;
    };

    const ingresarReparacion = e => {
        e.preventDefault();

        if (!validate()) {
            swal({
                text: "Por favor, completa todos los campos obligatorios.",
                icon: "warning"
            });
            return;
        }

        swal({
            title: "¿Está seguro de que desea ingresar la reparación?",
            text: "Una vez ingresada, no podrá ser modificada.",
            icon: "warning",
            buttons: ["Cancelar", "Enviar"],
            dangerMode: true
        }).then(respuesta => {
            if (respuesta) {
                swal("Reparación ingresada correctamente!", { icon: "success", timer: "3000" });

                let reparacion = {
                    type: input.type,
                    fecha: format(parseISO(input.fecha), "yyyy-MM-dd"),
                    hora: formatTime(input.hora),  // Asegúrate de que la hora esté en formato HH:mm:ss
                    patente: input.patente,
                    value: 0
                };

                console.log("Reparación a enviar:", reparacion); // Debug log

                RepairService.ingresarReparacion(reparacion).then((res) => {
                    setInput(initialState);
                }).catch(error => {
                    swal({
                        text: "Hubo un error al ingresar la reparación.",
                        icon: "error"
                    });
                });
            } else {
                swal({ text: "Reparación no ingresada.", icon: "error" });
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
                        <h1>Registrar nueva reparación</h1>
                        <div className="formcontainer" align="center">
                            <hr />
                            <div className="container">
                                <Form>
                                    <Form.Group controlId="type">
                                        <Form.Label>
                                            <strong>Tipo de Reparación</strong>
                                        </Form.Label>
                                        <Form.Select
                                            name="type"
                                            value={input.type}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.type}
                                        >
                                            <option value="">Seleccione el tipo de reparación</option>
                                            <option value="Reparaciones del Sistema de Frenos">Reparaciones del Sistema de Frenos</option>
                                            <option value="Servicio del Sistema de Refrigeracion">Servicio del Sistema de Refrigeracion</option>
                                            <option value="Reparaciones del Motor">Reparaciones del Motor</option>
                                            <option value="Reparaciones de la Transmision">Reparaciones de la Transmision</option>
                                            <option value="Reparacion del Sistema Electrico">Reparacion del Sistema Electrico</option>
                                            <option value="Reparaciones del Sistema de Escape">Reparaciones del Sistema de Escape</option>
                                            <option value="Reparacion de Neumaticos y Ruedas">Reparacion de Neumaticos y Ruedas</option>
                                            <option value="Reparaciones de la Suspension y la Direccion">Reparaciones de la Suspension y la Direccion</option>
                                            <option value="Reparacion del Sistema de Aire Acondicionado y Calefaccion">Reparacion del Sistema de Aire Acondicionado y Calefaccion</option>
                                            <option value="Reparaciones del Sistema de Combustible">Reparaciones del Sistema de Combustible</option>
                                            <option value="Reparacion y Reemplazo del Parabrisas y Cristales">Reparacion y Reemplazo del Parabrisas y Cristales</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.type}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="fecha">
                                        <Form.Label>
                                            <strong>Fecha</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="fecha"
                                            value={input.fecha}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.fecha}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.fecha}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="hora">
                                        <Form.Label>
                                            <strong>Hora</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="time"
                                            name="hora"
                                            value={input.hora}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.hora}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.hora}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="patente">
                                        <Form.Label>
                                            <strong>Patente</strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese la patente del vehículo"
                                            name="patente"
                                            value={input.patente}
                                            onChange={changeHandler}
                                            isInvalid={!!errors.patente}
                                            readOnly
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.patente}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Button
                                        className="btn-3"
                                        onClick={ingresarReparacion}
                                    >
                                        Registrar Reparación
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Styles>
        </div>
    );
}

const Styles = styled.div``;

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
