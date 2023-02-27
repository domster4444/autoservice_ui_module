import React, { useState, useReducer } from "react";
import SelectInput from "components/Select/Select";
import MultiSelect from "components/MultiSelect";
import { MdDeleteForever } from "react-icons/md";
import toastMsg from "library/utilities/toastMsg";
import FormErrorTag from "components/FormErrorTag";

const vehicleOptions = [
  { value: "BA 1 PA", label: "BA 1 PA" },
  { value: "BHA 10 J", label: "BHA 10 J" },
  { value: "BHO 1 AA", label: "BHO 1 AA" },
  { value: "KA 1 LA", label: "KA 1 LA" },
  { value: "KA 1 PA", label: "KA 1 PA" },
  { value: "MA 1 BA", label: "MA 1 BA" },
  { value: "RA 1 KA", label: "RA 1 KA" },
  { value: "SA 1 RA", label: "SA 1 RA" },
  { value: "TA 1 MA", label: "TA 1 MA" },
  { value: "GA 1 DA", label: "GA 1 DA" },
  { value: "BA 12 N", label: "BA 12 N" },
  { value: "KA 55 A", label: "KA 55 A" },
  { value: "MA 1 RA", label: "MA 1 RA" },
  { value: "RA 2 SA", label: "RA 2 SA" },
  { value: "SA 3 TA", label: "SA 3 TA" },
  { value: "TA 4 GA", label: "TA 4 GA" },
  { value: "GA 5 DA", label: "GA 5 DA" },
];
const userOption = [
  { value: "9816008145", label: "9816008145" },
  { value: "9816008146", label: "9816008146" },
  { value: "9816008147", label: "9816008147" },
  { value: "9816008148", label: "9816008148" },
  { value: "9816008149", label: "9816008149" },
  { value: "9816008150", label: "9816008150" },
  { value: "9816008151", label: "9816008151" },
  { value: "9816008152", label: "9816008152" },
  { value: "9816008153", label: "9816008153" },
  { value: "9816008154", label: "9816008154" },
  { value: "9816008155", label: "9816008155" },
];

const categoryOptions = [
  { value: "Engine", label: "Engine" },
  { value: "Suspension", label: "Suspension" },
  { value: "Brake", label: "Brake" },
  { value: "Electrical", label: "Electrical" },
  { value: "Body", label: "Body" },
  { value: "Interior", label: "Interior" },
];

