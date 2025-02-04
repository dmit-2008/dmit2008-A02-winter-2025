// import and use a text field
import { TextField } from "@mui/material"
// import and use a checkbox with a label
// import and use a button
// put this in a form in a SimpleForm
// component no props.
export default function SimpleForm() {
  return <form style={{marginTop: "10px"}}>
    <TextField
      id="outlined-basic"
      label="Our demo text component"
      variant="outlined"
    />
  </form>
}