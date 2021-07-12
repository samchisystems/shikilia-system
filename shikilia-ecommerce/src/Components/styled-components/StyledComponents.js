import styled, { css }  from 'styled-components/macro';
import { Col, Row, Button, Card } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom'


export const Section = styled.section`
    background: ${({backgroundColor}) => (
        backgroundColor === "Default" ? "#172b4d" : 'transparent' &&
        backgroundColor === "primary" ? "#5e72e4" : 'transparent'
    )};
    overflow-x: hidden;
    overflow-y: hidden;
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "2rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
    padding: ${({padding}) => (
        padding === "0-7.5-0-7.5" ? "0rem 7.5rem 1rem 7.5rem" : "0rem 0rem 0rem 0rem"
    )};
`;


export const Container = styled.div`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block" 
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "end" ? "flex-end" : "center" &&
        justifyContent === "start" ? "flex-start" : "center"
    )};
    margin: ${({margin}) => (
        margin === "0-0-0--6" ? "0rem 0rem 0rem -6rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "0-0-2-0" ? "0rem 0rem 2rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-0-0-0" ? "2rem 0rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-2-1-0" ? "2rem 2rem 1rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-2-1-0" ? "2rem 2rem 1rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-2-1-5" ? "0rem 0rem 2rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-0-0-0" ? "2rem 0rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem"
    )};
    padding: ${({padding}) => (
        padding === "1-0-1-0" ? "1rem 0rem 1rem 0rem" : "0rem 0rem 0rem 0rem !important" &&
        padding === "3-0-3-0" ? "3rem 0rem 3rem 0rem" : "0rem 0rem 0rem 0rem !important"
    )};
    background: ${({backgroundColor}) => (
        backgroundColor === "Default" ? "#172b4d" : 'transparent' &&
        backgroundColor === "primary" ? "#5e72e4" : 'transparent' 
    )};
    width: ${({width}) => (
        width === "99" ? "290px !important" : "100%" &&
        width === "850" ? "850px !important" : "100%" &&
        width === "280" ? "280px !important" : "100%"
    )};
    height: ${({height}) => (
        height === "35" ? "35px" : "100%" &&
        height === "185" ? "185px" : "100%" &&
        height === "280" ? "280px" : "100%"
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "300" ? "300px" : "0px"
    )};
    border: ${({border}) => (
        border ? "1px Solid black" : "none" 
    )};
    align-items: ${({alignItems}) =>(
        alignItems === "center" ? "center" : ""
    )};
    transition: all 0.3s;

    &:hover {
        filter: ${({dropShadow}) => (
        dropShadow ? "drop-shadow(0 1px 1px rgba(0,0,0,0.12))" : "none"
    )};
    }
`;


export const Wrapper = styled.div``;


export const Title1 = styled.h1`
    font-wight: bold !important;
    color: ${({color}) => (
        color === "Default" ? "#172b4d" : "white" &&
        color === "primary" ? "#5e72e4" : "white"
    )};
    text-align: ${({textAlign}) => (
        textAlign === "center" ? "center" : ""
    )};
`;


export const Title2 = styled.h2`
    font-wight: bold !important;
    color: ${({color}) => (
        color === "Default" ? "#172b4d" : "white" &&
        color === "primary" ? "#5e72e4" : "white"
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem !important" : "0px 0px 0px 0px"
    )};
    text-align: ${({textAlign}) => (
        textAlign === "center" ? "center" : ""
    )};
`;


export const Title3 = styled.h3`
    font-wight: bold !important;
    color: ${({color}) => (
        color === "Default" ? "#172b4d" : "white" &&
        color === "primary" ? "#5e72e4" : "white"
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem !important" : "0px 0px 0px 0px" &&
        margin === "1-1-0-0" ? "1rem 0rem 0rem 2rem !important" : "0px 0px 0px 0px"
    )};
    text-align: ${({textAlign}) => (
        textAlign === "center" ? "center" : ""
    )};
`;


