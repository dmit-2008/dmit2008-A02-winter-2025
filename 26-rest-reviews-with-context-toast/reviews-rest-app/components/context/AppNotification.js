// This is going to do two things
// 1. it's going have the component that will raise the "snackbar"
//    sometimes called "toast" message
// 2. create the context in here and we're going to create
//    a hook to simplify how we use this code.
import {useState, createContext} from "react"

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// we're also going to export the context
// this is going to "hold" the shared state.
export const AppNotificationContext = createContext({})

// we're going to wrap our app using this AppNotification
// everything will be rendered the same way
export default function AppNotification({children}) {
  // to debug and show the snackbar set it to true.
  const [open, setOpen] = useState(false);
  // we want to change the type of method and we want to change
  // the message value.
  const [messageSeverity, setMessageSeverity] = useState("info")
  const [text, setText] = useState("")

  // let's create a function that will change the state to open
  // and set the text and severity thie will be with "message" and "type" respectively
  const show = ({message, type}) => {
    setMessageSeverity(type)
    setText(message)

    setOpen(true)
  }

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

  // instead of a fragment we're going to add the provider
  // what we're doing doing here is that we're passing the function show
  // into an object so that it can imported into another component with
  // useContext
  return <AppNotificationContext.Provider value={{show}}>
    { // children is the entire app
    children
    }
    {/* The snack is open only is "open" is true */}
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={messageSeverity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  </AppNotificationContext.Provider>
}