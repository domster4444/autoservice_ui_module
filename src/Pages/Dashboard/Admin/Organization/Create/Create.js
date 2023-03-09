import React, { useState, useReducer } from "react";
import { MdDeleteForever } from "react-icons/md";

import toastMsg from "library/utilities/toastMsg";

const Create = () => {
  const [formErrorMsg, setFormErrorMsg] = useState({
    status: false,
    message: "",
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ORGANIZATION_NAME":
        return {
          ...state,
          organizationName: action.payload,
        };
      case "SET_CONTRACT_START_DATE":
        return {
          ...state,
          contractStartDate: action.payload,
        };
      case "SET_CONTRACT_END_DATE":
        return {
          ...state,
          contractEndDate: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    organizationName: "",
    contractStartDate: "",
    contractEndDate: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { organizationName, contractStartDate, contractEndDate } = state;

  const [organizationContracts, setOrganizationContracts] = useState([]);

  const handleAddOrganizationContract = (e) => {
    e.preventDefault();
    if (contractStartDate === "" || contractEndDate == "") {
      toastMsg("Please specify both contract start date and end date.", false);
      return 0;
    }
    setOrganizationContracts([...organizationContracts, { contractStartDate, contractEndDate }]);
    dispatch({ type: "SET_CONTRACT_START_DATE", payload: "" });
    dispatch({ type: "SET_CONTRACT_END_DATE", payload: "" });
  };

  const handleDeleteLastOrganizationContract = (e) => {
    if (organizationContracts.length === 0) {
      toastMsg("No contract to delete.", false);
      return 0;
    }
    e.preventDefault();
    organizationContracts.splice(-1, 1);
    setOrganizationContracts([...organizationContracts]);
  };
  const handleDeleteSpecificOrganizationContract = (organizationContractIndex) => {
    // delete issue of given index
    organizationContracts.splice(organizationContractIndex, 1);
    setOrganizationContracts([...organizationContracts]);
  };

  return (
    <section id='visitor-form' class='px-4 pb-5 rounded-4 bg-white position-relative shadow-sm rounded-65'>
      <form action='post' autocomplete='off' className='mt-3'>
        <div class='row mx-0 mt-3 mb-0 w-100'>
          <div class='col-12 col-sm w-100 form-floating'>
            <input type='text' class='form-control' id='fullname' placeholder='Your full name' />
            <label for='fullname'>Organization Name</label>
          </div>
        </div>
        <div class='row  mx-0 mt-3 mb-0 w-100'>
          <div class='col-12 col-sm w-100 form-floating'>
            <input
              type='date'
              class='form-control'
              id='start-date'
              placeholder='Contract start date'
              value={contractStartDate}
              onChange={(e) => {
                dispatch({ type: "SET_CONTRACT_START_DATE", payload: e.target.value });
              }}
            />
            <label for='start-date'>Contract start date</label>
          </div>

          <div class='col-12 col-sm w-100 form-floating'>
            <input
              type='date'
              class='form-control'
              id='end-date'
              placeholder='Contract end date'
              value={contractEndDate}
              onChange={(e) => {
                dispatch({ type: "SET_CONTRACT_END_DATE", payload: e.target.value });
              }}
            />
            <label for='end-date'>Contract start date</label>
          </div>

          <div className='d-flex'>
            <button
              type='button'
              onClick={(e) => {
                handleAddOrganizationContract(e);
              }}
              className='py-1 btn btstrp-shadow-effect mt-4 blue-bg text-white rounded-65'
            >
              <i className='bx bx-plus mx-2'></i>
              Add Issue
            </button>
            <button
              type='button'
              onClick={(e) => {
                handleDeleteLastOrganizationContract(e);
              }}
              className='py-1 mx-2 btn btstrp-shadow-effect mt-4 blue-bg text-white rounded-65'
            >
              <i className='bx bx-minus mx-2'></i>
              Delete Last Issue
            </button>
          </div>
        </div>

        <div className='d-flex flex-wrap mb-4'>
          {/* //? contract container  starts */}
          {organizationContracts.map((contract, index) => (
            <div className='my-5 mx-2 col-12 col-md-4 col-lg-3 mb-3' key={index}>
              <div className='card h-100 border-0 shadow-sm'>
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h6 className='card-title'>Contract: {index + 1}</h6> <br />
                    <h6 className='card-title'>Start Date : {contract.contractStartDate}</h6>
                    <h6 className='card-title'>End Date &nbsp; : {contract.contractEndDate}</h6>
                  </div>
                  <div className='mt-4 d-flex justify-content-end'>
                    <button
                      type='button'
                      className='btn blue-bg text-white d-flex align-items-center fs-5'
                      onClick={(e) => {
                        handleDeleteSpecificOrganizationContract(index);
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

        <div class='row mx-0 mt-1 mb-0 w-100'>
          <div class='col-12'>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              class='py-2 btn btstrp-shadow-effect w-100 mt-4 blue-bg text-white rounded-65'
            >
              <i class='bx bx-plus'></i>
              Create
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Create;
