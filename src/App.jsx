import SideBar from "../Components/SideBar";
import Theme from "../Components/Theme";
import Home from "../Components/Home";
import Form from "../Components/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import ProjectList from "../Components/ProjectList";

const allProjects = [];
function App() {
  const [isActive, setIsActive] = useState("Home");

  const handleProject = () => {
    setCreateProj((prev) => !prev);
  };
  const cancelForm = () => {
    setCreateProj((prev) => !prev);
  };

  const handleIsActive = (val) => {
    setIsActive(val);
  };
  return (
    <>
      <Theme />
      <Container fluid>
        <Row>
          <Col md={3}>
            <SideBar handleIsActive={handleIsActive} getActiveBar={isActive} />
          </Col>
          <Col md={9}>
            {isActive == "Home" && <Home handleIsActive={handleIsActive} />}
            {isActive === "MyProjects" && (
              <ProjectList allProjects={allProjects} />
            )}
            {isActive === "Form" && (
              <Form handleIsActive={handleIsActive} allProjects={allProjects} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
