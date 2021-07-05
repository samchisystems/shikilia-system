import React from 'react'
import { productCategorysData } from '../../Data/menuData'
import Navigation from '../common-components/Navigation'
import { Placeholder, Cards, Column, Rows, Container, Section, TargetLink } from '../styled-components/StyledComponents'
import CategoryIcon from '@material-ui/icons/Category'; //Category
import LocalMallIcon from '@material-ui/icons/LocalMall'; // Clothing
import DevicesIcon from '@material-ui/icons/Devices'; //Electronic
import WatchIcon from '@material-ui/icons/Watch'; //Watch
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import HomeIcon from '@material-ui/icons/Home';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Home() {
    return (
        <React.Fragment>
            {/* Navigation Section */}
            <Section>
                <Navigation/>
            </Section>
            <Section margin="1-0-0-0">
                <Container display="flex">
                    <Rows width="100">
                        <Column md={4} className="ml-5">
                            <Cards width="336">
                                {productCategorysData.map(productCategory => (
                                    <TargetLink
                                        key={productCategory.id}
                                        display="flex"
                                        justifyContent="start"
                                        borderBottom={productCategory.border}
                                        background={productCategory.background}
                                        hoverBackground={productCategory.hoverBackground}
                                        color={productCategory.color}
                                        hoverColor="white"
                                        padding="1-1-1-1"
                                    >
                                        <Rows width="100">
                                            <Column md={2} display="flex" justifyContent="start">
                                                <Container>
                                                    {
                                                        productCategory.icon === "CategoryIcon" ? <CategoryIcon/> : <></> &&
                                                        productCategory.icon === "LocalMallIcon" ? <LocalMallIcon/> : <></> &&
                                                        productCategory.icon === "DevicesIcon" ? <DevicesIcon/> : <></> &&
                                                        productCategory.icon === "WatchIcon" ? <WatchIcon/> : <></>&&
                                                        productCategory.icon === "LocalHospitalIcon" ? <LocalHospitalIcon /> : <></>&&
                                                        productCategory.icon === "ChildCareIcon" ? <ChildCareIcon/> : <></>&&
                                                        productCategory.icon === "SportsFootballIcon" ? <SportsFootballIcon/> : <></>&&
                                                        productCategory.icon === "HomeIcon" ? <HomeIcon /> : <></>
                                                        
                                                    }
                                                </Container>
                                            </Column>
                                            <Column md={8} display="flex" justifyContent="start">
                                                <Container>
                                                        {productCategory.placeHolder}
                                                </Container>
                                            </Column>
                                            <Column md={1}>
                                                <Container>
                                                    {productCategory.forwardArrow ? <ArrowForwardIosIcon/> : <></>}
                                                </Container>
                                            </Column>
                                        </Rows>
                                    </TargetLink>
                                ))}
                            </Cards>
                        </Column>
                        <Column md={7}>
                            <Cards>Hello</Cards>
                        </Column>
                    </Rows>
                </Container>
            </Section>
        </React.Fragment>
    )
}

export default Home
