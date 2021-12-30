import React from 'react';
import Faq from 'react-faq-component';
import { Container, HeadingH1 } from "../Commons"
import { FAQWrapper } from './faqwrap';

const data = {
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
        },
        {
            title: "What is the package version",
            content: "v1.0.5"
        },
        {
            title: "Lorem ipsum dolor sit amet,",
            content: "Lorem ipsum dolor sit amet, consectetur "
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
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
                        rowTitleTextSize: '25px',
                        rowContentColor: "#fff",
                        rowContentTextSize: '20px',
                        rowContentPaddingTop: '10px',
                        rowContentPaddingBottom: '10px',
                        rowContentPaddingLeft: '50px',
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
