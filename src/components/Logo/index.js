import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
    height: ${({size}) => (size ? `${size}px` : "60px")};
`

const Logo = ({size}) => {
    return (
        <ActualLogo size={size} src={require("../../images/finale.png").default}/>
    )
}

export default Logo;