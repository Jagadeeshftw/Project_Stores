import { SiThunderstore } from "react-icons/si";
import { RiAddLargeFill } from "react-icons/ri";

const Home = () => {
  return (
    <div class="px-4 py-5 text-center g-5 ">
      <SiThunderstore style={{ width: "72px", height: "57px" }} />
      <h1 class="display-5 fw-bold text-body-emphasis">Project Stores</h1>
      <div class="col-lg-6 mx-auto">
        <h5 class="my-4">No Project Selected</h5>
        <p class="lead mb-4">Select a project or get started with a new one</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center align-content-sm-center ">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            <span class="mx-2">
              <RiAddLargeFill />
            </span>
            <span>Create new project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
