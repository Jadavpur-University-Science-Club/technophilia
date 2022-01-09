
import styled from "styled-components"

export const Container = styled.div`
height: 1000px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
        height : auto
    }
`