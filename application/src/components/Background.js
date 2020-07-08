import React from 'react'
import styled from 'styled-components'
import me from '../assets/me.jpg'

export const Container = styled.div`
    width: 100%;
    height: 441px;
    background-color: #292929;
`
export const Education = styled.div`
    width: 128px;
    height: 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
    padding: 46px 577px 0 575px;
`
export const MainWrapper = styled.div`
    display: flex;
    padding: 29px 0 68px 0;
    justify-content: center;
`
export const EducationCard = styled.div`
    padding-left: 2px;
    display: flex;
    flex-direction: column;
    width: 327px;
    height: 268px;
    border-radius: 8px;
    background-color: #ffffff;
    margin-right: 6px;
    span {
            font-size: 21px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.28px;
            color: #292929;
            &:first-of-type {
                margin-bottom: 12px;
            }
            &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4){
                    font-size: 12px;
                    font-weight: normal;
                    letter-spacing: -0.16px;
                    margin-bottom: 12px;
            }
        }
`

export default function Background() {
    return (
        <Container>
            <Education>Educação</Education>
            <MainWrapper>
                <EducationCard>
                    <span>Graduação em Direito na Faculdade de Direito Milton Campos</span>
                    <span>Nova Lima/MG</span>
                    <span>2013-2018</span>
                    <span>Considerada a melhor faculdade de Direito privada e constatada como a que mais aprova no exame da OAB em Minas Gerais, a Faculdade Milton Campos é referência na formação de grandes juristas e profissionais.</span>
                </EducationCard>
                <EducationCard>
                    <span>Curso de Web Full Stack na Labenu</span>
                    <span>Curso remoto</span>
                    <span>6 meses - 2020</span>
                    <span>Escola de programação full-stack, focada em empregabilidade. São 6 meses full-time em que alunos sem nenhuma experiência em programação, são transformadas em desenvolvedores capazes de assumir qualquer desafio de início de carreira. São mais de 1000 horas de experiência, em tempo real e com professores experientes. Dentre as competências ensinadas destacam-se tecnologias como: React, Javascript, Node.js, dentre outras.</span>
                </EducationCard>
                <EducationCard>
                    <span>Aprendizado de idiomas</span>
                    <span><li>Inglês fluente - curso de inglês em Sydney - Austrália em 2012</li></span>
                    <span><li>Francês avançado - curso de francês em Lyon - França em 2019</li></span>
                    <span><li>Italiano intermediário - aulas e autodidatismo</li></span>
                </EducationCard>
            </MainWrapper>
        </Container>
    )
}