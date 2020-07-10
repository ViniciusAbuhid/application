import React from 'react'
import styled from 'styled-components'
import github from '../assets/github.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import wpp from '../assets/wpp.png'

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #063447;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        max-width: 50%;
        height: 150px;
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        text-align: center;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 480px){
            height: 200px;
        }
        &:nth-of-type(2) {
            font-size: 18px;
            font-weight: normal;
            letter-spacing: -0.24px;
            text-align: center;
            @media only screen and (max-width: 767px){
                max-width: 80%
            };
            @media only screen and (max-width: 480px ){
                font-size: 20px;
            }
        }
        &:nth-of-type(3) {
            width: 20%;
            display: flex;
            justify-content: space-around;
            @media only screen and (max-width: 767px){
                width: 40%
            }
            @media only screen and (max-width: 480px){
                width: 60%
            }
        }
    }
`

export default function Contact(props) {
    return (
        <Container>
            <div>Contrate-me!</div>
            <div>
                    Procuro oportunidade de trabalho onde eu possa aprender,
                    me desenvolver e evoluir na minha carreia profissional.<br/>
                    <br/>
                    E-mail para contato: viniciusabuhid@gmail.com<br/>
                    Celular: (31) 98466-2430
            </div>
            <div>
                <a href='https://github.com/ViniciusAbuhid' target="_blank">
                    <img src={github}/>
                </a>
                <a href='https://www.linkedin.com/in/vin%C3%ADcius-abuhid/' target="_blank">
                    <img src={linkedin}/>
                </a>
                <a href='https://www.instagram.com/abuhidvinicius/' target="_blank">
                    <img src={insta}/>
                </a>
                <a href="tel:31984662430" target="_blank">
                    <img src={wpp}/>
                </a>
            </div>
        </Container>
    )
}