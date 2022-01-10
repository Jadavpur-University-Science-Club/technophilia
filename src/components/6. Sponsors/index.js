import React from 'react';
import { Container, HeadingH1} from "../Commons";
import {Card} from "../Card/Card.component";
//import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
import { Row, Col } from "react-grid-system";
/////import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';







const Sponsors = () => {
    return (
        <>
            <Container id="sponsors">
                {/*<HeadingH1>Sponsors</HeadingH1>
                <div style={{paddingLeft:"6px", paddingRight:"6px"}}>
                    <p style={{ color: "white", fontSize: "1.7rem" }}> To be revealed <span style={{ color: '#0692ce' }}>soon</span> </p>
                    
                    
    </div> */}

                <section id ="Tier1" style={{ width: "80%", paddingTop:"15%"  ,height:"52%" }}>
                 
                 <div style = {{padding : "8%"}}>
                        <Row lg = {12} style={{justifyContent:"center",color: "white", fontSize: "2rem"}}>
                            <HeadingH1>TIER 1 SPONSORS</HeadingH1>
                        </Row>
                        <Row lg={12}>
                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%",paddingBottom:"12%"}}>
                                <a href = "https://devfolio.co/home/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/devfolio1.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                               
                            </Col>
                            
                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%", paddingBottom:"10%"}}>
                                <a href = "https://polygon.technology/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/poly1.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                            </Col>
                        </Row>
                    </div>   

                </section>

                <section id ="Tier2" style={{ width: "80%", paddingTop:"10%",height:"40%" }}>
                 
                 <div style = {{padding : "8%"}}>
                        <Row lg = {12} style={{justifyContent:"center",color: "white", fontSize: "2rem"}}>
                            <HeadingH1>TIER 2 SPONSORS</HeadingH1>
                        </Row>
                        <Row lg={12}>
                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%",paddingBottom:"12%"}}>
                                <a href = "https://tezos.com/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/tezos.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                               
                            </Col>
                            
                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%", paddingBottom:"10%"}}>
                                <a href = "https://filecoin.io/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/filecoin1.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                            </Col>
                        </Row>
                    </div>   

                </section>

                <section id ="Tier3" style={{ width: "80%", paddingTop:"10%" }}>
                 
                 <div style = {{padding : "8%"}}>
                        <Row lg = {12} style={{justifyContent:"center",color: "white", fontSize: "2rem"}}>
                            <HeadingH1>TIER 3 SPONSORS</HeadingH1>
                        </Row>
                        <Row lg={12}>
                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%",paddingBottom:"12%"}}>
                                <a href = "https://www.echo3d.co/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/echo3d.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                               
                            </Col>
                            
                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%", paddingBottom:"10%"}}>
                                <a href = "https://www.geeksforgeeks.org/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/gfg-new-logo.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                            </Col>

                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%", paddingBottom:"10%"}}>
                                <a href = "https://www.spartificial.com/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/spartificial.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                            </Col>

                            <Col lg = {6} sm ={12} style = {{paddingLeft:"5%", paddingBottom:"10%"}}>
                                <a href = "https://gen.xyz/" target='_blank' >
                                    <img className = "logo-large" src = {require("../../images/sponsors/p-.xyz_logo.png").default} alt =" "  width ="90%" left= "20%" />

                                </a>
                            </Col>
                        </Row>
                    </div>   

                </section>
            </Container>



            
        </>
    )
}

export default Sponsors;
 