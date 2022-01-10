import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        backgroundColor : "#0e2a47",
        borderRadius: "10px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },

}));

export default function CustomizedTimeline() {
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: 'dark',
                },
            }),
        []
    );

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            11 Janary 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Registrations Start
                            </Typography>
                            <Typography>Registration Begin!!!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            19 January 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Registration Ends
                            </Typography>
                            <Typography>Please Hurry!!!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            20 January 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Hackathon Starts
                            </Typography>
                            <Typography>Prepare to Hack!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            31 January 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Hackathon Ends!
                            </Typography>
                            <Typography>Finally the war is over!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            1 February 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Hackathon Results!
                            </Typography>
                            <Typography>Yay!!! Find out the winners!!!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </ThemeProvider>
    );
}
