import React from 'react'
import styled from 'styled-components'
import bike from '../assets/bike.jpg'
import github from '../assets/github.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import wpp from '../assets/wpp.png'
import Header from './Header'

export const Container = styled.div`
    width: 100%;
    height: 582px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
        rgba(6, 52, 71, 0.45), 
        rgba(6, 52, 71, 0.45)
      ), url(${bike}) no-repeat scroll center;
    background-size: cover;

    @media only screen and (max-width: 767px) {
        height: auto;
        background: linear-gradient(
            rgba(6, 52, 71, 0.45), 
            rgba(6, 52, 71, 0.45)
          ), url(${bike}) no-repeat scroll center;
          background-size: cover;
    }

    @media only screen and (max-width: 480px) {
        height: auto;
        background: linear-gradient(
            rgba(6, 52, 71, 0.45), 
            rgba(6, 52, 71, 0.45)
          ), url(${bike}) no-repeat scroll center;
        background-size: cover;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
`

export const SocialMedias = styled.div`
    display: flex;
    flex-direction: column;
    padding: 139px 0 164px 32px;
    > a {
        margin-bottom: 24px;
    }
`
export const Aboutme = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    padding: 170px 550px 180px 219px;
    span {
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.29px;
            color: #ffffff;
            &:first-of-type {
                white-space: nowrap;
                font-size: 50px;
                margin-bottom: 6px;
            }
            &:nth-of-type(2) {
                font-size: 50px;
                margin-bottom: 6px;
                white-space: nowrap;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
            &:nth-of-type(3) {
                font-size: 24px;
                font-weight: normal;
                letter-spacing: -0.32px;
                white-space: nowrap;
                margin-bottom: 12px;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
            &:nth-of-type(4) {
                font-size: 16px;
                font-weight: normal;
                letter-spacing: -0.22px;
                white-space: nowrap;
                @media only screen and (max-width: 767px) {
                    white-space: normal;
                }
            }
    }

    @media only screen and (max-width: 767px) {
        padding: 190px 50px 100px 100px;
    }
    @media only screen and (max-width: 480px) {
        padding: 100px 50px 0 50px;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Cover(props) {
    return (
            <Container>
                <Header projects={props.projectsInfo} contact={props.contactInfo}/>
                <ContentWrapper>
                <SocialMedias>
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
                </SocialMedias>
                <Aboutme>
                    <TextWrapper>
                        <span>Eu sou</span>
                        <span>Vinícius Abuhid</span>
                        <span>Desenvolvedor Web Full-Stack</span>
                        <span>Apaixonado por programação e tecnologia</span>
                    </TextWrapper>
                </Aboutme>
                </ContentWrapper>
            </Container>
    )
}