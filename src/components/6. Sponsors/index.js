import React from 'react';
import {Container,HeadingH2,HeadingH1} from "./Sponsors"
// import {Card} from "../Card/Card.component";
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
                
                <section id="Tier1" style={{ width: "80%", paddingTop: "5%", height: "30%" }}>

                    <div style={{ padding: "5%" }}>
                    <Row lg={12} style={{ justifyContent: "center", color: "white" }}>
                            <HeadingH1>SPONSORS</HeadingH1>
                        </Row>
                        <Row lg={12} style={{ justifyContent: "center", color: "white", fontSize: "2rem" }}>
                            <HeadingH2>TIER 1</HeadingH2>
                        </Row>
                        <Row className="justify-content-md-center" lg={6} md={12} s={12}>
                            <Col  style={{ paddingLeft: "5%", paddingBottom: "12%" ,flexDirection: "column",}}>
                                <a href="https://devfolio.co/home/" target='_blank' rel="noreferrer" >
                                    <img className="logo-large" src={require("../../images/sponsors/devfolio1.png").default} alt=" " width="80%" left="20%" />

                                </a>

                            </Col>

                            <Col  style={{ paddingLeft: "5%", paddingBottom: "10%" }}>
                                <a href="https://polygon.technology/" target='_blank' rel="noreferrer" >
                                    <img className="logo-large" src={require("../../images/sponsors/poly1.png").default} alt=" " width="80%" left="20%" />

                                </a>
                            </Col>
                        </Row>
                    </div>

                </section>

                <section id="Tier2" style={{ width: "80%", paddingTop: "5%", height: "30%" }}>

                    <div style={{ padding: "5%" }}>
                        <Row lg={12} style={{ justifyContent: "center", color: "white", fontSize: "2rem" }}>
                            <HeadingH2>TIER 2</HeadingH2>
                        </Row>
                        <Row className="justify-content-md-center" lg={6} md={12} s={12}>
                            <Col style={{ paddingLeft: "5%", paddingBottom: "12%" }}>
                                <a href="https://tezos.com/" target='_blank' rel="noreferrer" >
                                    <img className="logo-large" src={require("../../images/sponsors/tezos.png").default} alt=" " width="80%" left="20%" />

                                </a>

                            </Col>

                            <Col  style={{ paddingLeft: "5%", paddingBottom: "10%" }}>
                                <a href="https://filecoin.io/" target='_blank' rel="noreferrer" >
                                    <img className="logo-large" src={require("../../images/sponsors/filecoin1.png").default} alt=" " width="80%" left="20%" />

                                </a>
                            </Col>
                        </Row>
                    </div>

                </section>

                <section id="Tier3" style={{ width: "80%", paddingTop: "5%" , height:"30%"}}>

                    <div style={{ padding: "5%" }}>
                        <Row lg={12} style={{ justifyContent: "center", color: "white", fontSize: "2rem" }}>
                            <HeadingH2>TIER 3</HeadingH2>
                        </Row>
                        <Row className="justify-content-md-center" lg={6} md={12} s={12}>
                            <Col style={{ paddingLeft: "5%", paddingBottom: "12%" }}>
                                <a href="https://www.echo3d.co/" target='_blank' rel="noreferrer">
                                    <img className="logo-large" src={require("../../images/sponsors/echo3d.png").default} alt=" " width="80%" left="20%" />

                                </a>

                            </Col>

                            <Col  style={{ paddingLeft: "5%", paddingBottom: "10%" }}>
                                <a href="https://www.geeksforgeeks.org/" target='_blank' rel="noreferrer" >
                                    <img className="logo-large" src={require("../../images/sponsors/gfg-new-logo.png").default} alt=" " width="80%" left="20%" />

                                </a>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center" lg={6} md={12} s={12}>

                            <Col  style={{ paddingLeft: "5%", paddingBottom: "10%" }}>
                                <a href="https://www.spartificial.com/" target='_blank' rel="noreferrer">
                                    <img className="logo-large" src={require("../../images/sponsors/spartificial.png").default} alt=" " width="80%" left="20%" />

                                </a>
                            </Col>

                            <Col  style={{ paddingLeft: "5%", paddingBottom: "10%" }}>
                                <a href="https://gen.xyz/" target='_blank' rel="noreferrer">
                                    <img className="logo-large" src={require("../../images/sponsors/p-.xyz_logo.png").default} alt=" " width="50%" left="40%" />

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
