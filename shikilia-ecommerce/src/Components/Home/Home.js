import React, { useState, useEffect, useRef } from 'react'
import { productCategorysData } from '../../Data/menuData'
import Navigation from '../common-components/Navigation'
import { Image, Placeholder, Cards, Column, Rows, Container, Section, TargetLink, Title2, Title3, Buttons, SliderButtons, NextArrow, PrevArrrow } from '../styled-components/StyledComponents'
import CategoryIcon from '@material-ui/icons/Category'; //Category
import LocalMallIcon from '@material-ui/icons/LocalMall'; // Clothing
import DevicesIcon from '@material-ui/icons/Devices'; //Electronic
import WatchIcon from '@material-ui/icons/Watch'; //Watch
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import HomeIcon from '@material-ui/icons/Home';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ProductSliderData } from '../../Data/productSlider';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { guaranteeData } from '../../Data/randomData';
import ProductCard from '../common-components/ProductCard';
import { productsData } from '../../Data/productsData';

function Home() {
    const [sliderCurrent, setSliderCurrent] = useState(1);

    const productLength = ProductSliderData.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setSliderCurrent(slideCurrent => (slideCurrent === productLength - 1 ? 0 : slideCurrent + 1));
        }

        timeout.current = setTimeout(nextSlide, 6000);

        return function () {
            if(timeout.current){
                clearTimeout(timeout.current);
            }
        }
    }, [sliderCurrent, productLength]);

    const nextSlide = () =>{
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setSliderCurrent( sliderCurrent === productLength - 1 ? 0 : sliderCurrent + 1);
    };

    const prevSlide = () =>{
        if(timeout.current) {
            clearTimeout(timeout.current);
        }
        setSliderCurrent( sliderCurrent === 0 ? productLength - 1 : sliderCurrent - 1 );
    };

    if (!Array.isArray(ProductSliderData) || ProductSliderData.length <= 0){
        return null;
    }


    return (
        <React.Fragment>
            {/* Navigation Section */}
            <Section>
                <Navigation/>
            </Section>

            {/* Product category & slider category */}
            <Section margin="1-0-0-0">
                <Container display="flex">
                    <Rows width="100">
                        <Column md={3} className="ml-5">
                            <Container display="flex" justifyContent="end">
                                {/* Product Category Card */}
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
                            </Container>
                        </Column>
                        <Column md={8}>
                            <Cards>
                                {/* Product Slider */}
                                {ProductSliderData.map(productSlider => (
                                    <React.Fragment>
                                        {
                                            productSlider.id === sliderCurrent && (
                                                <Rows 
                                                    key={productSlider.id} 
                                                    margin="3-0-0-5"
                                                >
                                                    <Column md={5}>
                                                        <Container 
                                                            display="flex"
                                                            alignItems="center"
                                                            backgroundColor="primary"
                                                            borderRadius="300"
                                                            width="280"
                                                            height="280"
                                                        >
                                                            <Image
                                                                src={productSlider.image}
                                                                alt={productSlider.alt}
                                                                height="555"
                                                                width="360"
                                                                dropShadow={true}
                                                                margin="1-5-0-0"
                                                            />
                                                        </Container>
                                                    </Column>
                                                    <Column md={6}>
                                                        <Container>
                                                            <Title2 color="Default" margin="1-0-0-0">{productSlider.title}</Title2>
                                                            <Placeholder color="Default" margin="1-0-0-0">{productSlider.description}</Placeholder>
                                                            <Title3 color="Default" margin="1-0-0-0">KSHs {productSlider.price}</Title3>
                                                            <Buttons 
                                                                background="Default" 
                                                                hoverBackground="primary"
                                                                margin="1-0-0-0"
                                                                borderRadius="21"
                                                                padding="1-1-1-1"
                                                            >
                                                                SHOP NOW
                                                            </Buttons>
                                                        </Container>
                                                    </Column>
                                                </Rows>
                                            )
                                        }
                                    </React.Fragment>
                                ))}

                                {/* Arrow container */}
                                <Container display="flex" justifyContent="end" margin="2-2-1-0">
                                    <Buttons 
                                        background="Default"
                                        hoverBackground="primary"
                                        margin="0-1-0-0" 
                                        padding="1-1-1-1" 
                                        borderRadius="21"
                                        onClick={prevSlide}
                                    >
                                        <ArrowBackIcon/>
                                    </Buttons>
                                    <Buttons 
                                        background="Default"
                                        hoverBackground="primary"
                                        margin="0-4-0-0" 
                                        padding="1-1-1-1" 
                                        borderRadius="21"
                                        onClick={nextSlide}
                                    >
                                        <ArrowForwardIcon/>
                                    </Buttons>
                                </Container>

                                {/* Assuarance Statements */}
                                <Rows backgroundColor="Default">
                                    {guaranteeData.map(guarantee => (
                                        <Column md={4} key={guarantee.id}>
                                            <Container padding="1-0-1-0">
                                                <Container>
                                                    <Title3 textAlign="center">{guarantee.title}</Title3>
                                                    <Placeholder textAlign="center">{guarantee.desc}</Placeholder>
                                                </Container>
                                            </Container>
                                            
                                        </Column>
                                    ))}
                                </Rows>
                            </Cards>
                        </Column>
                    </Rows>
                </Container>
            </Section>

            <Section margin="1-0-0-0" padding="0-7.5-0-7.5" >
                <Container display="flex" backgroundColor="white">
                    <Cards>
                        <Container>
                            <Title3 color="Default" margin="1-1-0-0">Top selling items</Title3>
                        </Container>

                        {/* Product cards */}
                        <Container display="flex">
                            {/* Product Card */}
                            <Rows>
                                
                                {productsData.map(product => (
                                    <Column md={2} className="mb-5" key={product.id} margin = "1-0-0-0">
                                        <TargetLink>
                                            <ProductCard
                                                productImage = {product.productImg}
                                                title = {product.productTitle}
                                                currentPrice = {product.currentPrice}
                                                previousPrice = {product.previousPrice}
                                            />
                                        </TargetLink>
                                    </Column>
                                ))}
                                
                            </Rows>
                        </Container>
                    </Cards>
                </Container>
            </Section>
        </React.Fragment>
    )
}

export default Home
