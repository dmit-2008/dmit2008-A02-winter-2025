// import and use a button
import Button from '@mui/material/Button';

// import and use a checkbox with a label
// refer to the docs here https://mui.com/material-ui/react-checkbox/
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import and use a text field
import TextField from "@mui/material/TextField"

// put this in a form in a SimpleForm
// component no props.
export default function SimpleForm() {
  return <form style={{marginTop: "10px"}}>
    <TextField
      id="outlined-basic"
      label="Our demo text component"
      variant="outlined"
    />
    {/* You can pass jsx as a prop */}
    <FormGroup>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Check me"
      />
    </FormGroup>
    <Button
      variant="contained"
    >Submit me</Button>
  </form>
}