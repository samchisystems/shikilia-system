import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TargetLink, Form, Rows, Buttons, Container, Modals, Column, Title1 } from '../styled-components/StyledComponents';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import { Checkbox, FormControl, FormControlLabel, IconButton, Input, InputLabel, TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


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


function ModalCard(modal, status) {
    const classes = useStyles();


    const [open, setOpen] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);


    return (
        <React.Fragment>
            {
                open ? 
                (
                    <Modals
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={() => setOpen(false)}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                                timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <Container display="flex" justifyContent="end">
                                    <Buttons color="Default" hoverColor="primary" onClick={() => setOpen(false)}>
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
                                                                <TargetLink color="primary" hoverColor="Default" transformation={false}>Forgot Password?</TargetLink>
                                                            </Container>
                                                        </Column>
                                                    </Rows> 
                                                </Container>

                                                <Container marginTop="2">
                                                    <Buttons 
                                                        hoverColor="primary"
                                                        background="Default"
                                                        height="62"
                                                        marginTop="1"
                                                        borderRadius="20"
                                                    >
                                                        Sign In
                                                    </Buttons>
                                                </Container>
                                
                                            </Form>
                                        </Column>
                                        <Column md={6} sm={12}></Column>
                                    </Rows>
                                </Container>
                                <h2 id="transition-modal-title">Transition modal</h2>
                                <p id="transition-modal-description">react-transition-group animates me.</p>
                            </div>
                        </Fade>
                    </Modals>    
                ) : 
                (
                    <React.Fragment>HELLO</React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default ModalCard
