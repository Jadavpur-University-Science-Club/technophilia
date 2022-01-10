import React from 'react';
import { Container } from './problemstatements';
import { HeadingH1 } from "../Commons";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
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
            createTheme({
                palette: {
                    type: 'dark',
                },
            }),
        []
    );
    const useStyles = makeStyles({
        root: {
            Width: 100,
            backgroundColor: "#101522",
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


        <Container id="problem-statements" style={{ background: "#0c233b" }}>
            <HeadingH1 style={{ paddingTop: "0px" }}>Tracks</HeadingH1>
            <section style={{ width: "80%" }}>
                <ThemeProvider theme={theme}>
                    <Row className="justify-content-md-center" lg={3} md={3} s={12}>
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
                                        Waste Sorting 🗑️
                                    </Typography>
                                    <Typography variant="body2">
                                        Design a smart waste collection system to help segregation of waste efficiently.
                                    </Typography>

                                    {/* <Typography variant="body2">
                                        Design a smart waste collection system to help segregation of waste efficiently. The system should allow the citizens to sort the different types of solid waste they want to dispose and the authorities to collect it in the sorted manner. It should have 2 interfaces- for the Citizen and for the Collector.
                                        </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="text.secondary" gutterBottom>
                                        Hostel Management 🏠
                                    </Typography>
                                    <Typography variant="body2">
                                        Design a smart hostel management system to help the students to stay at their hostels efficiently.
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Col>

                        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="text.secondary" gutterBottom>
                                        Sanitation 🚽
                                    </Typography>
                                    <Typography variant="body2">
                                        Design a smart sanitation system to help the citizens to stay clean efficiently.
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Col>



                    </Row>

                    <Row className="justify-content-md-center" lg={3} md={3} s={12}>
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
                                        Online Education 📚
                                    </Typography>
                                    <Typography variant="body2">
                                        Design a smart online education system to help the students to learn efficiently.
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="text.secondary" gutterBottom>
                                        Hospital Management 🏥
                                    </Typography>
                                    <Typography variant="body2">
                                        Design a smart hospital management system to help the patients avail the facilities.
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">a
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Col>
                        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="text.secondary" gutterBottom>
                                        Finance Planners 💵
                                    </Typography>
                                    <Typography variant="body2">
                                        Design a smart finance planner system to help students to manage their finances efficiently.
                                    </Typography>
                                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                            adjective
                                        </Typography>
                                        <Typography variant="body2">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography> */}
                                </CardContent>
                                <CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>
                            </Card>
                        </Col>

                    </Row>

                </ThemeProvider>
            </section>

        </Container>

    )
}

export default ProblemStatements;
