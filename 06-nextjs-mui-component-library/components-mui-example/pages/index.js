// import the container and use the container component
// take a look at the "component" prop on the container component
import Container from '@mui/material/Container';
// use Typography component with a variant prop of h1
// write the title "Using MUI"

export default function Home() {
  return (
    <div>
      {/* component prop as main essentially renders this
      component as a main element
      docs here: https://mui.com/material-ui/api/container/
      */}
      <Container
        maxWidth="md"
        component="main"
      >

      </Container>
    </div>
  );
}
