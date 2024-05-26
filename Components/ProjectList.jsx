import Project from "./Project";

const ProjectList = ({ allProjects }) => {
  return (
    <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
      <div className="list-group">
        {allProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
