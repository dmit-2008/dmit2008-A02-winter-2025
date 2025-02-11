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


  return (
    <div>
      <Container
        maxWidth="md"
        component="main"
        sx={{mt: 8}}
      >
        <form>
          {/* we're going to use the grid */}
          <Grid container spacing={2}>
            <Grid size={10}>
              {/* for our text field for the props you can always take a look
              at the documentation for clarification.

              I want you to control the input
              with this textfield.

              */}
              <TextField
                id="new-todo-input"
                label="New Todo"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid size={2}>
              {/* for our button */}
              <Button
                variant="contained"
                size="large"
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
