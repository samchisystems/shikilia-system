import React from 'react'
import { topMenuData } from '../../Data/menuData'
import { Column, Container, Image, Rows, Section, TargetLink } from '../styled-components/StyledComponents'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckIcon from '@material-ui/icons/Check';

function Navigation() {
    return (
        <Section backgroundColor="Default">
            {/* Top Menu */}
            <Container
                display = "flex"
                justifyContent = "end"
                margin = "0-5-0-0"

            >
                {topMenuData.map(topMenu => (
                    <TargetLink 
                        key = {topMenu.id}
                        margin = "2-2-2-0"
                    >
                        {
                            topMenu.icon === 'FavoriteIcon' ?
                            <FavoriteIcon className="mr-2"/> : <></> &&
                            topMenu.icon === 'CheckIcon' ?
                            <CheckIcon className="mr-2"/> : <></> &&
                            topMenu.icon === 'PersonIcon' ?
                            <PersonIcon className="mr-2"/> : <></>
                        }
                        {topMenu.title}
                    </TargetLink>
                ))}
            </Container>

            {/* Logo + Searchbar + Cart */}
            <Container
            >
                <Rows>
                    {/* Logo */}
                    <Column 
                        md={4} 
                        display = "flex"
                        margin = "0-0-2-0"
                    >
                        <Image 
                            src = "https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" 
                            alt = "Shikilia Logo"
                            height = "50"
                        />
                    </Column>
                    <Column md={4} display = "flex">Hello</Column>
                    <Column md={4} display = "flex">Hello</Column>
                </Rows>
            </Container>
        </Section>
    )
}

export default Navigation
