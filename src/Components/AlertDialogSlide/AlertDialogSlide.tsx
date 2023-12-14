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
import { myLocalDataName } from '@/Constants/myLocalData';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface valueDataProps {
    title: string;
    content: string;
}

interface AlertDialogSlideProps {
    text: string;
    dialogContentText?: string;
    Cancel: string;
    Done: string;
    title?: string;
    valueData?: valueDataProps;
}

const AlertDialogSlide: React.FC<AlertDialogSlideProps> = ({ valueData, text, Cancel, Done, title }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseAndDelete = (deletevalueData: valueDataProps | undefined) => {

        const myLocalData = JSON.parse(localStorage.getItem(myLocalDataName) ?? `{

        loginAndSignup: {
          email: '',
          password: '',
          confirmPassword: '',
        },
  
        myTodo: [
          {
            title: '',
            content: '',
          },
  
        ],
  
      }`)

        const filterdTodo = myLocalData.myTodo.filter((value: valueDataProps) => {
            // console.log('value',value.title, deletevalueData?.title)
            return (
                value.title == deletevalueData?.title
            )
        })
        setOpen(false);
    };
    console.log('valueData d',valueData)

    return (
        <React.Fragment>
            <CustomButton type='button' name={text} onClick={handleClickOpen} />
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleCloseAndDelete(undefined)}
                aria-describedby="alert-dialog-slide-description"
            >
                {
                    valueData?.title &&
                    <DialogTitle>{valueData?.title}</DialogTitle>
                }
                {
                    title &&
                    <DialogTitle>{title}</DialogTitle>
                }
                {
                    valueData?.content &&
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {valueData?.content}
                        </DialogContentText>
                    </DialogContent>
                }
                <DialogActions>
                    <CustomButton type='button' name={Cancel} onClick={() => handleCloseAndDelete(valueData)} />
                    <CustomButton type='button' name={Done} onClick={() => handleCloseAndDelete(undefined)} />
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default AlertDialogSlide;