export const Placeholder = styled.p`
    color: ${({color}) => (
        color === "Default" ? "#172b4d" : "white" &&
        color === "primary" ? "#5e72e4" : "white"
    )};
    margin: ${({margin}) => (
        margin === "0-0-0-0" ? "1rem 0rem 0rem 0rem !important" : "0px 0px 0px 0px" &&
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem !important" : "0px 0px 0px 0px" &&
        margin === "0.3-0-0-0.5" ? "0.3rem 0rem 0rem 0.5rem !important" : "0px 0px 0px 0px" &&
        margin === "0.5-0-0-0.5" ? "0.2rem 0rem 0rem 0.5rem !important" : "0px 0px 0px 0px" &&
        margin === "0.5-0-1-0.5" ? "0.2rem 0rem 1rem 0.5rem !important" : "0px 0px 0px 0px"
    )};
    text-align: ${({textAlign}) => (
        textAlign === "center" ? "center" : ""
    )};
    font-size: ${({fontSize}) => (
        fontSize === "25" ? "25px" : "17px" &&
        fontSize === "21" ? "21px" : "17px"
    )};
`;


export const Form = styled.form``;


export const TargetLink = styled(Link)`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block" 
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "end" ? "flex-end" : "center" &&
        justifyContent === "start" ? "flex-start" : "center"
    )};
    text-decoration: none !important;
    // width: 100%;
    color: ${({color}) => (
        color === "Default" ? "#172b4d !important" : "white" &&
        color === "primary" ? "#5e72e4" : "white"
    )};
    background: ${({background}) => (
        background === "Default" ? "#172b4d !important" : "transparent" &&
        background === "primary" ? "#5e72e4 !important" : "transparent"
    )};
    margin: ${({margin}) => (
        margin === "2-2-2.5-0" ? "2rem 2rem 1rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-0-0-0" ? "1.5rem 0rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "2-2-0-0" ? "2rem 2rem 0rem 2rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "1-2-0-1" ? "1rem 2rem 1rem 2rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "1-1-1-1" ? "1rem 1rem 1rem 1rem !important" : "0rem 0rem 0rem 0rem"
    )};
    padding: ${({padding}) => (
        padding === "1-1-1-1" ? "1rem 1rem 1rem 1rem !important" : "0rem 0rem 0rem 0rem"
    )};
    border-left: ${({border}) => (
        border ? "1px solid white" : "none"
    )};
    border-bottom: ${({borderBottom}) => (
        borderBottom ? "1px solid #DADADA" : ""
    )};
    cursor: pointer !important;
    transition: all 0.3s;
   
    &:hover {
        text-decoration: ${({decoration}) => (
            decoration ? "underline !important" : "none !important"
        )};
        color: ${({hoverColor}) => (
            hoverColor === "Default" ? "#172b4d !important" : "white !important" &&
            hoverColor === "primary" ? "#5e72e4 !important" : "white !important"
        )};
        background: ${({hoverBackground}) => (
            hoverBackground === "Default" ? "#172b4d !important" : "transparent" &&
            hoverBackground === "primary" ? "#5e72e4 !important" : "transparent"
        )};
        transform: ${({transform}) => (
            transform ? "scale(1.01) !important" : ""
        )};
    }
`;


export const Image = styled.img`
    height: ${({height}) => (
        height === "20" ? "20px" : "100%" &&
        height === "50" ? "50px" : "100%" &&
        height === "80" ? "80px" : "100%" &&
        height === "150" ? "250px" : "100%" &&
        height === "450" ? "450px" : "100%" &&
        height === "555" ? "555px" : "100%"
    )};
    width: ${({width}) => (
        width === "20" ? "20px" : "100%" &&
        width === "80" ? "80px" : "100%" &&
        width === "125" ? "125px" : "100%" &&
        width === "200" ? "200px" : "100%"&&
        width === "360" ? "360px" : "100%"
    )};
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === "1-0-0-1" ? "1rem 0rem 0rem 1rem" : "0rem 0rem 0rem 0rem" &&
        margin === "2-0-2-0" ? "2rem 0rem 2rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === "2-1-2-1" ? "2rem 1rem 2rem 1rem" : "0rem 0rem 0rem 0rem" &&
        margin === "1-5-0-0" ? "1rem -10rem 0rem 0rem" : "0rem 0rem 0rem 0rem" 
    )};
    filter: ${({dropShadow}) => (
        dropShadow ? "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.27))" : "none"
    )};
    object-fit: cover;
`;


