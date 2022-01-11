import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from "./FooterElements";
import {animateScroll as scroll} from "react-scroll";
import Logo from "../Logo";

const Footer = () => {
    
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={scroll.scrollToTop}><Logo size={40}/>&nbsp;&nbsp; <span style={{color:"white"}}> Techno</span><span style={{color: "#0692ce"}}>philia'22</span></SocialLogo>
                           
                            <WebsiteRights style={{marginBottom:"10px"}}>#Dare_to_Dream.</WebsiteRights>
                            <WebsiteRights>Mail : official.jusc@gmail.com</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="https://www.facebook.com/juscofficial" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="https://www.instagram.com/jusc_official/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="https://twitter.com/juscofficial" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="https://www.linkedin.com/school/jadavpur-university-science-club/" target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
