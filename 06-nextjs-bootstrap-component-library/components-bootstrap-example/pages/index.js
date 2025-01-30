// what I want you folks to do is
// use a react bootstrap container
// and nest an h1 with title of "react bootstrap"
// add a react bootstrap row
// and two columns
// add two h2s in those columns

// let's import conatiner docs https://react-bootstrap.netlify.app/docs/layout/grid/#container
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <h1>My First React Boostrap Project</h1>
          <Row>
            <Col>
              <h2>Available Libraries</h2>
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
