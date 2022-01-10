import React from 'react'
import Facebook from "../../assets/img/facebook-square-brands.svg";
import Instagram from "../../assets/img/instagram-square-brands.svg";
import Twitter  from "../../assets/img/twitter-square-brands.svg";
import Search from "../../assets/img/search-solid.svg";
import styled from 'styled-components';


export default function Contact() {
    return (
        <>
        <Container>
            <DivContainer>
                <FirstContainer>
                    <Form>
                        <Input type="text" placeholder='name'>
                        </Input>
                        <Input type="email" placeholder='mail'>
                        </Input>
                        <Message type="Textarea" placeholder='message'>
                        </Message>
                    </Form>
                </FirstContainer>
                <SecondContainer>
                    <P>120 Curabitur sed tortor ultrices,
                    congue odio eget, posuere urna.
                    Praesent at rhoncus 10680</P>
                    <Span>Tel: 010-020-0340</Span>
                    <ImageContainer>
                        <Img src={Facebook} alt="Image"/>
                    
                        <Img src={Instagram} alt="Image"/>
                   
                        <Img src={Twitter} alt="Image"/>
                    </ImageContainer>
                   
                </SecondContainer>
                <ThridContainer>
                    <ItemImage>
                        <Item src={Search} alt="image"/>
                    </ItemImage>
                    <H1>Contact</H1>
                </ThridContainer>
            </DivContainer>
            </Container>
            <Footer>
                	<H5>copyright&copy;nano-folio 2020 co.ld.Ltd Desigh TemplateMo</H5>
            </Footer>
        </>
        
        
    )
}

const Container=styled.div`
    padding:0 12% 12% 12%;
    display:flex;

`;
const DivContainer=styled.div`
padding: 13% 6% 8% 11%;
background-color:#58cccd;
display: flex;
border-radius: 2%;
`;
const FirstContainer=styled.div``;
const Form=styled.form`
margin-top: -26%;
`;
const Input=styled.input`
border: 0;
border-bottom:2px solid #fff;
background: transparent;
margin-bottom: 10%;
width:94%;
`;
const SecondContainer=styled.div`
    margin-left: 6%;`;
const P =styled.p`
    color: #fff;
    font-size: 20px;
    margin-top: -64px;
    `;
const Span=styled.span`
color: #fff;
    font-size: 19px;
    margin-bottom: 30px;
    display: block;
    margin-top: 45px;
`;
const ImageContainer=styled.div`
width:10%;
display:flex;
`;
const Img=styled.img`
width: 100%;
display: block;
color: #fff;
margin-left: 24%;
filter: invert(1);
`;
const ThridContainer=styled.div``;
const ItemImage=styled.div`
width:20%;
width: 20%;
    margin-top: -21%;
    /* margin-bottom: 25%; */
    margin-left: 43%;
    `;
const Item=styled.img`
width:100%;
display:block;
filter: invert(1);
`;
const H1=styled.h1`
    color: #ffff;
    font-size: 26px;
    margin-left: 38px;
`;
const Message = styled.textarea`
border: 0;
border-bottom:2px solid #fff;
background: transparent;
margin-bottom: 10%;
width:94%
`;
const Footer =styled.footer``;
const H5=styled.h5`
    text-align: center;
    margin-top: -9%;
    opacity: .5;
    font-size: 17px;
`;


