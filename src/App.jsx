
import SideBar from "../Components/SideBar";
import Theme from "../Components/Theme";
import Home from "../Components/Home";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <>
      <Theme />
      <Container fluid>
        <Row>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={9}>
            <Home/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
