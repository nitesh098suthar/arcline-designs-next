// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteOndeDesignAction,
//   getAllDesignsAction,
// } from "../../redux/actions/designActions";
// import { useNavigate } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import { clearError, clearMessage } from "../../redux/reducers/globalReducer";
// import toast from "react-hot-toast";
// import { useEffect } from "react";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from '@mui/icons-material/Edit';

const ProjectGetter = () => {
  // const dispatch = useDispatch();
  // const nav = useNavigate();

  // const { allListings } = useSelector((state) => state.designReducer);
  // const { loading, message, error } = useSelector(
  //   (state) => state.globalReducer
  // );

  // const updateDesign = (id) => {
  //   nav(`projectupdater/${id}`);
  // };

  // const deleteDesign = async (id) => {
  //   await dispatch(deleteOndeDesignAction(id));
  //   dispatch(getAllDesignsAction());
  // };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearError());
  //   }
  //   if (message) {
  //     toast.success("Project deleted successfully.");
  //     dispatch(clearMessage());
  //   }
  // }, [dispatch, clearMessage, clearError, message, error, toast]);
  const loading: boolean = false;

  return (
    <>
      {loading ? (
        <></>
      ) : (
        // <Loader />
        <div className="bg-white min-h-screen pb-16 overflow-hidden px-6 ">
          <div className="flex justify-center items-center">
            <div className="flex items-center flex-col mb-8 pt-16">
              <h1 className="text-3xl font-semibold text-center">
                Manage all projects
              </h1>
              <div className="flex gap-1 my-4">
                <div className="w-14 h-[5px] rounded-full bg-primary"></div>
                <div className="w-4 h-[5px] rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto scrollbarRemover border-l border-r lg:border-0 border-lightGrey">
            <table className="mx-auto max-w-4xl w-full bg-white ">
              <thead>
                <tr className="text-darkGray bg-lightGrey">
                  <th className="p-4 text-center border-b border-lightGray">
                    ID
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Design Title
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Location
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Height (ft)
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Width (ft)
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Bathrooms
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Bedrooms
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Area (sq ft)
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Architect
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Popular
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Category
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Update
                  </th>
                  <th className="p-4 text-center border-b border-lightGray">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {allListings &&
                  allListings.map((design, index) => (
                    <tr key={design._id} className="border-b border-lightGray">
                      <td className="p-4 text-center">{index + 1}</td>
                      <td className="p-4 text-center capitalize">
                        {design.designTitle}
                      </td>
                      <td className="p-4 text-center">{design.location}</td>
                      <td className="p-4 text-center">{design.heightInFeet}</td>
                      <td className="p-4 text-center">{design.widthInFeet}</td>
                      <td className="p-4 text-center">
                        {design.noOfBathRooms}
                      </td>
                      <td className="p-4 text-center">{design.noOfBedRooms}</td>
                      <td className="p-4 text-center">
                        {design.areaInSquareFeet}
                      </td>
                      <td className="p-4 text-center capitalize">
                        {design.architectName}
                      </td>
                      <td className="p-4 text-center">
                        {design.popular ? "Yes" : "No"}
                      </td>
                      <td className="p-4 text-center capitalize">
                        {design.category}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => updateDesign(design._id)}
                          className="px-4 py-2 text-green-600 hover:bg-green-200 rounded bg-green-100"
                        >
                           <EditIcon />
                        </button>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => deleteDesign(design._id)}
                          className="px-4 py-2  text-red-600 hover:bg-red-200 rounded bg-red-100"
                        >
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>
                  ))} */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGetter;
