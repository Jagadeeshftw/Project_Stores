import Project from "./Project";

const ProjectList = ({ allProjects }) => {
  return (
    <section id="services" class="services section">
      <div class="container section-title" data-aos="fade-up">
        <h2>My Projects</h2>
        <p>
          {" "}
          Explore a diverse array of projects created by our users. Each project
          showcases the creativity, innovation, and technical skills of our
          community. Dive in to see the unique challenges tackled and the
          impressive solutions developed by our users..
        </p>
      </div>

      <div class="container">
        <div class="row gy-4">
          {allProjects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
