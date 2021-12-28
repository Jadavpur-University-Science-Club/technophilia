import React, { useState } from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"
import { Button } from '../ButtonElements'
import Logo from '../Logo'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroContent>
                
                <HeroP style={{color:"white", marginBottom:"10px"}}>J U S C &nbsp;&nbsp;P R E S E N T S</HeroP>
                
                <HeroH1>
                    <Logo size={150}/>
                </HeroH1>
                <HeroH1>
                <span>&nbsp;&nbsp;</span> <span style={{color:"white"}}>Techno</span><span style={{color:"#0692ce"}}>philia</span>
                </HeroH1>
                <HeroP>#Dare_to_Dream</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        style={{backgroundColor: hover ? "#0692ce" : "white"}}
                    >Register Now! {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
