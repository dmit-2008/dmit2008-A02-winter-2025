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

import Container from '@mui/material/Container';

import ListOfTodos from '@/components/ListOfTodos';
import NewTodoForm from '@/components/NewTodoForm';

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

  // we're going to create a delete function
  // that's going to take an index as an argument
  const deleteTodoItem = (index) => {
    console.log("deleting index: " + index)
    // I want you to create a copy of the array
    let tempTodoList = [...todoList]
    // look up a way to delete an item at an index
    // we'll use splice, docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    tempTodoList.splice(index, 1)
    // update that array.
    setTodoList(tempTodoList)
  }

  return (
    <div>
      <Container
        maxWidth="md"
        component="main"
        sx={{mt: 8}}
      >
        {/* passing state down again
          you can see the todolist is shared
          state across both components below
        */}
        <NewTodoForm
          todoList={todoList}
          setTodoList={setTodoList}
        />
        {/* pass down the stateful value of todoList
        pass down the function of deleteTodoItem
        so the component can use them. */}
        <ListOfTodos
          todoList={todoList}
          deleteTodoItem={deleteTodoItem}
        />
      </Container>
    </div>
  );
}
