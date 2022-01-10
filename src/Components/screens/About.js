import React from 'react'
import styled from 'styled-components'
import admin from "../../assets/img/Admin.svg"


export default function About() {
    return (
        <Container>
            <DivContainer>
                <LeftContainer>
                    <Img src={admin} alt="image"/>
                    <H1>About Us</H1>
                </LeftContainer>
                <RightContainer>
                    <P>Nano Folio is simple HTML template with a minimal very light-weight custom CSS file.
                        Max content width is 940 pixels. You can easily change the width or any part in this 
                        template.Gallery comes with a pop-up image and simple categories</P>
                    <P1>Please support Troplate website by telling your friendsabout it. That is going to be very helpful for us Feel free
                        <Span> messages</Span> to say.</P1>
                </RightContainer>
            </DivContainer>
        </Container>
    )
}

const Container=styled.div`
    padding:0 12% 12% 12%;
    display:flex;
`;
const DivContainer=styled.div`
    padding: 8% 3% 6% 9%;
    background-color:#58cccd;
    display:flex;
    justify-content:space-between;
    border-radius: 2%;
`;
const LeftContainer=styled.div`
    
    width: 15%;
`;
const Img=styled.img`
    color:#fff;
    width: 100%;
    display: block;
    margin: 71px 56px auto;
    
`;
const H1=styled.h1`
    color: #fff;
    font-size: 20px;
    margin-left: 64%;
    width: 99%;
    `;
const RightContainer=styled.div`
    margin-left: 30%;
`;
const P=styled.p`
    color: #fff;
    font-size: 18px;
    width: 89%;
    margin-bottom: 17%;
`;
const P1=styled.p`
    color: #fff;
    font-size:18px;
`;
const Span=styled.span`
    color: green;
`;

