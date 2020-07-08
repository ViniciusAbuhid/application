import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 59.1px;
    background-color: #4eaccf;
    div {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.24px;
        text-align: center;
        color: #ffffff;
        padding: 21px 1101px 16px 60px;
        white-space: nowrap;
    }
`

export default function Footer(props) {
    return (
        <Container>
            <div>© 2020 Vinícius</div>
        </Container>
    )
}