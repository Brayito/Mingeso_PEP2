import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import NavbarComponent from "./NavbarComponent"; // Asegúrate de que esta ruta sea correcta

// Definición del componente Home
function HomeComponent() {
    return (
        <div>
            <GlobalStyle />
            <NavbarComponent />
            <HomeStyle>
                <div align="center">
                    <a className="btn" href="/listar-vehiculos">
                        <button>Ver vehiculos</button>
                    </a>
                    <a className="btn" href="/listar-reparaciones">
                        <button>Ver reparaciones</button>
                    </a>
                    <a className="btn" href="/historial">
                        <button>Ver historiales</button>
                    </a>
                </div>
            </HomeStyle>
        </div>
    );
}

// Exportación por defecto del componente Home
export default HomeComponent;

// Definición de estilos globales
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Definición de estilos específicos para Home
const HomeStyle = styled.div`
  nav {
    background-color: #333;
  }
`;
