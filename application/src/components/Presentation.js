import React from 'react'
import styled from 'styled-components'
import me from '../assets/me.jpg'
import cv from '../assets/cv.pdf'

export const Container = styled.div`
    width: 100%;
    height: 483px;
    background-color: #063447;
    box-sizing: border-box;
    padding: 69px 221px 64px 283px;
`
export const PicContainer = styled.img`
    width: 305px;
    height: 305px;
    object-fit: cover;
    box-sizing: border-box;
`
export const Profile = styled.div`
    display: flex;
`
export const Introduction = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-left: 103px;
    span {
        font-size: 42px;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.32px;
        color: #ffffff;
        &:first-of-type {
            font-weight: bold;
            margin-bottom: 20px;
        }
        &:nth-of-type(2) {
            font-size: 12px;
            font-weight: normal;
            letter-spacing: -0.16px;
            margin-bottom: 26px;
        }
        &:nth-of-type(3) {
            font-size: 14px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 26px;
        }
        a {
                background-color: red;
                text-decoration: none;
            }
}
`
export const Button = styled.div`
    width: 140px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #4eaccf;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
    padding: 3px 0;
    span {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
    }
`

export default function Presentation() {
    return (
        <Container>
            <Profile>
                <PicContainer src={me}/>
                <Introduction>
                <span>Sobre mim</span>
                <span>Advogado de formação e apaixonado por tecnoloiga, decidi no final de 2019 dar um novo ruma para a minha vida. Fiz então o processo seletivo para a escola de programação Labenu, fui aprovado e em 6 meses, aprendi a programar do zero ao full-stack. Além disso, desenvolvi vários projetos, em diferentes linguagens e frameworks, conforme exposto no meu perfil do github. Agora busco uma oportunidade de me inserir no mercado de trabalho e com a mesma dedicação e intensidade que aprendi, trabalharei para desenvolver os projetos que me foram confiados.</span>
                <span>|HTML &nbsp;|CSS &nbsp;|Javascript &nbsp;|React &nbsp;|Redux &nbsp;|NodeJS &nbsp;|Typescript &nbsp;|SQL &nbsp;|Testes &nbsp;|AWS</span>
                <a href={cv} download><Button><span>CV em PDF</span></Button></a>
                </Introduction>
            </Profile>
        </Container>
    )
}