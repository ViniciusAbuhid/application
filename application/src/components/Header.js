import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 25px;
    justify-content: space-between;
    align-items: center;
    padding: 19px 49px 0 32px;
    @media only screen and (max-width: 480px) {
        justify-content: center;
    }
    > p {
        font-size: 21px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #ffffff;
        &:first-of-type {
            @media only screen and (max-width: 480px) {
                display: none;
            }
        }
    }
`
export const Nav = styled.div`
    display: flex;
    align-items: center;
    > p {
            height: 19px;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: -0.22px;
            text-align: center;
            color: #4eaccf;
            margin-left: 32px;
            white-space: nowrap;
            &:first-of-type {
                color: white;
                margin-left: 0
            }
      }
`
export const Link = styled.a`
    text-decoration: none;
    color: #4eaccf;
`

export default function Header(props) {
    return (
        <Container>
            <p>Vinícius</p>
            <Nav>
                <p>Quem sou</p>
                <p><Link href={props.projects}>Projetos</Link></p>
                <p><Link href={props.contact}>Contato</Link></p>
            </Nav>
        </Container>
    )
}