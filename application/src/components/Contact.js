import React from 'react'
import styled from 'styled-components'
import github from '../assets/github.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import wpp from '../assets/wpp.png'

export const Container = styled.div`
    width: 100%;
    height: 397px;
    background-color: #063447;
    display: flex;
    flex-direction: column;
    div {
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        text-align: center;
        color: #ffffff;
        &:first-of-type {
            margin-bottom: 12px;
            padding: 54px 495px 0 495px
        }
        &:nth-of-type(2) {
            padding: 35px 378px 0 379px;
            font-size: 18px;
            font-weight: normal;
            letter-spacing: -0.24px;
            text-align: center;
        }
        &:nth-of-type(3) {
            padding: 51px 480px 56px 481px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    a {
        margin-right:15px;
        margin-left: 15px;
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
                <a href='https://www.linkedin.com/in/vin%C3%ADcius-abuhid/' target="_blank">
                    <img src={wpp}/>
                </a>
            </div>
        </Container>
    )
}