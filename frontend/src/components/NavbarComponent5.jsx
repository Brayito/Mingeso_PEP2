import React from "react";
import styled from "styled-components";

function NavbarComponent() {
    return (
        <>
            <NavStyle>
                <header class="header">
                    <div class="logo">
                        <h1>Autofix</h1>
                    </div>
                    <nav>
                    </nav>
                    <a class="btn" href="/"><button>Volver al menú principal</button></a>
                    <a class="btn-2" href="/listar-reparaciones"><button>Volver al listado de Reparaciones</button></a>
                </header>
            </NavStyle>
        </>
    )
}

export default NavbarComponent;

const NavStyle = styled.nav`
header{
    background-color: black;
}
.header{
    background-color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 85px;
    padding: 5px 10%;
}
.header .logo{
    margin-right: auto;
    color: white;
    font-family: 'arial',serif;
}
`