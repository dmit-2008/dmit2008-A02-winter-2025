import { useState, useContext, createContext  } from 'react'

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const AppNotificationContext = createContext({})

export function useNotification() {
  const context = useContext(AppNotificationContext)
  if (!context) {
    throw new Error(`useNotification must be used within a AppNotification`)
  }
  return context
}

export default function AppNotification(props) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('')
    const [severity, setSeverity] = useState('success')

    const handleClose = (event, reason) => {
      console.log(event)
      console.log(reason)

      setOpen(false);
    };

    const showNotification = ({message, severity}) => {
        setText(message)
        setSeverity(severity)
        // display the message
        setOpen(true)
    }

    return <AppNotificationContext.Provider value={{showNotification}}>
      {props.children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          elevation={6} variant="filled"
          onClose={handleClose} severity={severity} sx={{ width: '100%' }}
        >
          {text}
        </Alert>
      </Snackbar>
    </AppNotificationContext.Provider>
}