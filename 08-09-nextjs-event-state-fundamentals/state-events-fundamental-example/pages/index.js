/*
  To install a container that uses main
  as the component from mui
  To install a grid version 2
  two grid items on that's bigger than the
  other
  first one will contain a textfield
  second one will contain a button
  the grid will be instide a form elemnt
*/
import { useState } from 'react'

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';


export default function Home() {
  // create a stateful value using use state
  // called todoValue
  const [todoValue, setTodoValue] = useState("fix wifi")

  const updateTodoValue = (event) => {
    // remember that the event.target will
    // return the input in an onChange event
    // and the .value is just what the user
    // entered here.
    setTodoValue(event.target.value)
  }

  // i want you to put an event listener
  // that listens to the onSubmit event
  // on the form and make a function that
  // prints out the todoValue.

  const handleForm = (event) => {
    event.preventDefault()
    // print the value of todo
    console.log(`todoValue: ${todoValue}`)

    // reset the value of the input
    // we're going to setTodoValue to an empty string
  }


  return (
    <div>
      <Container
        maxWidth="md"
        component="main"
        sx={{mt: 8}}
      >
        <form
          onSubmit={handleForm}
        >
          {/* we're going to use the grid */}
          <Grid container spacing={2}>
            <Grid size={10}>
              {/* for our text field for the props you can always take a look
                at the documentation for clarification.

                I want you to control the input
                with this textfield.
                  - put an onChange
                  - set the value to the todoValue
                since this is synced with todoValue
                it's called a "controlled input"
              */}
              <TextField
                id="new-todo-input"
                label="New Todo"
                variant="outlined"
                fullWidth
                value={todoValue}
                onChange={updateTodoValue}
              />
            </Grid>
            <Grid size={2}>
              {/* for our button */}
              <Button
                variant="contained"
                size="large"
                type="submit"
              >
                Add Todo
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
