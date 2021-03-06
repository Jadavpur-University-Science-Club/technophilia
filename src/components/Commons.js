import styled from "styled-components";

export const Container = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #121c27;
    


    @media screen and (max-width: 768px) {
      height: auto;
    }

    @media screen and (max-width: 480px) {
        height: 1500px;
    }
`

export const Wrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    width: 85vw;
    gap: 25px;
    padding: 8px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const HeadingH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;   
    margin-bottom: 64px;
    margin-top: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`