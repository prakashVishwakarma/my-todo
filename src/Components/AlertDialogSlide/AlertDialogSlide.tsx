import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import CustomButton from '../PureComponents/CustomButton/CustomButton';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface AlertDialogSlideProps {
    text: string;
    dialogContentText?: string;
    Cancel: string;
    Done: string;
    title?: string;
}

const AlertDialogSlide: React.FC<AlertDialogSlideProps> = ({ text, dialogContentText, Cancel, Done, title }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <CustomButton type='button' name={text} onClick={handleClickOpen} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {
                    title &&
                    <DialogTitle>{title}</DialogTitle>
                }
                {
                    dialogContentText &&
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialogContentText}
                    </DialogContentText>
                </DialogContent>
                }
                <DialogActions>
                    <CustomButton type='button' name={Cancel} onClick={handleClose} />
                    <CustomButton type='button' name={Done} onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default AlertDialogSlide;