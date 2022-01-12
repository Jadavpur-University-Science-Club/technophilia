import React from "react";
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from "./infoElements";
import { Button } from "../ButtonElements";
import {animateScroll as scroll} from "react-scroll";

const InfoSection = ({ id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headline,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
    darkText }) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button
                                        to="/"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 0 : 1}
                                        dark={dark ? 0 : 1}
                                        onClick={scroll.scrollToTop}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;