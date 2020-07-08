import React from 'react'
import styled from 'styled-components'
import me from '../assets/me.jpg'
import futurex from '../assets/futurex.PNG'
import spotenu from '../assets/SPOTENU.png'
import macbook from '../assets/macbook.png'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const Title = styled.div`
    width: 183px;
    height: 30px;
    font-family: Montserrat;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #4eaccf;
    padding: 43px 547px 0 550px;
`
export const MainWrapper = styled.div`
    display: flex;
    padding: 29px 0 68px 0;
    justify-content: center;
`
export const ProjectCard = styled.div`
    padding-left: 2px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const ImgWrapper = styled.img`
    width: 312px;
    height: 216px;
    padding-left: ${props => props.direction === 'left' ? '235px' : '0'};
    padding-right: ${props => props.direction === 'right' ? '317px' : '0'};
    object-fit: contain;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${props => props.direction === 'left' ? '42px 296px 0 69px' : '89px 45px 0 239px'};
    span {
        font-size: 42px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        color: #063447;
        &:nth-of-type(2) {
            font-size: 21px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 23px
        }
        &:nth-of-type(3) {
            font-size: 12px;
            font-weight: normal;
            letter-spacing: -0.28px;
            margin-bottom: 23px
        }
    }
    div {
        width: 140px;
        height: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        background-color: #4eaccf;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
        padding: 8px 0;
    }
`
export const Bottom = styled.div`
    width: %;
    padding: 88px 584px 71px 575px;
    div {
    width: 150px;
    height: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #063447;
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    text-align: center;
    color: #ffffff;
    box-sizing: border-box;
    padding: 6px 0;
    }
`

export default function Portfolio(props) {
    return (
        <Container>
            <Title>Meus projetos</Title>
            <ProjectCard>
                <ImgWrapper src={futurex} direction='left' />
                <TextWrapper direction='left'>
                    <span>FutureX</span>
                    <span>Frontend</span>
                    <span>FutureX é uma plataforma de viagens espaciais, onde o usuário pode se candidatar para integrar a tribulação da viagem que ele preferir. Este foi o projeto de conclusão da 10ª semana de curso Labenu e para realiza-lo foi necessário que criássemos a referida plataforma utilizando React + Redux e integrando as nossa funcionalidades com uma API previamente criada pelos instrutores.</span>
                    <div>
                        <a href='https://github.com/ViniciusAbuhid/FutureX' target="_blank">
                            Ver no Github
                            </a>
                    </div>
                </TextWrapper>
            </ProjectCard>
            <ProjectCard>
                <TextWrapper direction='right'>
                    <span>LaBook</span>
                    <span>BackEnd</span>
                    <span>Para este projeto, fomos desafiados a construir o sistema interno de uma rede social, o Facebook da Labenu. Deveríamos então, através do NodeJs, Javascript, mysql, dentre outras ferramentas, possibilitar que nosso backend realizasse todas as operações necessárias para garantir a execução de funcionalidades comuns em uma rede social: cadastro, login, fazer e desfazer amizade, ver feed, etc...</span>
                    <div>
                        <a href='https://github.com/ViniciusAbuhid/Labook' target="_blank">
                            Ver no Github
                            </a>
                    </div>
                </TextWrapper>
                <ImgWrapper src={macbook} direction='right' />
            </ProjectCard>
            <ProjectCard>
                <ImgWrapper src={spotenu} direction='left' />
                <TextWrapper direction='left'>
                    <span>Spotenu</span>
                    <span>Full-Stack</span>
                    <span>Rede social voltada para amantes da música. Nosso trabalho foi criar tanto o front como o backend, integrá-los e de gerenciar a hospedagem do aplicativo, fosse no firebase ou AWS. Este foi o projeto final da Labenu, onde pela primeira vez fomos desafiados a fazer um projeto full-stack. As ferramentas utilizadas foram aquelas ensinadas durante o curso: NodeJS, React, Redux, MySQL, dente outras...</span>
                    <div>
                        <a href='https://github.com/ViniciusAbuhid/Spotenu-full-stack-version' target="_blank">
                            Ver no Github
                            </a>
                    </div>
                </TextWrapper>
            </ProjectCard>
            <Bottom>
                <div>mais projetos</div>
            </Bottom>
        </Container>
    )
}