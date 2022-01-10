import React from 'react'
import styled from 'styled-components';
import Image1 from "../../assets/img/tn-img-01.jpg"
import Image2 from "../../assets/img/tn-img-02.jpg"
import Image3 from "../../assets/img/tn-img-03.jpg"
import Image4 from "../../assets/img/tn-img-04.jpg"
import Image5 from "../../assets/img/tn-img-05.jpg"
import Image6 from "../../assets/img/tn-img-06.jpg"
import Image7 from "../../assets/img/tn-img-07.jpg"
import Image8 from "../../assets/img/tn-img-08.jpg"
import Image9 from "../../assets/img/tn-img-09.jpg"
import Image10 from "../../assets/img/tn-img-10.jpg"
import Image11 from "../../assets/img/img-11.jpg"
import Image12 from "../../assets/img/tn-img-12.jpg"


export default function Gallery() {
    return (
        <div>
            <DivContainer>
                <TopContainer>
                    <P>City</P>
                    <P>Nature</P>
                    <P>Potraits</P>
                    <Span>Clear All</Span>
                </TopContainer>
                <BottomContainer>
                    <ImageContainer>
                        <Img src={Image1} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image2} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image3} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image4} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image5} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image6} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image7} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image8} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image9} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image10} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image11} alt="image"/>
                    </ImageContainer>
                    <ImageContainer>
                        <Img src={Image12} alt="image"/>
                    </ImageContainer>
                </BottomContainer>
            </DivContainer>
            
        </div>
    )
}

const DivContainer=styled.div`
    padding:1% 10% 10% 10%`;
const TopContainer=styled.div`
    display:flex;
    justify-content:flex-end;
`;
const P =styled.p`
    font-size:20px ;
    color:#58cccd;
    margin-left:3%;
`;
const Span=styled.span`
    color:#ee6598;
    font-size:20px;
    margin:20px;
    display:block;
`;
const BottomContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;
const ImageContainer=styled.div`
    width: 21%;
    margin-left: 3%;
    margin-bottom: 3%;
   
`;
const Img =styled.img`
    width:100%;
    height:100%;
    display: block;
    border-radius: 8%;
    margin-left:20px;
`;

