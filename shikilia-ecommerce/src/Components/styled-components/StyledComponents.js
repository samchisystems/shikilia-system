import styled from 'styled-components'
import { Col, Row, Button, Card } from 'react-bootstrap'


export const Section = styled.section`
    background: ${({backgroundColor}) => (
        backgroundColor === "Default" ? "#172b4d" : 'transparent'
    )};
`;


export const Container = styled.div`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block" 
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "end" ? "flex-end" : "center" 
    )};
    margin: ${({margin}) => (
        margin === "0-5-0-0" ? "0rem 10rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "0-0-2-0" ? "0rem 0rem 2rem rem !important" : "0rem 0rem 0rem 0rem"
    )};
`;


export const Wrapper = styled.div``;


export const Title1 = styled.h1``;


export const Title2 = styled.h2``;


export const Title3 = styled.h3``;


export const Placeholder = styled.p``;


export const TargetLink = styled.a`
    text-decoration: none !important;
    color: white;
    margin: ${({margin}) => (
        margin === "2-2-2-0" ? "2rem 2rem 2rem 0rem !important" : "0rem 0rem 0rem 0rem"
    )};
    cursor: pointer !important;
    transition: all 0.3s;
   
    &:hover {
        text-decoration-none !important;
        color: #5e72e4;
    }
`;


export const Image = styled.img`
    height: ${({height}) => (
        height === "50" ? "50px" : "100%"
    )};
`;


export const Rows = styled(Row)``;


export const Column = styled(Col)`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "end" ? "flex-end" : "center" 
    )};
    margin: ${({margin}) => (
        margin === "0-0-2-0" ? "0rem 0rem 2rem rem !important" : "0rem 0rem 0rem 0rem"
    )};
`;


export const Buttons = styled(Button)``;


export const Cards = styled(Card)``;