const CreateForm = () => {
  const [formErrorMsg, setFormErrorMsg] = useState({
    status: false,
    message: "",
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_SELECTED_VEHICLE":
        return {
          ...state,
          selectedVehicle: action.payload,
        };
      case "SET_SELECTED_USER":
        return {
          ...state,
          selectedUser: action.payload,
        };
      case "SET_ISSUE_TITLE":
        return {
          ...state,
          issueTitle: action.payload,
        };
      case "SET_ISSUE_DESCRIPTION":
        return {
          ...state,
          issueDescription: action.payload,
        };
      case "SET_ISSUE_CATEGORY":
        return {
          ...state,
          selectedCategory: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    selectedVehicle: "",
    selectedUser: "",
    issueTitle: "",
    issueDescription: "",
    selectedCategory: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedVehicle, selectedUser, issueTitle, issueDescription, selectedCategory } = state;

  const [issues, setIssues] = useState([]);
  const handleAddIssue = (e) => {
    e.preventDefault();
    if (issueTitle === "" || issueDescription == "") {
      toastMsg("Please specify both issue title and description.", false);
      return 0;
    }
    setIssues([...issues, { issueTitle, issueDescription }]);
    dispatch({ type: "SET_ISSUE_TITLE", payload: "" });
    dispatch({ type: "SET_ISSUE_DESCRIPTION", payload: "" });
  };

  const handleDeleteLastIssue = (e) => {
    // check if issues array is empty
    if (issues.length === 0) {
      toastMsg("No issue to delete.", false);
      return 0;
    }

    e.preventDefault();
    issues.splice(-1, 1);
    setIssues([...issues]);
  };
  const handleDeleteSpecificIssue = (issueIndex) => {
    // delete issue of given index
    issues.splice(issueIndex, 1);
    setIssues([...issues]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 create service data starts here 📝", state, issues, "📝 create service data ends here 📝");

    const errorMessages = {
      vehicle: "Please select vehicle.",
      user: "Please select user.",
      category: "Please select category.",
      issue: "Please add at least one issue.",
    };

    const selectedInputs = {
      vehicle: selectedVehicle,
      user: selectedUser,
      category: selectedCategory.length,
      issue: issues.length,
    };

    const errorMessage = Object.keys(selectedInputs).find((key) => !selectedInputs[key]);

    if (errorMessage) {
      setFormErrorMsg({
        status: true,
        message: errorMessages[errorMessage],
      });
      return;
    }

    setFormErrorMsg({
      status: false,
      message: "",
    });
    toastMsg("Service created successfully.", true);
  };

  return (
    <>
      <section id='visitor-form'>
        <form action='post'>
          <div className='row mx-0 mt-3 mb-0 '>
            <SelectInput placeholder='Select vehicle ...' optionList={vehicleOptions} selectedOption={selectedVehicle} dispatch={dispatch} useReducerDispatchType={"SET_SELECTED_VEHICLE"} />
            <SelectInput placeholder='Select users ...' optionList={userOption} selectedOption={selectedUser} dispatch={dispatch} useReducerDispatchType={"SET_SELECTED_USER"} />

            <div className='col-12 col-sm w-100 form-floating'>
              <MultiSelect placeholder='Select category ...' selectedOption={selectedCategory} optionList={categoryOptions} dispatch={dispatch} useReducerDispatchType={"SET_ISSUE_CATEGORY"} />
            </div>
          </div>
          <div className='row  mx-0 mt-0 mb-0 w-100'>
            <div className='col-12 col-sm w-100 form-floating'>
              <input
                required
                type='text'
                className='form-control'
                id='issue'
                placeholder='Issue title'
                value={issueTitle}
                onChange={(e) => {
                  dispatch({ type: "SET_ISSUE_TITLE", payload: e.target.value });
                }}
              />
              <label htmlFor='address'>Issue title</label>
            </div>

            <textarea
              required
              id='message'
              className='ms-3 mt-2 p-0 form-field w-100 bg-transparent py-3'
              placeholder='Description'
              rows='6'
              value={issueDescription}
              onChange={(e) => {
                dispatch({ type: "SET_ISSUE_DESCRIPTION", payload: e.target.value });
              }}
            ></textarea>

            <div className='d-flex'>
              <button
                type='button'
                onClick={(e) => {
                  handleAddIssue(e);
                }}
                className='py-1 btn btstrp-shadow-effect mt-4 blue-bg text-white rounded-65'
              >
                <i className='bx bx-plus mx-2'></i>
                Add Issue
              </button>
              <button
                type='button'
                onClick={(e) => {
                  handleDeleteLastIssue(e);
                }}
                className='py-1 mx-2 btn btstrp-shadow-effect mt-4 blue-bg text-white rounded-65'
              >
                <i className='bx bx-minus mx-2'></i>
                Delete Last Issue
              </button>
            </div>
          </div>

          <div className='d-flex flex-wrap mb-4'>
            {/* //? issues container  starts */}
            {issues.map((issue, index) => (
              <div className='my-5 mx-2 col-12 col-md-4 col-lg-3 mb-3' key={index}>
                <div className='card h-100 border-0 shadow-sm'>
                  <div className='card-body d-flex flex-column justify-content-between'>
                    <div>
                      <h5 className='card-title'>{issue.issueTitle}</h5>
                      <p className='card-text'>{issue.issueDescription}</p>
                    </div>
                    <div className='mt-4 d-flex justify-content-end'>
                      <button
                        type='button'
                        className='btn blue-bg text-white d-flex align-items-center fs-5'
                        onClick={(e) => {
                          handleDeleteSpecificIssue(index);
                        }}
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* //? issues container  ends */}
          </div>

          {formErrorMsg.status && (
            <FormErrorTag>
              <p className='ps-3'>{formErrorMsg.message}</p>
            </FormErrorTag>
          )}

          <div className='row mx-0  mt-1 mb-0 w-100'>
            <div className='col-12'>
              <button
                type='submit'
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className='py-2 btn btstrp-shadow-effect w-100 blue-bg text-white rounded-65 '
              >
                <i className='bx bx-plus me-2'></i>
                Add
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateForm;
