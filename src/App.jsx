import SideBar from "../Components/SideBar";
import Theme from "../Components/Theme";
import Home from "../Components/Home";
import Form from "../Components/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [createProj, setCreateProj] = useState(false);

  const handleProject = () => {
    setCreateProj((prev) => !prev);
  };
  const cancelForm = () => {
    setCreateProj((prev) => !prev);
  };
  return (
    <>
      <Theme />
      <Container fluid>
        <Row>
          <Col md={3}>
            <SideBar />
          </Col>
          <Col md={9}>
            {createProj ? (
              <Form cancelForm={cancelForm} />
            ) : (
              <Home handleProj={handleProject} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
