import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 25px;
    justify-content: space-between;
    align-items: center;
    padding: 19px 49px 0 32px;
    box-sizing: border-box;
    > p {
        width: 57px;
        height: 25px;
        font-size: 21px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #ffffff
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
export default function Header(props) {
    return (
        <Container>
            <p>Vinícius</p>
            <Nav>
                <p>Quem sou</p>
                <p>Projetos</p>
                <p>Contato</p>
            </Nav>
        </Container>
    )
}