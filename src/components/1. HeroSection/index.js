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
        <>
            <HeroContainer id="home">
                <HeroContent>

                    <HeroP style={{ color: "white", marginBottom: "10px" }}>J U S C &nbsp;&nbsp;P R E S E N T S</HeroP>

                    <HeroH1>
                        <Logo size={150} />
                    </HeroH1>
                    <HeroH1>
                        <span>&nbsp;&nbsp;</span> <span style={{ color: "white" }}>Techno</span><span style={{ color: "#0692ce" }}>philia'22</span>
                    </HeroH1>
                    <HeroP>#Dare_to_Dream <br/></HeroP>
                    <span> <br/></span>
                    <div
                        id="devfolio-apply-now"
                        className="apply-button"
                        data-hackathon-slug="technophilia-jusc"
                        data-button-theme="dark-inverted"
                        style={{ height: "44px", width: "220px", paddingTop:"10px", borderRadius : "50px"}} >

                    </div>

                    <br />
                    
                    <HeroBtnWrapper>
                        <Button
                            to={{ pathname: "https://discord.gg/fqehMwrmgt" }} 
                            target={'_blank'}
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                            style={{ backgroundColor: hover ? "#0692ce" : "white" }}
                        >Join Our Discord <img src={require("../../images/discord.png").default} width="32px" height="32px" alt="discord_new" style={{ paddingLeft: "3px" }} /> {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                    </HeroBtnWrapper>
                    
                </HeroContent>
            </HeroContainer>

        </>
    )
}

export default HeroSection
