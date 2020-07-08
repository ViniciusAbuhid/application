import React from 'react'
import styled from 'styled-components'
import me from '../assets/me.jpg'

export const Container = styled.div`
    height: 418px;
    background-color: #4eaccf;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
export const Text = styled.div`
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
    padding: 46px 562px 0 564px;
`
export const MainWrapper = styled.div`
    display: flex;
    padding: 42px 317px 80px 281px
`
export const FrontEnd = styled.div`
    display: flex;
    flex-direction: column;
    border: px black solid
    border-sizing: border-box;
    margin-right: 122px;
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
export const BackEnd = styled.div`
    display: flex;
    flex-direction: column;
    border: px black solid
    border-sizing: border-box;
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
                        Criação de API´s para comunicação com front-end seguindo princípio de Clean Code.
                    </span>
                </BackEnd>
            </MainWrapper>
        </Container>
    )
}