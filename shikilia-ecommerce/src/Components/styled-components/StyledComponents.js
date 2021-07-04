import styled from 'styled-components';
import { Col, Row, Button, Card } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';


export const Section = styled.section`
    background: ${({backgroundColor}) => (
        backgroundColor === "Default" ? "#172b4d" : 'transparent' &&
        backgroundColor === "primary" ? "#5e72e4" : 'transparent'
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
        margin === "0-0-0--6" ? "0rem 0rem 0rem -6rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "0-0-2-0" ? "0rem 0rem 2rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-0-0-0" ? "2rem 0rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem"
    )};
    background: ${({backgroundColor}) => (
        backgroundColor === "Default" ? "#172b4d" : 'transparent' &&
        backgroundColor === "primary" ? "#5e72e4" : 'transparent'
    )};
    width: ${({width}) => (
        width === "850" ? "850px !important" : "100%"
    )};
    
`;


export const Wrapper = styled.div``;


export const Title1 = styled.h1``;


export const Title2 = styled.h2``;


export const Title3 = styled.h3``;


export const Placeholder = styled.p``;


export const Form = styled.form``;


export const TargetLink = styled.a`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block" 
    )};
    text-decoration: none !important;
    color: white;
    margin: ${({margin}) => (
        margin === "2-2-2.5-0" ? "2rem 2rem 1rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-0-0-0" ? "1.5rem 0rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-2-0-0" ? "2rem 2rem 0rem 2rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "1-2-0-1" ? "1rem 2rem 1rem 2rem !important" : "0rem 0rem 0rem 0rem"
    )};
    border-left: ${({border}) => (
        border ? "1px solid white" : "none"
    )};
    cursor: pointer !important;
    transition: all 0.3s;
   
    &:hover {
        text-decoration-none !important;
        color: ${({hoverColor}) => (
            hoverColor === "Default" ? "#172b4d" : "#5e72e4"
        )};
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
        margin === "0-0-0-0" ? "0rem 0rem -5rem 0rem !important" : "0rem 0rem 0rem 0rem"
    )};
    
`;


export const Buttons = styled(Button)`
    border: none;
    background: ${({background}) => (
        background === "transparent" ? "transparent" : "transparent"&&
        background === "Default" ? "#172b4d" : "transparent"
    )};
    color: ${({color}) => (
        color === "Default" ? "#172b4d" : "white"
    )};
    
    transition: .3s all;

    &:hover {
        color: ${({hoverColor}) => (
            hoverColor === "primary" ? "#5e72e4;" : "#white !important"
        )};
        background: ${({background}) => (
            background === "primary" ? "#172b4d" : "transparent" 
        )};
        text-decoration: none;
        transform: scale(1.20) !important;
    }
`;


export const Cards = styled(Card)``;


export const InputField = styled(TextField)``;

export const Modals =styled(Modal)`
    
`;