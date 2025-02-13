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
// Items needed for a list.
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';


export default function Home() {
  const SAMPLE_TODOS = [
    "ask students to build stuff",
    "ask students to go to meetups",
    "wonder if my students are awake",
    "think about fun projects to build",
  ]
  // I want you to try to build a list in jsx
  // using an mui list and looping over the array
  // above.

  // I want you to create a stateful variable
  // called todoList, where the default/original
  // value is the SAMPLE_TODOS and you loop through
  // those todos in the JSX
  const [todoList, setTodoList] = useState(SAMPLE_TODOS)

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
    setTodoValue("")
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
            {/* I'm going to make a grid size 12 */}
            <Grid size={12}>
              <List>
                {/* we'll use map to loop through
                the todoList because it's the same
                as the SAMPLE_TODOS (originally) */}
                {todoList.map((todo, index)=> {
                  // we're returning a single
                  // jsx node in the list.
                  return <ListItem key={index}>
                    <ListItemText
                      primary={todo}
                    />
                  </ListItem>
                })}
              </List>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
