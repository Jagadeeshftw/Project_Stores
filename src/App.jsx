import SideBar from "../Components/SideBar";
import Theme from "../Components/Theme";
import Home from "../Components/Home";
import Form from "../Components/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProjectList from "../Components/ProjectList";

const App = () => {
  const [isActive, setIsActive] = useState("Home");
  const [allProjects, setAllProjects] = useState([]);

  // Load projects from local storage when the app initializes
  useEffect(() => {
    console.log("Fetching projects from local storage...");
    const savedProjects = localStorage.getItem("allProjects");
    if (savedProjects) {
      console.log("Found saved projects:", JSON.parse(savedProjects));
      setAllProjects(JSON.parse(savedProjects));
    } else {
      console.log("No saved projects found.");
    }
  }, []);

  // Save projects to local storage whenever they are updated
  useEffect(() => {
    console.log("Saving projects to local storage:", allProjects);
    localStorage.setItem("allProjects", JSON.stringify(allProjects));
  }, [allProjects]);

  const handleIsActive = (val) => {
    setIsActive(val);
  };

  console.log("isActive:", isActive);
  console.log("allProjects:", allProjects);

  return (
    <>
      <Theme />
      <Container fluid>
        <Row>
          <Col md={3}>
            <SideBar handleIsActive={handleIsActive} getActiveBar={isActive} />
          </Col>
          <Col md={9}>
            {isActive === "Home" && <Home handleIsActive={handleIsActive} />}
            {isActive === "MyProjects" && (
              <ProjectList allProjects={allProjects} />
            )}
            {isActive === "Form" && (
              <Form
                handleIsActive={handleIsActive}
                allProjects={allProjects}
                setAllProjects={setAllProjects}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
