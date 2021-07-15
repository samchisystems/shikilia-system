import React from 'react'
import { specificCategoryData } from '../../Data/productsData'
import Footer from '../common-components/Footer'
import Navigation from '../common-components/Navigation'
import ProductCard from '../common-components/ProductCard'
import { Cards, Column, Container, Placeholder, Rows, Section, TargetLink, Title3 } from '../styled-components/StyledComponents'

function CategoryPage() {
    return (
        <Section>
            {/* Navigation */}
            <Section>
                <Navigation/>
            </Section>

            {/* path */}
            <Section>
                <Container display="flex" justifyContent="start" className="ml-5 mt-2">
                    <TargetLink color="Default" hoverColor="primary" to="/">Home</TargetLink>
                    <Placeholder color="Default" className="ml-2 mr-2">{`>`}</Placeholder>
                    <TargetLink color="Default" hoverColor="primary" to="/category-type">Categories</TargetLink>
                    <Placeholder color="Default" className="ml-2 mr-2">{`>`}</Placeholder>
                    <TargetLink color="Default" hoverColor="primary">Electronics</TargetLink>
                </Container>
            </Section>

            {/* Product category */}
            <Section margin="1-0-0-0" padding="0-7.5-0-7.5" >
                <Container display="flex" backgroundColor="white">
                    <Cards>
                        <Container>
                            <Title3 color="Default" margin="1-1-0-0">Category Name</Title3>
                        </Container>

                        {/* Product cards */}
                        <Container display="flex">
                            {/* Product Card */}
                            <Rows>
                                {specificCategoryData.map(product => (
                                    <Column md={2} className="mb-5" key={product.id} margin = "1-0-0-0">
                                        <TargetLink to="/product" display="flex">
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

export default CategoryPage
