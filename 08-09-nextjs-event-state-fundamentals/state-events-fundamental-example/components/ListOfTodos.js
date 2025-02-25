// move our todo list (the list part)
// in this component.

export default function ListOfTodos() {
  return               <List>
    {/* we'll use map to loop through
    the todoList because it's the same
    as the SAMPLE_TODOS (originally) */}
    {todoList.map((todo, index)=> {
      // we're returning a single
      // jsx node in the list.

      // i want you to add the delete
      // button and install any packages
      // you might need.
      return <ListItem
        key={index}
        secondaryAction={
          // we're going to create a oneline
          // function that's going to call
          // delete todo item with the index
          // from our map
          <IconButton
            edge="end"
            onClick={
              ()=> {deleteTodoItem(index)}
            }
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemText
          primary={todo}
          secondary={`index: ${index}`}
        />
      </ListItem>
    })}
  </List>
}