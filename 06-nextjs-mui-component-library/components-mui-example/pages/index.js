// import the container and use the container component
// take a look at the "component" prop on the container component
import Container from '@mui/material/Container';
// use Typography component with a variant prop of h1
// go to these docs https://mui.com/material-ui/react-typography/
import Typography from '@mui/material/Typography';

import Navbar from '@/components/Navbar';

// write the title "Using MUI"

export default function Home() {
  return (
    <div>
      <Navbar title={"MUI Demo"} />
      {/* component prop as main essentially renders this
      component as a main element
      docs here: https://mui.com/material-ui/api/container/
      */}
      <Container
        maxWidth="md"
        component="main"
      >
        {/* variant is what it looks like and the component again like
        above is the element it will render to */}
        <Typography
          variant="h3"
          component="h1"
        >
          Using MUI
        </Typography>
      </Container>
    </div>
  );
}
