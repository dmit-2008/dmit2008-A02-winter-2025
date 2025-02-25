//  create the component
// think of what needs to be a prop
// what state can fully be in the form component.
import {useState} from 'react'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';

export default function NewTodoForm({
  todoList, setTodoList
}) {
  // create a stateful value using use state
  // called todoValue
  const [todoValue, setTodoValue] = useState("")

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

    // inside this form
    // i'm going to create an copy of the array (think spread)
    // with the todoValue as the first value
    let tempList = [todoValue, ...todoList]
    // includes all items of the todoList in the new array.
    // we don't use push in this array because we need to make
    // a copy because it's a const!
    console.log(tempList)

    // setTodoList with the new array
    setTodoList(tempList)
    // this will update the page!

    // reset the value of the input
    // we're going to setTodoValue to an empty string
    setTodoValue("")
  }

  return <form
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

      </Grid>
    </Grid>
  </form>
}