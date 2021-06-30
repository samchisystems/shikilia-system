import React from 'react'
import Navigation from '../common-components/Navigation'
import { Section } from '../styled-components/StyledComponents'

function Home() {
    return (
        <React.Fragment>
            {/* Navigation Section */}
            <Section>
                <Navigation/>
            </Section>
        </React.Fragment>
    )
}

export default Home
