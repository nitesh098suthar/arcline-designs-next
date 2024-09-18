import { DataTable } from "./components/DataTable";
import SwitchingButtons from "../components/SwitchingButtons";

const ProjectGetter = () => {
  return (
    <>
      <div>
        <SwitchingButtons />
      </div>
      <div className="bg-white min-h-screen pb-16 overflow-hidden px-6 ">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-col mb-8 pt-16">
            <h1 className="text-3xl font-semibold text-center">
              Manage all projectssssss
            </h1>
            <div className="flex gap-1 my-4">
              <div className="w-14 h-[5px] rounded-full bg-primary"></div>
              <div className="w-4 h-[5px] rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
        <div>
          <DataTable />
        </div>
      </div>
    </>
  );
};

export default ProjectGetter;
