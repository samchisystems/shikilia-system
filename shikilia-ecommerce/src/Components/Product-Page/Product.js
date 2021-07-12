import React from 'react'
import { Cards, Column, Container, Image, Placeholder, Rows, Section, TargetLink } from '../styled-components/StyledComponents'
import Navigation from '../common-components/Navigation'

function Product() {
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
                            <Cards>Hello</Cards>
                        </Column>
                    </Rows>  
                </Container>
            </Section>
        </Section>
    )
}

export default Product
