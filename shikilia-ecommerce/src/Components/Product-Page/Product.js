import React, { useState, useEffect } from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import { Buttons, Cards, Column, Container, Image, Placeholder, Rows, Section, TargetLink, Title1, Title2, Title3 } from '../styled-components/StyledComponents'
import Navigation from '../common-components/Navigation'
import Footer from '../common-components/Footer'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { productsData } from '../../Data/productsData';
import ProductCard from '../common-components/ProductCard';
import ModalCard from '../common-components/Modal';
import {useAuthState} from 'react-firebase-hooks/auth';
import {topMenuData } from '../../Data/menuData'
import {auth} from '../../config/firebase';

function Product() {
    const [quantity, setQuantity] = useState(1);
    const [baseRate, setBaseRate] = useState(1500);
    const [totalRate, setTotalRate] = useState(baseRate)
    const [user, loading] =useAuthState(auth);
    // history.push()
    const history = useHistory();
    const [modalStatus, setModalStatus] = useState(false);
    
    const addQuantity = () => {
        setQuantity(quantity + 1)
    }
    const subtractQuantity = () => {
        setQuantity(quantity - 1);
        if (quantity <= 1){
            setQuantity(1)
        }
    }

    useEffect(() => {
        setTotalRate(baseRate * quantity)
    }, [quantity]);

     const handleModal = () => {
        setModalStatus(!modalStatus)
    };
    return (
        <Section>
            {/* Navigation section*/}
            <Section>
                <Navigation/>
            </Section>
            
            {/* path section*/}
            <Section>
                <Container display="flex" justifyContent="start" className="ml-5 mt-2">
                    <TargetLink color="Default" hoverColor="primary" to="/">Home</TargetLink>
                    <Placeholder color="Default" className="ml-2 mr-2">{`>`}</Placeholder>
                    <TargetLink color="Default" hoverColor="primary">Electronics</TargetLink>
                    <Placeholder color="Default" className="ml-2 mr-2">{`>`}</Placeholder>
                    <TargetLink color="Default" hoverColor="primary">Iphone-12</TargetLink>
                </Container>
            </Section>

            {/* Product Details Section */}
            <Section>
                <Container display="flex">
                    <Rows 
                        width="100"
                        margin="1.5-10-0-10"
                    > 
                        {/* Images Section */}
                        <Column md={7} sm={12}>
                            <Cards>
                                <Container display="flex">
                                    <Image
                                        src="https://res.cloudinary.com/emacon-production/image/upload/v1625810077/Shikilia/ryan-hoffman-Ft4p5E9HjTQ-unsplash_nutqmt.jpg"
                                        margin="2-0-2-0"
                                        height="450"
                                        width="360"
                                    />
                                </Container>
                                <Container display="flex">
                                    {
                                        [
                                            'https://res.cloudinary.com/emacon-production/image/upload/v1625810077/Shikilia/ryan-hoffman-Ft4p5E9HjTQ-unsplash_nutqmt.jpg',
                                            'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-czLSitCJ3Dw-unsplash_ehfvuw.jpg',
                                            'https://res.cloudinary.com/emacon-production/image/upload/v1625810075/Shikilia/ryan-hoffman-A7f7XRKgUWc-unsplash_wk29tc.jpg',
                                            'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-Cs4GVbMqKGY-unsplash_r0jtis.jpg',
                                            'https://res.cloudinary.com/emacon-production/image/upload/v1625810074/Shikilia/ryan-hoffman-czLSitCJ3Dw-unsplash_ehfvuw.jpg'
                                        ].map((image, index) => (
                                            <Image
                                                key={index}
                                                src={image}
                                                margin="2-1-2-1"
                                                height="80"
                                                width="80"
                                            />
                                        ))
                                    }
                                </Container>
                            </Cards>
                        </Column>

                        {/* Description Section */}
                        <Column md={5} sm={12}>
                            <Cards>
                                {/* Store from / Vendor Name */}
                                <Container 
                                    backgroundColor="Default"
                                    width="150"
                                    display="flex"
                                    padding="0.5-0-0.5-0"
                                    margin="1.5-2-0-2"
                                >
                                    <Placeholder>STORE NAME</Placeholder>
                                </Container>

                                {/* Product Title & Description*/}
                                <Container
                                    margin="0.7-2-0-2"
                                >
                                    {/* Product Title */}
                                    <Title3 color="Default">Leather Bifold Wallet - Black</Title3>

                                    {/* Description */}
                                    <Placeholder 
                                        color="Default" 
                                        margin="1-0-0-0"
                                        padding="0-2-0-0"
                                    >
                                        Made from premium cow leather and vegetable tanned to achieve a smooth and premium feel. This is part of our Lux Collection which features products made from the best materials and with the finest craftsmanship. 
                                    </Placeholder>

                                    {/* Features */}
                                    <ul>
                                        {
                                            [
                                                "Premium cow leather",
                                                "Vegetable tanned",
                                                "9cm width x 10cm height",
                                                "4 main card slots",
                                                "2 larger slots for additional cards",
                                                "Cash compartment"
                                            ].map((feature, index) => (
                                                <li key={index}>
                                                    <Placeholder
                                                        color="Default"
                                                        padding="0-2-0-0"
                                                        margin="0.5-0-0-0"
                                                    >
                                                        {feature}
                                                    </Placeholder>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    {/* Any other information */}
                                    <Placeholder
                                        color="Default"
                                        padding="0-2-0-0"
                                    >
                                        Please note: Due to leather being a natural material, it will patina well over weeks and months.
                                    </Placeholder>
                                </Container>

                                {/* QUANTITY */}
                                <Container 
                                    margin="1.5-2-0-2"
                                >
                                    <Placeholder color="Default">QUANTITY</Placeholder>

                                    {/* Add and subtract quantity */}
                                    <Container
                                        width="150"
                                        margin="1-0-0-0"
                                    >
                                        <Rows>
                                            {/* Remove Button */}
                                            <Column md={2} sm={2}>
                                                <Container display="flex">
                                                    <TargetLink 
                                                        color="Default" 
                                                        hoverColor="primary"
                                                        onClick={subtractQuantity}
                                                    >
                                                        <RemoveIcon/>
                                                    </TargetLink>
                                                </Container>
                                            </Column>

                                            {/* Quantity */}
                                            <Column md={7} sm={8}>
                                                <Container display="flex">
                                                    <Placeholder color="Default" fontSize="21">
                                                        {quantity}
                                                    </Placeholder>
                                                </Container>
                                            </Column>

                                            {/* Add Quantity */}
                                            <Column md={2} sm={2}>
                                                <Container display="flex">
                                                    <TargetLink 
                                                        color="Default" 
                                                        hoverColor="primary"
                                                        onClick={addQuantity}
                                                    >
                                                        <AddIcon/>
                                                    </TargetLink>
                                                </Container> 
                                            </Column>
                                        </Rows>
                                    </Container>
                                </Container>

                                {/* Total Amount Price  */}
                                <Container
                                    margin="0.7-2-0-2"
                                >
                                    <Placeholder color="Default" fontSize="30">
                                        KSh {totalRate.toLocaleString()}.00
                                    </Placeholder>
                                </Container>

                                {/* Add to cart button */}
                                <Container display="flex" padding="1-1-1-1">
                                {/* conditional rendering on click */}
                                    <Buttons
                                        width="100"
                                        background = "Default"
                                        padding="1-1-1-1"
                                        hoverBackground="primary"
                                        onClick={
                                            ()=>{
                                                // TODO: is signed in state. 
                                                {
                                                    !user? (
                                                        // setModalStatus(true)
                                                        // TODO: redirect to checkout instead of home
                                                        history.push("/")
                                                    ):(
                                                        // TODO: redirect to modal I  used thankyou incase there is a user 
                                                       history.push("/thank-you")
                                                    )
                                                }
                                            }
                                        }
                                    >
                                        <ShoppingCartIcon/> ADD TO CART
                                    </Buttons>
                                </Container>

                                {/* Delivery & Warranty Details */}
                                <Container margin="0.7-2-0-2">
                                    <ul>
                                       {
                                            [
                                                "FREE SHIPPING on qualifying orders. You can find out shipping cost at checkout. We ship worldwide.",
                                                "30 Day Returns",
                                                "1 Year Warranty"
                                            ].map((details, index) => (
                                                <li key={index}>
                                                    <Placeholder color="Default" padding="0-3-0-0">
                                                        {details}
                                                    </Placeholder>
                                                </li>
                                            ))
                                        } 
                                    </ul>
                                    
                                </Container>
                            </Cards>
                        </Column>
                    </Rows>  
                </Container>
            </Section>

            {/* Similar Products */}
            <Section margin="1-0-0-0" padding="0-7.5-0-7.5" >
                <Container display="flex" backgroundColor="white">
                    <Cards>
                        <Container>
                            <Title3 color="Default" margin="1-1-0-0">Similar Products</Title3>
                        </Container>

                        {/* Product cards */}
                        <Container display="flex">
                            {/* Product Card */}
                            <Rows>
                                {productsData.map(product => (
                                    <Column md={2} className="mb-5" key={product.id} margin = "1-0-0-0">
                                        <TargetLink to="/product">
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
            {/* Footer */}
            <Section>
                <Footer/>
            </Section>
        </Section>
    )
}

export default Product
