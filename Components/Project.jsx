import "bootstrap-icons/font/bootstrap-icons.css";

const Project = ({ project }) => {
  return (
    <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
      <div class="service-item d-flex">
        <div class="icon flex-shrink-0">
          <i class="bi bi-briefcase"></i>
        </div>
        <div>
          <h4 class="title">
            <a href="services-details.html" class="stretched-link">
              {project.projectTitle}
            </a>
          </h4>
          <p class="description">{project.projectDescription}</p>

          <p class="description">{project.dueDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
