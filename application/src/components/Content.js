import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 418px;
    background-color: #4eaccf;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1100px) {
        height: auto;
    }
`
export const Text = styled.div`
    padding-top: 46px;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
    white-space: nowrap;
`
export const MainWrapper = styled.div`
    width:100%;
    display: flex;
    padding: 42px 317px 80px 375px;
    justify-content: center;
    @media only screen and (max-width: 1100px) {
        height: auto;
        padding-left: 25%;
        padding-right: 25%;
    }
    > div {
        &: first-of-type {
            display: flex;
            justify-content: center;
            @media only screen and (max-width: 767px){
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }
    }
`
export const FrontEnd = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10%;
    @media only screen and (max-width: 767px) {
        margin-bottom: 20px;
        margin-right: 0;
    }
    span {
        font-size: 55px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.32px;
        color: #ffffff;
        &:first-of-type {
            white-space: nowrap;
            margin-bottom: 20px;
        }
        &:nth-of-type(2) {
            font-size: 16px;
            font-weight: normal;
            letter-spacing: -0.22px;
            margin-bottom: 20px;
        }
        &:nth-of-type(3) {
            font-size: 16px;
            font-weight: normal;
            letter-spacing: -0.22px;
        }
`
export const BackEnd = styled.div`
    display: flex;
    flex-direction: column;
    span {
        font-size: 55px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.32px;
        color: #ffffff;;
        &:first-of-type {
            white-space: nowrap;
            margin-bottom: 20px;
        }
        &:nth-of-type(2) {
            font-size: 16px;
            font-weight: normal;
            letter-spacing: -0.22px;
            margin-bottom: 20px;
        }
        &:nth-of-type(3) {
            font-size: 16px;
            font-weight: normal;
            letter-spacing: -0.22px;
        }
`

export default function Content() {
    return (
        <Container>
            <Text>O que faço</Text>
            <MainWrapper>
            <div>
                <FrontEnd>
                    <span>Front-end</span>
                    <span>
                        Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript.
                    </span>
                    <span>
                        Criação de sites responsivos seguindo princípio de Mobile First.
                    </span>
                </FrontEnd>
                <BackEnd>
                    <span>Back-end</span>
                    <span>
                        Aplicações utilizando NodeJS, Typescript e MySQL.
                    </span>
                    <span>
                        Criação de API's para comunicação com front-end seguindo princípio de Clean Code.
                    </span>
                </BackEnd>
            </div>
            </MainWrapper>
        </Container>
    )
}