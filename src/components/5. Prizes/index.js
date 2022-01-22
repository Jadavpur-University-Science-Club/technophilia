import React from 'react';
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container, HeadingH1} from "../Commons"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row, Col } from "react-grid-system";



const Prizes = () => {

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
            fontFamily: "Lato",
            fontSize: 30,
            fontWeight: "4pt",
            color: "#fff",
        },

        body: {
            fontFamily: "Lato",
            fontSize: 17,
            fontWeight: "2.3pt",
            color: "#fff",
        },
    });
    const classes = useStyles();
    return (
        <>
            <Container id="prizes">
                <HeadingH1>Prizes</HeadingH1>
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
                                    <Typography className={classes.title} color="text.secondary" align='center' gutterBottom>
                                        Echo 3D Prize
                                    </Typography>
                                    <Typography className={classes.body} variant="body2">
                                        Cash prize of $89 * 3 = $267 along with other free products
                                    </Typography>

                                    {/* <Typography variant="body2">
                                        Design a smart waste collection system to help segregation of waste efficiently. The system should allow the citizens to sort the different types of solid waste they want to dispose and the authorities to collect it in the sorted manner. It should have 2 interfaces- for the Citizen and for the Collector.
                                        </Typography> */}
                                </CardContent>
                                {/*<CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>*/}
                            </Card>
                        </Col>
                        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="text.secondary" align='center'  gutterBottom>
                                     Geeks For Geeks SeasonPrize
                                    </Typography>
                                    <Typography className={classes.body} variant="body2">
                                        Coupons worth ₹2500
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
                                 {/*<CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>*/}
                            </Card>
                        </Col>

                        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="text.secondary" align='center' gutterBottom>
                                        Fusion Prize
                                    </Typography>
                                    <Typography className={classes.body} variant="body2">
                                        Products worth $3600
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
                                 {/*<CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>*/}
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
                                    <Typography className={classes.title} color="text.secondary" align='center' gutterBottom>
                                        Spartificial Prize
                                    </Typography>
                                    <Typography className={classes.body} variant="body2">
                                        Cash prize of ₹5000 plus internship opportunities
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
                                 {/*<CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>*/}
                            </Card>
                        </Col>
                        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="text.secondary" align='center' gutterBottom>
                                        .xyz Prize
                                    </Typography>
                                    <Typography className={classes.body} variant="body2">
                                        Cash prize of $10 * 5 = $50
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
                                {/*<CardActions>
                                    <a href="https://docs.google.com/document/d/1VQCPZFCpqJi4EgEya-KsA_lpZfLbU5bo6jJk17k68yM/edit" target='_blank' rel="noreferrer">
                                        <Button size="small">Learn More</Button>
                                    </a>
                                </CardActions>*/}
                            </Card>
                        </Col>
                        

                    </Row>

                </ThemeProvider>
            </section>

                
            </Container>
        </>
    )
}

export default Prizes;
