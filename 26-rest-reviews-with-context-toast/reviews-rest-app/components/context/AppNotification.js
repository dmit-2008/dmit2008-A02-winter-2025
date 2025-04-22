// This is going to do two things
// 1. it's going have the component that will raise the "snackbar"
//    sometimes called "toast" message
// 2. create the context in here and we're going to create
//    a hook to simplify how we use this code.
import {useState} from "react"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


// we're going to wrap our app using this AppNotification
// everything will be rendered the same way
export default function AppNotification({children}) {
  // to debug and show the snackbar set it to true.
  const [open, setOpen] = useState(true);

  // needed to handle our snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // we're going to customize our appnotification
  // so that it uses a snackbar and the alerts
  // so that we can change what kind of message
  // we display to the user.
  // docs here: https://mui.com/material-ui/react-snackbar/#use-with-alerts
  return <>
    { // children is the entire app
    children
    }
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
  </>
}