
import styled from "styled-components"

export const Container = styled.div`
height: 1500px;
display: flex;
flex-direction: column;
align-items: center;
background: #121c27;


    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0 10px;
        height : auto
    }
`
export const HeadingH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;   
    margin-bottom: 32px;
    margin-top: 10px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`