import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Modals } from '../styled-components/StyledComponents';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


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


function Modal(modal, status) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);


    return (
        <React.Fragment>
            {
                modal === "signIn" ? 
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

export default Modal
