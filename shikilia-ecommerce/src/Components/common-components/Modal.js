import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Image, Placeholder, TargetLink, Form, Rows, Buttons, Container, Modals, Column, Title1, Title3 } from '../styled-components/StyledComponents';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputLabel, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { socialLogins } from '../../Data/modalData';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppleIcon from '@material-ui/icons/Apple';
import GitHubIcon from '@material-ui/icons/GitHub';
import { CartData } from '../../Data/CartData';
import AddIcon from '@material-ui/icons/Add';
// import socialLogins from '../../Data/modalData'
/* import socialMediaAuth from '../../services/auth';
import GoogleProvider from '../../config/authMethods';
import AppleProvider from '../../config/authMethods';
import FacebookProvider from '../../config/authMethods';
import TwitterProvider from '../../config/authMethods';
import GithubProvider from '../../config/authMethods';z
 */
import {auth, provider} from '../../config/firebase';
import {Button } from '@material-ui/core';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// const handleOnClick = async (provider) => {
//     const res = await socialMediaAuth(provider);
//     console.log(res);
// };

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5]
    },
}));


function ModalCard({modal, status, onClose}) {
    const classes = useStyles();
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider)
        .catch(error =>alert(error.message))
    };

    const [open, setOpen] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [modalType, setModalType] = useState(modal);
    // const [modalType, setModalType] = useState('cart');
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);


    return (
        <React.Fragment>
            {
                modalType === "signIn" ? 
                (
                    <Modals
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={status}
                        onClose={onClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                                timeout: 500,
                        }}
                    >
                        <Fade in={status}>
                            <div className={classes.paper}>
                                <Container display="flex" justifyContent="end">
                                    <Buttons color="Default" hoverColor="primary" onClick={onClose}>
                                        <CloseIcon/> 
                                    </Buttons>
                                </Container>
                                <Container width="850">
                                    <Rows>
                                        <Column md={6} sm={12}>
                                            <Title1>Hello, Welcome Back!</Title1>
                                            <Form>
                                                <TextField
                                                    className={classes.root}
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='email'
                                                    label='Email Address'
                                                    name='email'
                                                    type='email'
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                    <Input
                                                        id="standard-adornment-password"
                                                        fullWidth
                                                        type={showPassword ? 'text' : 'password'}
                                                        value={password}
                                                        onChange = {(e) => setPassword(e.target.value)}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={() => setShowPassword(true)}
                                                                onMouseDown={() => setShowPassword(false)}
                                                                >
                                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                    />
                                                </FormControl>

                                                <Container height="70">
                                                    <Rows height="10" padding="modal">
                                                        <Column md={6} padding="modal">
                                                            <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                        checked={rememberMe}
                                                                        onChange={() => setRememberMe(!rememberMe)}
                                                                        color="primary"
                                                                    />
                                                                }
                                                                label="Remember Me"
                                                            />
                                                        </Column>

                                                        <Column md={6} padding="modal">
                                                            <Container>
                                                                <TargetLink color="Default" hoverColor="primary" margin="1-0-0-0" transformation={false}>Forgot Password?</TargetLink>
                                                            </Container>
                                                        </Column>
                                                    </Rows> 
                                                </Container>

                                                <Container marginTop="2">
                                                    <Buttons 
                                                        background="Default"
                                                        hoverBackground = "primary"
                                                        height="62"
                                                        marginTop="1"
                                                        // borderRadius="20"
                                                        width="100"
                                                    >
                                                        Sign In
                                                    </Buttons>
                                                </Container>
                                            </Form>

                                            <Container display="flex" justifyContent="start">
                                                <TargetLink
                                                    color="Default"
                                                    hoverColor="primary"
                                                    margin="1-0-0-0"
                                                    onClick={() => {
                                                        onClose()
                                                        setOpen(true)
                                                        setModalType('signUp')
                                                    }}
                                                >
                                                    Don't have an account? Create one
                                                </TargetLink>
                                            </Container>
                                        </Column>


                                        <Column md={6} sm={12}>
                                            <Container>
                                                <Placeholder 
                                                    color="Default"
                                                    margin="0-0-0-0"
                                                >
                                                    Sign In with:
                                                </Placeholder>
                                                <Container>
                                                   <Button  onClick={signIn}>
                                                            Sign In With Google 
                                                            </Button>
                                                </Container>
                                            </Container>
                                        </Column>
                                    </Rows>
                                </Container>
                            </div>
                        </Fade>
                    </Modals>    
                ) : 
                (
                    <React.Fragment></React.Fragment>
                ) &&

                modalType === "signUp" ? 
                (
                    <Modals
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={() => setOpen(!open)}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                                timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <Container display="flex" justifyContent="end">
                                    <Buttons color="Default" hoverColor="primary" onClick={() => setOpen(!open)}>
                                        <CloseIcon/> 
                                    </Buttons>
                                </Container>
                                <Container width="850">
                                    <Rows>
                                        <Column md={6} sm={12}>
                                            <Title1>Join Us!</Title1>
                                            <Form>
                                                <TextField
                                                    className={classes.root}
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='name'
                                                    label='Full Name'
                                                    name='name'
                                                    type='text'
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                <TextField
                                                    className={classes.root}
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='email'
                                                    label='Email Address'
                                                    name='email'
                                                    type='email'
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <TextField
                                                    className={classes.root}
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='password'
                                                    label='Password'
                                                    name='password'
                                                    type='password'
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <TextField
                                                    className={classes.root}
                                                    margin='normal'
                                                    required
                                                    fullWidth
                                                    id='confirmPassword'
                                                    label='Confirm Password'
                                                    name='confirmPassword'
                                                    type='password'
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />

                                                <Container height="70">  
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={privacyPolicy}
                                                                onChange={() => setPrivacyPolicy(!privacyPolicy)}
                                                                color="primary"
                                                            />
                                                        }
                                                        label="I Agree with the privacy policy"
                                                    />
                                                </Container>

                                                <Container marginTop="2">
                                                    <Buttons 
                                                        background="Default"
                                                        hoverBackground = "primary"
                                                        height="62"
                                                        marginTop="1"
                                                        borderRadius="20"
                                                        width="100"
                                                    >
                                                        Sign Up
                                                    </Buttons>
                                                </Container>
                                            </Form>

                                            
                                            <Container display="flex" justifyContent="start">
                                                <TargetLink
                                                    color="Default"
                                                    hoverColor="primary"
                                                    margin="1-0-0-0"
                                                    onClick={() => {
                                                        setOpen(!open)
                                                        onClose()
                                                        setModalType('signIn')
                                                    }}
                                                >
                                                    Already have an account? Sign In
                                                </TargetLink>
                                            </Container>
                                                   
                                        </Column>


                                        <Column md={6} sm={12}>
                                            <Container display="flex">
                                                <Image 
                                                    src="https://res.cloudinary.com/emacon-production/image/upload/v1623146015/Shikilia/Shikilia_Stores_Logo_zdzer3.png" 
                                                    alt="Shopping" 
                                                    width="200"
                                                    height="80"
                                                />
                                            </Container>
                                            <Container display="flex">
                                                <Image 
                                                    src="https://res.cloudinary.com/emacon-production/image/upload/v1623754489/Shikilia/undraw_shopping_app_flsj_ovxqmv.svg" 
                                                    alt="Shopping" 
                                                    height="150"
                                                    margin="2-0-2-0"
                                                />
                                            </Container>
                                        </Column>
                                    </Rows>
                                </Container>
                            </div>
                        </Fade>
                    </Modals>    
                ) : 
                (
                    <React.Fragment></React.Fragment>
                ) &&

                modalType === "cart" ? 
                (
                    <Modals
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={() => setOpen(!open)}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                                timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <Container 
                                    backgroundColor="Default" 
                                    display="flex" 
                                    width="400"
                                >
                                    <Container display="flex" justifyContent="start" padding="1-1-1-1">
                                        <Placeholder >My Cart</Placeholder>
                                        <Placeholder className="ml-2">{`( 1 Item )`}</Placeholder>
                                    </Container>
                                    <Container display="flex" justifyContent="end" padding="1-1-1-1">
                                       <Buttons hoverColor="primary" onClick={() => setOpen(!open)}>
                                            <CloseIcon/> 
                                        </Buttons> 
                                    </Container>
                                </Container>

                                {/* Products */}
                                <Container padding="1-1-1-1">
                                    {
                                        CartData.map(data => (
                                            <Rows key={data.id} className="mt-3">
                                                {/* Product Image */}
                                                <Column md={3} sm={3}>
                                                    <Image
                                                        src={data.image}
                                                        alt={data.productTitle}
                                                        height="80"
                                                        width="80"
                                                    />
                                                </Column>

                                                {/* Product Description */}
                                                <Column md={8} sm={8}>
                                                    {/* product title */}
                                                    <Placeholder color="Default">{data.productTitle}</Placeholder> 

                                                    {/* Quantity */}
                                                    <Container>
                                                        <Rows width="100">
                                                            {/* Price */}
                                                            <Column md={6} sm={12} display="flex" justifyContent="start">
                                                                <Placeholder color="Default">{`KSh ${data.basePrice.toLocaleString()}.00`}</Placeholder>
                                                            </Column>
                                                            <Column md={6} sm={12} display="flex" justifyContent="end">
                                                                <Container display="flex" height="35">
                                                                    <Buttons background="Default" hoverBackground="primary" hoverColor="primary">
                                                                        <AddIcon/>
                                                                    </Buttons>
                                                                    <Placeholder color="Default" className="ml-3"> {data.quantity} </Placeholder>
                                                                    <Buttons background="Default" hoverBackground="primary" hoverColor="primary" className="ml-3">
                                                                        <AddIcon/>
                                                                    </Buttons>
                                                                </Container>
                                                            </Column>
                                                        </Rows>
                                                    </Container>
                                                </Column>

                                                {/* Remove Product */}
                                                <Column md={1} sm={1}>
                                                    <Buttons color="Default" hoverColor="primary">
                                                        <CloseIcon/> 
                                                    </Buttons>
                                                    
                                                </Column>
                                            </Rows>
                                        ))
                                    }
                                </Container>

                                <Container backgroundColor="cream" padding="1-1-1-1">
                                    {/* Sub total */}
                                    <Rows>
                                        <Column md={6} sm={6} display="flex" justifyContent="start">
                                            <Placeholder color="Default">Sub-total :</Placeholder>
                                        </Column>
                                        <Column md={6} sm={6} display="flex" justifyContent="end">
                                            <Placeholder color="Default">{`KShs 5,000.00`}</Placeholder>
                                        </Column>
                                    </Rows>

                                    {/* Delivery Charges */}
                                    <Rows>
                                        <Column md={6} sm={6} display="flex" justifyContent="start">
                                            <Placeholder color="Default">Delivery Charges :</Placeholder>
                                        </Column>
                                        <Column md={6} sm={6} display="flex" justifyContent="end">
                                            <Placeholder color="Default">{`KShs 500.00`}</Placeholder>
                                        </Column>
                                    </Rows>

                                    {/* Total Amount */}
                                    <Rows>
                                        <Column md={6} sm={6} display="flex" justifyContent="start">
                                            <Placeholder color="Default">Total Amount :</Placeholder>
                                        </Column>
                                        <Column md={6} sm={6} display="flex" justifyContent="end">
                                            <Placeholder color="Default">{`KShs 5,500.00`}</Placeholder>
                                        </Column>
                                    </Rows>

                                    <Container display="flex">
                                        <Buttons 
                                            background="Default" 
                                            hoverBackground="primary" 
                                            width="100"
                                            padding="1-1-1-1"
                                            margin="1-0-0-0"
                                        >
                                            CHECKOUT
                                        </Buttons>
                                    </Container>
                                    
                                </Container>
                            </div>
                        </Fade>
                    </Modals>    
                ) : 
                (
                    <React.Fragment></React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default ModalCard
