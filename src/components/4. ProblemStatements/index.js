import React from 'react';
import { ProblemWrapper } from './problemstatements';
import { Container, HeadingH1 } from "../Commons";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from "react-grid-system";



const ProblemStatements = () => {

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: 'dark',
                },
            }),
        []
    );
    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            backgroundColor: "#424242",
            color: "#fff",
            borderRadius: "1.5vh",
            borderColor: "#FFF",
            borderWidth: "3px",
        },
        title: {
            fontSize: 30,
            fontWeight: "4pt",
            color: "#fff",
        },
    });
    const classes = useStyles();
    return (

        <>
            <Container id="problem-statements">
                <HeadingH1>Tracks</HeadingH1>
                < ProblemWrapper>
                    
                    <ThemeProvider theme={theme}>
                        <Row className="justify-content-md-center" lg={4} md={3} s={12}>
                            <Col
                                style={{
                                    paddingBottom: "2vh",
                                    paddingTop: "2vh",
                                    flexDirection: "column",
                                }}
                            >
                                <Card className={classes.root} >
                                    <CardContent>
                                        <Typography className={classes.title} color="text.secondary" gutterBottom>
                                            Ed-Tech
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="text.secondary" gutterBottom>
                                            Fin-Tech
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Col>

                            <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="text.secondary" gutterBottom>
                                            Waste-Tech
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Col>

                            <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="text.secondary" gutterBottom>
                                            Open-Track
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Col>

                        </Row>

                        <Row className="justify-content-md-center" lg={4} md={3} s={12}>
                            <Col
                                style={{
                                    paddingBottom: "2vh",
                                    paddingTop: "2vh",
                                    flexDirection: "column",
                                }}
                            >
                                <Card className={classes.root} >
                                    <CardContent>
                                        <Typography className={classes.title} color="text.secondary" gutterBottom>
                                            AI Track
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Col>
                            <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography className={classes.title} color="text.secondary" gutterBottom>
                                            Block-chain
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Col>

                        </Row>

                    </ThemeProvider>
                </ ProblemWrapper>

            </Container>
        </>
    )
}

export default ProblemStatements;
