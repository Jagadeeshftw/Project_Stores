import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const Form = ({ handleIsActive, allProjects, setAllProjects }) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isValid, setIsValid] = useState({
    Overall: true,
    projectTitle: true,
    projectDescription: true,
    dueDate: true,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleValidation = () => {
    const newIsValid = {
      Overall:
        projectTitle.trim() !== "" &&
        projectDescription.trim() !== "" &&
        dueDate.trim() !== "",
      projectTitle: projectTitle.trim() !== "",
      projectDescription: projectDescription.trim() !== "",
      dueDate: dueDate.trim() !== "",
    };
    setIsValid(newIsValid);
    return Object.values(newIsValid).every(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (handleValidation()) {
      const newProject = {
        projectTitle,
        projectDescription,
        dueDate,
      };
      setAllProjects([...allProjects, newProject]);
      handleIsActive("MyProjects");
    }
  };

  return (
    <>
      <Container fluid>
        <form className="mt-5" onSubmit={handleSubmit}>
          <Col md={12}>
            <h3 className="mb-5">Create New Project:</h3>
          </Col>
          <Col md={12}>
            <div className="form-floating mb-3">
              <input
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                type="text"
                className={`form-control ${
                  isSubmitted &&
                  (isValid.projectTitle
                    ? !isValid.Overall && "is-valid"
                    : "is-invalid")
                }`}
                id="floatingInputValidationServer01"
                placeholder="Project Title"
              />
              <label htmlFor="floatingInputValidationServer01">
                Project Title
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a valid title!
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="form-floating mb-3">
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                className={`form-control ${
                  isSubmitted &&
                  (isValid.projectDescription
                    ? !isValid.Overall && "is-valid"
                    : "is-invalid")
                }`}
                placeholder="Project Description"
                id="floatingTextareaValidationServer02"
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingTextareaValidationServer02">
                Project Description
              </label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">
                Please provide a valid description!
              </div>
            </div>
          </Col>

          <Col md={12}>
            <div className="form-floating mb-3">
              <input
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                type="date"
                className={`form-control ${
                  isSubmitted &&
                  (isValid.dueDate
                    ? !isValid.Overall && "is-valid"
                    : "is-invalid")
                }`}
                id="floatingInputValidationServer03"
                placeholder="Due Date"
                style={{ height: "65px" }}
              />
              <label htmlFor="floatingInputValidationServer03">Due Date</label>
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Please select a due date!</div>
            </div>
          </Col>
          <Col>
            <div className="col-12 mt-4">
              <button className="btn btn-primary" type="submit">
                Create
              </button>
              <button
                className="btn btn-danger ms-2"
                type="button"
                onClick={() => handleIsActive("Home")}
              >
                Cancel
              </button>
            </div>
          </Col>
        </form>
      </Container>
    </>
  );
};

export default Form;