export const Rows = styled(Row)`
    width: ${({width}) => (
        width === "70" ? "70%" : "100%" &&
        width === "100" ? "100%" : ""
    )};
    height: ${({height}) => (
        height === "148" ? "130px" : "100%"
    )};
    margin: ${({margin}) => (
        margin === "3-0-0-5" ? "3rem 0rem 0rem 5rem" : "0rem 0rem 0rem 0rem" &&
        margin === "1.5-10-0-10" ? "1.5rem 10rem 0rem 10rem" : "0rem 0rem 0rem 0rem"
    )};
    padding: ${({padding}) => (
        padding === "3-0-0-5" ? "5rem 0re 0rem 0rem !important" : "0rem 0rem 0rem 0rem"
    )};
    background: ${({backgroundColor}) => (
        backgroundColor === "Default" ? "#172b4d" : 'transparent' &&
        backgroundColor === "primary" ? "#5e72e4" : 'transparent'
    )};
`;


export const Column = styled(Col)`
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "end" ? "flex-end" : "center !important" &&
        justifyContent === "start" ? "flex-start" : "center !important" 
    )};
    margin: ${({margin}) => (
        margin === "0-0-0-0" ? "0rem 0rem -5rem 0rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "1-0-0-0" ? "2rem 0rem 2rem 2rem !important" : "0rem 0rem 0rem 0rem" &&
        margin === "0-0-0-2" ? "0rem 0rem 0rem 2rem !important" : "0rem 0rem 0rem 0rem"
    )};
    width: 100%;
    
`;


export const Buttons = styled(Button)`
    border: none;
    background: ${({background}) => (
        background === "transparent" ? "transparent" : "transparent"&&
        background === "Default" ? "#172b4d" : "transparent" 
    )};
    color: ${({color}) => (
        color === "Default" ? "#172b4d !important" : "white !important"
    )};
    width: ${({width}) => (
        width === "100" ? "100%" : ""
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "20" ? "20px" : "0px" &&
        borderRadius === "21" ? "40px" : "0px"
    )};
    margin: ${({margin}) => (
        margin === '1-0-0-0' ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === '0-1-0-0' ? "0rem 1rem 0rem 0rem" : "0rem 0rem 0rem 0rem" &&
        margin === '0-4-0-0' ? "0rem 4rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
    padding: ${({padding}) => (
        padding === "1-1-1-1" ? "1rem 1rem 1rem 1rem" : "0rem 0rem 0rem 0rem" &&
        padding === "2-2-2-2" ? "1.5rem 1.5rem 1.5rem 1.5rem" : "0rem 0rem 0rem 0rem" &&
        padding === "0.8-1-0.8-1" ? "0.8rem 1rem 0.8rem 1rem" : "0rem 0rem 0rem 0rem" 
    )};
    z-index: 10000000;
    transition: .3s all;

    &:hover {
        color: ${({hoverColor}) => (
            hoverColor === "primary" ? "#5e72e4" : "#white !important" &&
            hoverColor === "Default" ? "#172b4d" : "#white !important"
        )};
        background: ${({hoverBackground}) => (
            hoverBackground === "primary" ? "#5e72e4" : "transparent" &&
            hoverBackground === "red" ? "red" : "transparent" &&
            hoverBackground === "black" ? "black" : "transparent" &&
            hoverBackground === "darkBlue" ? "#3b5998" : "transparent" &&
            hoverBackground === "lightBlue" ? "#1da1f2" : "transparent"
        )};
        border: ${({hoverBorder}) => (
            hoverBorder ? "2px Solid white" : "none"
        )};
        text-decoration: none;
        transform: scale(1.01) !important;
    }
`;


export const Cards = styled(Card)`
    background: #f4f5f7;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.12);
    width: ${({width}) => (
        width === "336" ? "373.5px" : "100%"
    )};
`;


export const InputField = styled(TextField)``;

export const Modals =styled(Modal)`
    
`;
