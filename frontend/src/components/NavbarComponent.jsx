import React from "react";
import styled from "styled-components";

function NavbarComponent() {
    return (
        <>
            <NavStyle>
                <header className="header">
                    <div className="logo">
                        <h1 align="center" style={{ color: "white" }}>
                            {" "}
                            <b1>Autofix</b1>
                        </h1>
                    </div>
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