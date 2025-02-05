import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function SimpleListItem(props) {
  return <ListItem>
      <ListItemText>
        <Typography variant="p" component="div">
          {props.text}
        </Typography>
      </ListItemText>
    </ListItem>
}