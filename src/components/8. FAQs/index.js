import React from 'react';
import Faq from 'react-faq-component';
import { Container, HeadingH1 } from "../Commons"
import { FAQWrapper } from './faqwrap';

const data = {
    rows: [
        {
            title: "WHAT IS A HACKATHON?",            
            content: "A hackathon is a social coding event where programmers, designers and developers collaborate to solve a real life problem and compete for cash prizes. It’s one part party, one part work-your-butt-off overnight battle against the clock and the competition."
        },
        {
            title: "WHO IS THIS EVENT FOR?",
            content: "Budding problem solvers who wish to provide a feasible solution to a real life problem."
        },
        {
            title: "WHAT IS THE ELIGIBILITY?",
            content: "This event is open to students of all universities and colleges. A team of maximum 4 and minimum 2 participants can participate in this event. Teams  can be formed between students of the same or different colleges."
        },
        {
            title: "HOW MUCH DOES IT COST?",
            content: "It is absolutely free of cost for all participants of all teams. Moreover, all teams can use the resources of the sponsor companies."
        },
        {
            title: "WILL THERE BE PRIZES?",
            content: "Absolutely. Check out our prize page for details."
        },
        {
            title: "HOW WILL THE HACKATHON BE CONDUCTED?",
            content: "All the rounds will be conducted online."
        }
    ]
}

const FAQs = () => {
    return (
        <>
            <Container id="faqs">
                <HeadingH1>FAQs</HeadingH1>
                <FAQWrapper>
                <Faq
                    data={data}
                    styles={{
                        bgColor: "#121c27",
                        rowTitleColor: "#fff",
                        rowTitleTextSize: '20px',
                        rowContentColor: "#fff",
                        rowContentTextSize: '20px',
                        rowContentPaddingTop: '10px',
                        rowContentPaddingBottom: '10px',
                        rowContentPaddingLeft: '10px',
                        arrowColor: "#fff",
                        padding: "10px",
                    }}
                />
            </FAQWrapper>
            </Container>
        </>
    )
}

export default FAQs;
