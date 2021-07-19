import React from 'react'
import Footer from '../common-components/Footer'
import Navigation from '../common-components/Navigation'
import { Placeholder, Container, Image, Section, Title2 } from '../styled-components/StyledComponents'

function ThankYou() {
    return (
        <Section>
            {/* Navigation */}
            <Section>
                <Navigation/>
            </Section>

            {/* Thank you content */}
            <Section>
                <Container 
                    display="flex"
                    alignItems={true}
                    margin="2-0-0-0"
                >
                    <Image
                        src="https://res.cloudinary.com/emacon-production/image/upload/v1623754489/Shikilia/undraw_shopping_app_flsj_ovxqmv.svg"
                        alt="shikilia"
                        height="250"
                        width="300"
                    />
                </Container>
                <Container 
                    display="flex"
                    alignItems={true}
                    margin="2-0-0-0"
                >
                    <Title2 color="Default">Thank you for Shopping with Us!</Title2>
                </Container>
                <Container 
                    display="flex"
                    alignItems={true}
                    margin="2-0-0-0"
                >
                    <Placeholder color="Default">
                        An email has been sent with the receipt of your purchase. During delivery an email and sms will be sent to you.
                    </Placeholder>
                </Container>
            </Section>

            {/* Footer */}
            <Section>
                <Footer/>
            </Section>
        </Section>
    )
}

export default ThankYou
