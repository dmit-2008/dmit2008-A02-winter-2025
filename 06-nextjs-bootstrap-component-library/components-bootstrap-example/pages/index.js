// what I want you folks to do is
// use a react bootstrap container
// and nest an h1 with title of "react bootstrap"
// add a react bootstrap row
// and two columns
// add two h2s in those columns

// let's import conatiner docs https://react-bootstrap.netlify.app/docs/layout/grid/#container
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
              <UILibraryList />
            </Col>
            <Col>
              <h2>Other functionality</h2>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
