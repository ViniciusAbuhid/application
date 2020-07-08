import React from 'react'
import styled from 'styled-components'
import me from '../assets/me.jpg'
import bike from '../assets/bike.jpg'
import github from '../assets/github.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import wpp from '../assets/wpp.png'
import jardin from '../assets/jardin.jpg'
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
      ), url(${bike}) no-repeat scroll left;
    background-size: cover;
    box-sizing: border-box;
`
export const ContentWrapper = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
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
    padding: 170px 682px 180px 219px;
    box-sizing: border-box;
    span {
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.29px;
            color: #ffffff;
            &:first-of-type {
                font-size: 50px;
                margin-bottom: 6px;
            }
            &:nth-of-type(2) {
                font-size: 24px;
                font-weight: normal;
                letter-spacing: -0.32px;
                white-space: nowrap;
                margin-bottom: 12px;
            }
            &:nth-of-type(3) {
                font-size: 16px;
                font-weight: normal;
                letter-spacing: -0.22px;
                white-space: nowrap;
            }
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Cover() {
    return (
            <Container>
                <Header/>
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
                <a href='https://www.linkedin.com/in/vin%C3%ADcius-abuhid/' target="_blank">
                    <img src={wpp}/>
                </a>
                </SocialMedias>
                <Aboutme>
                    <TextWrapper>
                        <span>Eu sou <nobr>Vinícius Abuhid</nobr></span>
                        <span>Desenvolvedor Web Full-Stack</span>
                        <span>Apaixonado por programação e tecnologia</span>
                    </TextWrapper>
                </Aboutme>
                </ContentWrapper>
            </Container>
    )
}