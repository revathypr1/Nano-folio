import React from 'react'
import styled from "styled-components"
 

export default function Spotlight() {
    return (
        <Container>
            <DivContainer>
                <Span>&#10084;</Span>
                <H1>Nano folio</H1>
            </DivContainer>
        </Container>
    )
}
const Container=styled.div`
    margin: 10% 12% 12% 12%;
   height:90%;
`;
const DivContainer=styled.div`
    background-color:#ee6598;
    padding:12% 12% ;
    border-radius:2%;      
`;
const Span=styled.span`
   justify-content:center;
    color:#fff;
    font-size:45px;
    text-align:center;
    display:block;
`;
const H1=styled.h1`
color:#fff;
font-size:28px;
text-align:center;
`;
