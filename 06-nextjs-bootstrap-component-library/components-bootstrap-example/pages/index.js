// what I want you folks to do is
// use a react bootstrap container
// and nest an h1 with title of "react bootstrap"
// add a react bootstrap row
// and two columns
// add two h2s in those columns

// let's import conatiner docs https://react-bootstrap.netlify.app/docs/layout/grid/#container
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// import and use our component
import UILibraryList from '@/components/UILibraryList';

export default function Home() {
  return (
    <div>
      <main>
        {/* using external components the exact same way
          as our custom components.
        */}
        <Container>
          <h1>My First React Boostrap Project</h1>
          <Row>
            <Col>
              <h2>Available Libraries</h2>
              {/* our custom components */}
              <UILibraryList />
            </Col>
            <Col>
              <h2>Other functionality</h2>
              {/* add a button and an accordion. */}
              <Button variant="danger">Don't click me</Button>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Idea #1</Accordion.Header>
                  <Accordion.Body>
                    That it's pretty easy to use our components and a
                    component library side by side.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Idea #2</Accordion.Header>
                  <Accordion.Body>
                    These component libraries have a lot built in that we can use
                    in our own components so that we build some nest.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
