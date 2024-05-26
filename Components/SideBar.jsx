import { SiThunderstore } from "react-icons/si";
const SideBar = ({ handleIsActive, getActiveBar }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <SiThunderstore style={{ width: "36px", height: "28px" }} />
        <span className=" ms-1 fs-4">Project Stores</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className={
              getActiveBar === "Home"
                ? "nav-link active"
                : "nav-link link-body-emphasis"
            }
            aria-current="page"
            onClick={() => handleIsActive("Home")}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className={
              getActiveBar === "MyProjects"
                ? "nav-link active"
                : "nav-link link-body-emphasis"
            }
            onClick={() => handleIsActive("MyProjects")}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            My Projects
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
