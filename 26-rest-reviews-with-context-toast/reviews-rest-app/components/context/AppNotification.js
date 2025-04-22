// This is going to do two things
// 1. it's going have the component that will raise the "snackbar"
//    sometimes called "toast" message
// 2. create the context in here and we're going to create
//    a hook to simplify how we use this code.

// we're going to wrap our app using this AppNotification
// everything will be rendered the same way
export default function AppNotification({children}) {

  return <>
    {children}
  </>
}