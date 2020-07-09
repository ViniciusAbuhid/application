import React from 'react'
import styled from 'styled-components'
import futurex from '../assets/futurex.PNG'
import spotenu from '../assets/SPOTENU.png'
import macbook from '../assets/macbook.png'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`
const Title = styled.div`
    max-width: 100%;
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
    padding: 43px 0 42px 0;
    white-space: nowrap;
`
const MainWrapper = styled.div`
    display: flex;
    padding: 29px 0 68px 0;
    justify-content: center;
`
const ProjectCard = styled.div`
    padding: 42px 296px 0 235px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    @media only screen and (max-width: 684px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 42px 100px 0 100px;
    }
    @media only screen and (max-width: 480px) {
        padding: 42px 70px 0 70px;
    }
`
const ImgWrapper = styled.img`
    width: 312px;
    height: 216px;
    margin-left: 69px;
    margin-right: 69px;
    object-fit: contain;
    &:nth-of-type(2), &:nth-of-type(5) {
        display: none;
        @media only screen and (max-width: 684px) {
            display: inline;
        }
    };
`
const ShowUpImg = styled(ImgWrapper)`
    @media only screen and (max-width: 684px) {
        display: none;
    }
`
const StyledImg = styled(ImgWrapper)`
@media only screen and (max-width: 684px){
    margin-top: 30px
}
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
const Bottom = styled.div`
    width: %;
    padding: 88px 0 71px 0;
    @media only screen and (max-width: 684px) {
        padding-top: 30px; 
    }
    > div {
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
        margin: 0 auto;
        text-align: center;
        color: #ffffff;
        box-sizing: border-box;
        padding: 6px 0;
    }
`
const Link = styled.a`
    text-decoration: none;
    color: #ffffff;
`

export default function Portfolio(props) {
    return (
        <Container>
            <Title>Meus projetos</Title>
            <ProjectCard>
                <ShowUpImg src={futurex} direction='left' />
                <TextWrapper direction='left'>
                    <span>FutureX</span>
                    <span>Frontend</span>
                    <span>FutureX é uma plataforma de viagens espaciais, onde o usuário pode se candidatar para integrar a tribulação da viagem que ele preferir. Este foi o projeto de conclusão da 10ª semana de curso Labenu e para realiza-lo foi necessário que criássemos a referida plataforma utilizando React + Redux e integrando as nossa funcionalidades com uma API previamente criada pelos instrutores.</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/FutureX' target="_blank">
                            Ver no Github
                            </Link>
                    </div>
                </TextWrapper>
                <ImgWrapper src={futurex} direction='left' />
            </ProjectCard>
            <ProjectCard>
                <TextWrapper direction='right'>
                    <span>LaBook</span>
                    <span>BackEnd</span>
                    <span>Para este projeto, fomos desafiados a construir o sistema interno de uma rede social, o Facebook da Labenu. Deveríamos então, através do NodeJs, Javascript, mysql, dentre outras ferramentas, possibilitar que nosso backend realizasse todas as operações necessárias para garantir a execução de funcionalidades comuns em uma rede social: cadastro, login, fazer e desfazer amizade, ver feed, etc...</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/Labook' target="_blank">
                            Ver no Github
                            </Link>
                    </div>
                </TextWrapper>
                <StyledImg src={macbook} direction='right' />
            </ProjectCard>
            <ProjectCard>
                <ShowUpImg src={spotenu} direction='left' />
                <TextWrapper direction='left'>
                    <span>Spotenu</span>
                    <span>Full-Stack</span>
                    <span>Rede social voltada para amantes da música. Nosso trabalho foi criar tanto o front como o backend, integrá-los e de gerenciar a hospedagem do aplicativo, fosse no firebase ou AWS. Este foi o projeto final da Labenu, onde pela primeira vez fomos desafiados a fazer um projeto full-stack. As ferramentas utilizadas foram aquelas ensinadas durante o curso: NodeJS, React, Redux, MySQL, dente outras...</span>
                    <div>
                        <Link href='https://github.com/ViniciusAbuhid/Spotenu-full-stack-version' target="_blank">
                            Ver no Github
                            </Link>
                    </div>
                </TextWrapper>
                <ImgWrapper src={spotenu} direction='left' />
            </ProjectCard>
            <Bottom>
                <div><Link href='https://github.com/ViniciusAbuhid?tab=repositories' target="_blank">mais projetos</Link></div>
            </Bottom>
        </Container>
    )
}