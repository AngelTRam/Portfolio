import React from "react";
import styled from 'styled-components'
import BurguerButton from "./BurgerButton";
function Navbar () {
    return (
        <>
            <NavContainer>
                <h1>Angel Tapia Ramirez - <span>Front End Dev</span></h1>
                <div className="menu">
                    <a href="https://github.com/">Yo</a>
                    <a href="https://github.com/">Experiencia</a>
                    <a href="https://github.com/">Proyectos</a>
                    <a href="https://github.com/">Contacto</a>
                </div>
                <div class="burguer">
                    <BurguerButton/>
                </div>
                
            </NavContainer>
        </>
    )
}

export default Navbar
const NavContainer = styled.nav`
    h1{
        @media(max-width: 768px){
            transition: 10ms;
            font-weight: 200;
            font-size: 23px;
            span{
                font-weight: bold;
            }  
        }
        font-weight: 100;
        font-size: 28px;
        span{
            font-weight: bold;
        }
    }
    padding: 1rem;
    background-color: #000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Exo 2', sans-serif;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
    .menu{
        @media(max-width: 768px){
            display: none;
    }
}
`