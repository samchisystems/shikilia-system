import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Image, Placeholder, TargetLink, Form, Rows, Buttons, Container, Modals, Column, Title1 } from '../styled-components/StyledComponents';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputLabel, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { socialLogins } from '../../Data/modalData';
// import socialLogins from '../../Data/modalData'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


function ModalCard(modal, status, onClose) {
    const classes = useStyles();


    // const [open, setOpen] = useState(status);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [modalType, setModalType] = useState(modal);
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
                                                        borderRadius="20"
                                                        width="100"
                                                    >
                                                        Sign In
                                                    </Buttons>
                                                </Container>
                                            </Form>

                                            <Rows>
                                                <Column md={6} sm={12}>
                                                    <Placeholder 
                                                        color="Default"
                                                        margin="0-0-0-0"
                                                    >
                                                        Sign In with:
                                                    </Placeholder>
                                                    <Container display="flex" justifyContent="start">
                                                        {socialLogins.map(socialLogin => (
                                                            <TargetLink key={socialLogin.id}>
                                                                <Image 
                                                                    src={socialLogin.icon} 
                                                                    alt={socialLogin.alt}
                                                                    width ="30"
                                                                    height="30"
                                                                    margin={socialLogin.margin}
                                                                    transform = {true}
                                                                />
                                                            </TargetLink>
                                                        ))}
                                                    </Container>
                                                </Column>
                                                <Column md={6} sm={12}>
                                                    <Container display="flex" justifyContent="end">
                                                        <TargetLink
                                                            color="Default"
                                                            hoverColor="primary"
                                                            margin="1-0-0-0"
                                                        >
                                                            Don't have an account? Create one
                                                        </TargetLink>
                                                    </Container>
                                                </Column>
                                            </Rows>
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

                modalType === "signUp" ? 
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

                                            <Rows>
                                                <Column md={6} sm={12}>
                                                    <Placeholder 
                                                        color="Default"
                                                        margin="0-0-0-0"
                                                    >
                                                        Sign Up with:
                                                    </Placeholder>
                                                    <Container display="flex" justifyContent="start">
                                                        {socialLogins.map(socialLogin => (
                                                            <TargetLink key={socialLogin.id}>
                                                                <Image 
                                                                    src={socialLogin.icon} 
                                                                    alt={socialLogin.alt}
                                                                    width ="30"
                                                                    height="30"
                                                                    margin={socialLogin.margin}
                                                                    transform = {true}
                                                                />
                                                            </TargetLink>
                                                        ))}
                                                    </Container>
                                                </Column>
                                                <Column md={6} sm={12}>
                                                    <Container display="flex" justifyContent="end">
                                                        <TargetLink
                                                            color="Default"
                                                            hoverColor="primary"
                                                            margin="1-0-0-0"
                                                        >
                                                            Already have an account? Sign In
                                                        </TargetLink>
                                                    </Container>
                                                </Column>
                                            </Rows>
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
                )
            }
        </React.Fragment>
    )
}

export default ModalCard
