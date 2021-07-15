import React, { useState } from 'react'
import { Container, Image, Placeholder, Title3 } from '../styled-components/StyledComponents'

function ProductCard({ productImage, title, currentPrice, previousPrice, categories }) {
    const [border, setBorder] = useState(false);
    const [shadow, setShadow] = useState(false)

    const onMouseEnterHandler = () => {
        setBorder(true);
        setShadow(true);
    }

    const onMouseLeaveHandler = () => {
        setBorder(false)
        setShadow(false)
    }

    return (
        <React.Fragment>
            {
                categories ? (
                    <Container 
                        border={border} 
                        width="200" 
                        dropShadow={shadow}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                    >
                        <Container height="185">
                            <Image
                                src={productImage}
                                alt="product_image"
                            />
                        </Container>
                        <Container display="flex">
                            {/* Product Name */}
                            <Placeholder 
                                color="Default"
                                fontSize="25"
                                margin="0.3-0-0-0.5"
                            >
                                {title}
                            </Placeholder>
                        </Container>
                    </Container>
                ) :
                (
                    <Container 
                        border={border} 
                        width="200" 
                        dropShadow={shadow}
                        onMouseEnter={onMouseEnterHandler}
                        onMouseLeave={onMouseLeaveHandler}
                    >
                        <Container height="185">
                            <Image
                                src={productImage}
                                alt="product_image"
                            />
                        </Container>
                        <Container>
                            {/* Product Name */}
                            <Placeholder 
                                color="Default"
                                fontSize="25"
                                margin="0.3-0-0-0.5"
                            >
                                {title}
                            </Placeholder>

                            {/* Product Current Price */}
                            <Placeholder 
                                color="Default"
                                fontSize="21"
                                margin="0.5-0-0-0.5"
                            >
                                KSh {currentPrice}.00
                            </Placeholder>

                            {/* Previous price */}
                            {/* Product Current Price */}
                            <Placeholder 
                                color="Default"
                                margin="0.5-0-1-0.5"
                            >
                                <del>KSh {previousPrice}.00</del>
                            </Placeholder>
                        </Container>
                    </Container>
                )
            }
        </React.Fragment>
        
        
    )
}

export default ProductCard
