import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Link, useHistory, useLocation} from 'react-router-dom'
import { productCategorysData, topMenuData } from '../../Data/menuData'
import { Placeholder, Buttons, InputField, Column, Container, Image, Rows, Section, TargetLink } from '../styled-components/StyledComponents'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckIcon from '@material-ui/icons/Check';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ModalCard from './Modal';
import {auth} from '../../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 
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
            borderBottomColor: '#5e72e4',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#5e72e4',
            },
        },
    },
}));

function Navigation() {
    const classes = useStyles();
    const usertext1 =  'Hi \n '
    const usertext2 =   '\n Good afternoon'
    const [searchInput, setSearchInput] = useState();
    const [modalStatus, setModalStatus] = useState(false);
     const [user, loading] =useAuthState(auth);

    // history.push()
    const history = useHistory();

    const handleModal = () => {
        setModalStatus(!modalStatus)
    };
    console.log('user is', user);
    return (
        <Section backgroundColor="Default">
            {/* Top Menu */}
            <Container
                display = "flex"
                justifyContent = "end"
                margin = "0-0-0--6"

            >
                {topMenuData.map(topMenu => (
                    <React.Fragment>
                        <TargetLink 
                            key = {topMenu.id}
                            margin = "2-2-2.5-0"
                            hoverColor="primary"
                            border = {topMenu.border}
                            onClick={() => {
                                if (topMenu.modal === 'signIn'){
                                    setModalStatus(true)
                                }     
                            }}
                        >
                            {
                                topMenu.icon === 'FavoriteIcon' ?
                                <FavoriteIcon className="mr-2 ml-4"/> : <></> &&
                                topMenu.icon === 'CheckIcon' ?
                                <CheckIcon className="mr-2 ml-4"/> : <></> &&
                                topMenu.icon === 'PersonIcon' ?
                                <PersonIcon className="mr-2 ml-4"/> : <></>
                            }
                            {topMenu.title}

                            
                        </TargetLink>
                        <ModalCard modal={topMenu.modal} status={modalStatus} onClose={handleModal}/>
                        
                    </React.Fragment>
                    
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
                        margin = "0-0-0-0"
                    >
                     <Link to="/">
                        <img
                            className="header__logo"
                            src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png"
                            alt = "Shikilia Logo"
                            height = "50"
                            width="125"
                        />
                    </Link>
                        {/* <Image 
                            src = "https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" 
                            alt = "Shikilia Logo"
                            height = "50"
                            width="125"
                        /> */}
                    </Column>

                    {/* Search Input Field */}
                    <Column md={4} display = "flex">
                        <InputField
                            className = {classes.root}
                            fullWidth
                            id = "searchField"
                            label = "Search Here"
                            value = {searchInput}
                            onChange = {e => setSearchInput(e.target.value)}
                        />
                        <Buttons
                            className = "mt-3"
                            hoverColor = "primary"
                        >
                            <SearchIcon/>
                        </Buttons>
                    </Column>

                    {/* Cart */}
                    <Column md={4} display = "flex">
                        <TargetLink 
                            margin = "2-0-0-0"
                            hoverColor="primary"
                            
                            //TODO: whether th user decides to checkout the cart userZZZ FINISH up with this logic again and also set modal status false
                             onClick={() =>
                             {
                                                    !user? (
                                                        // setModalStatus(true)
                                                        // TODO: redirect to checkout instead of home
                                                        history.push("/")
                                                    ):(
                                                        // TODO: redirect to modal I  used thankyou incase there is a user 
                                                       setModalStatus(true)
                                                    )
                                                }
                             }
                        >
                            <ShoppingCartIcon/>
                            My Cart | Ksh 1,000,000.00
                        </TargetLink>
                    </Column>
                </Rows>
            </Container>

            {/* Category Menu */}
            <Container
                display = "flex"
                backgroundColor = "primary"
                margin= "2-0-0-0"
            >
                <Rows>
                    <Column 
                        md = {11}
                        display = "flex"
                        justifyContent = "end"
                    > 
                     
                    
                        {productCategorysData.map(productCategory => (
                            <TargetLink 
                                to="/category"
                                key = {productCategory.id}
                                margin = "1-2-0-1"
                                hoverColor = "Default"
                            >
                                <React.Fragment className="ml-3"/>
                                {productCategory.placeHolder}
                            </TargetLink>
                        ))}
                    </Column>
                    
                    <Column md={1}>
                        <TargetLink
                            hoverColor = "Default"Default
                            border = {true}
                            display = "flex"
                            className="ml-3"
                        >
                            <HeaderContainer
                    //TODO: Add user infor
                    
                    >
                     <HeaderLeft>
                     <HeaderAvatar
                     //TODO: Add onclick
                     onClick={()=> auth.signOut()}
                      alt= {user?.displayName}
                      src= {user?.photoURL}
                      
                     />
                     < div className = "display-linebreak1">
                     {usertext1}
                     </div>                    
                     </HeaderLeft>

                    </HeaderContainer>
                        </TargetLink>
                        
                    </Column>
                </Rows>
            </Container>
        </Section>
    )
}

export default Navigation;

// TODO: move these to styled components
const HeaderContainer = styled.div`
  display:flex; 
//    position:fixed;
//   width:100%;
//   align-items:center;
//   justify-content:space-between;
//   padding:10px 0;
`;
const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;
 > .MuiSvgIcon-root{
     margin-left:auto;
     margine-right: 30px;
 }
`;
const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover {
    opacity:0.8;
}
`;