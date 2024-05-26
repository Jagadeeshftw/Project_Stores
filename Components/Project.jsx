import "bootstrap-icons/font/bootstrap-icons.css";

const Project = ({ project }) => {
  return (
    <>
      <section id="services" class="services section">
        <div class="container section-title" data-aos="fade-up">
          <h2>My Projects</h2>
          <p>
            {" "}
            Explore a diverse array of projects created by our users. Each
            project showcases the creativity, innovation, and technical skills
            of our community. Dive in to see the unique challenges tackled and
            the impressive solutions developed by our users..
          </p>
        </div>

        <div class="container">
          <div class="row gy-4">
            <div class="col-lg-6 " data-aos="fade-up" data-aos-delay="100">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
