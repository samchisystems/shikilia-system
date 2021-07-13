import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Buttons, InputField, Column, Rows, Container, Section, Image, Placeholder, TargetLink } from '../styled-components/StyledComponents';
import SearchIcon from '@material-ui/icons/Search';
import { aboutShikiliaData, aboutVendorsData, helpData } from '../../Data/footerData';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            color: "white",
            borderColor: "white !important"
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '&:hover .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#172b4d',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#172b4d',
            },
        },
    },
}));

function Footer() {
    const classes = useStyles();


    const [email, setEmail] = useState();

    return (
        <Section margin="1-0-0-0">
            {/* Section One - Email Subsription */}
            <Section backgroundColor="primary">
                <Container display="flex" padding="3-0-3-0" margin="2-2-1-5">
                    <Rows width="100">
                        {/* Logo */}
                        <Column md={6}>
                            <Container display="flex" alignItems={true}>
                                <Image 
                                    src = "https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" 
                                    alt = "Shikilia Logo"
                                    height = "80"
                                    width="200"
                                />
                            </Container>
                        </Column>
                        <Column md={6}>
                            <Container height="35">
                                <Container>
                                    <Placeholder fontSize="25">NEW TO SHIKILIA?</Placeholder>
                                </Container>
                                <Container>
                                    <Placeholder fontSize="20">Subscribe to our newsletter to get updates on our latest offers!</Placeholder>
                                </Container>
                                <Container>
                                    <form>
                                        <InputField
                                            className = {classes.root}
                                            id = "searchField"
                                            label = "Search Here"
                                            type="email"
                                            value = {email}
                                            onChange = {e => setEmail(e.target.value)}
                                        />
                                        <Buttons
                                            className = "ml-3"
                                            background="Default"
                                            hoverColor = "Default"
                                            padding="0.8-1-0.8-1"
                                            hoverBorder = {true}
                                        >
                                            subscribe
                                        </Buttons>
                                    </form>
                                </Container>
                            </Container>
                        </Column>
                    </Rows>
                </Container>
            </Section>
            

            {/* Section 2 */}
            <Section backgroundColor="Default">
                <Container display="flex" margin="2-0-0-0">
                    <Rows 
                        width="70"
                    >

                        {/* Let us help you */}
                        <Column 
                            md={4} 
                            // margin="0-0-0-2"
                        >
                            <Container>
                                <Placeholder className="mb-3" fontSize="25">LET US HELP YOU</Placeholder>
                                {helpData.map(help => (
                                    <TargetLink 
                                        key={help.id}
                                        decoration={true}
                                    >
                                        {help.placeholder}
                                    </TargetLink>
                                ))}
                            </Container>
                        </Column>

                        {/* ABOUT SHIKILIA */}
                        <Column md={4}>
                            <Container>
                                <Placeholder className="mb-3" fontSize="25">ABOUT SHIKILIA</Placeholder>
                                {aboutShikiliaData.map(about => (
                                    <TargetLink 
                                        key={about.id}
                                        decoration={true}
                                    >
                                        {about.placeholder}
                                    </TargetLink>
                                ))}
                            </Container>
                        </Column>

                        {/* MAKE MONEY WITH SHIKILIA */}
                        <Column md={4}>
                            <Container>
                                <Placeholder className="mb-3" fontSize="25">MAKE MONEY WITH SHIKILIA</Placeholder>
                                {aboutVendorsData.map(vendor => (
                                    <TargetLink 
                                        key={vendor.id}
                                        decoration={true}
                                    >
                                        {vendor.placeholder}
                                    </TargetLink>
                                ))}
                            </Container>
                        </Column>
                    </Rows>

                    
                </Container>
            </Section>
        </Section>
    )
}

export default Footer
