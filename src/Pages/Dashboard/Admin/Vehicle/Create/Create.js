import React, { useEffect, useState } from "react";
import Select from "components/Select";

import { useReducer } from "react";
import { useGetUserQuery } from "redux/api/users/userApi";
import { VehicleApiService } from "services/vehicle/VehicleService";

const Create = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("personal");
  const [blueBookFile, setBlueBookFile] = useState(null);
  const [vehicleImageFile, setVehicleImageFile] = useState(null);

  /* //* ----------------------------------------- Select Signifinicant codes lies here STARTS */
  const { data: users, isLoading: userLoading, isError } = useGetUserQuery();

  let initialSelectedUser = [];
  let initialOptionsToSelectUser;
  useEffect(() => {
    if (users) {
      initialOptionsToSelectUser = users.data.map((user) => {
        return { value: user._id, label: user.name };
      });
    }
  }, [userLoading]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_SELECTED_USER":
        return action.payload;
      default:
        return state;
    }
  };
  const [selectedUser, dispatch] = useReducer(reducer, initialSelectedUser);

  if (userLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  /* //* --------------------------------------------------------- Select Signifinicant codes lies here ENDS */

  // //! HANDLE SUBMIT FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      number: vehicleNumber,
      type: vehicleType,
      user_id: selectedUser.value,
      bluebook: blueBookFile,
      vehicle_image: vehicleImageFile,
    };

    VehicleApiService.createVehicle(dataToSubmit)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally");
      });
  };
  return (
    <section id='visitor-form' className='shadow-sm pb-4'>
      <form action='post' autocomplete='off' className='mt-3'>
        <div className='row mx-0 mt-1 mb-0 w-100'>
          <div className='col-12 col-sm w-100 form-floating'>
            <input
              required
              type='text'
              className='form-control'
              id='vehicleNumber'
              placeholder='Vehicle number'
              value={vehicleNumber}
              onChange={(e) => {
                setVehicleNumber(e.target.value);
              }}
            />
            <label htmlFor='address'>Vehicle number</label>
          </div>
        </div>

        <div className='row mx-0 mt-1 mb-0 w-100'>
          <div className='col-12 '>
            <div className='w-100 mx-0 mt-3 mb-0'>
              <label className='text-secondary' htmlFor='meeting person'>
                Vehicle Type :
              </label>
              <div className='d-flex mt-3 ps-3'>
                <div className='form-check ps-0 pe-3'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault_second'
                    id='flexRadioDefault1'
                    defaultChecked
                    onClick={(e) => {
                      setVehicleType("personal");
                    }}
                  />
                  <label className='form-check-label' htmlFor='flexRadioDefault1'>
                    Personal
                  </label>
                </div>
                <div className='form-check ps-0 pe-3'>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='flexRadioDefault_second'
                    id='flexRadioDefault2'
                    onClick={(e) => {
                      setVehicleType("organizational");
                    }}
                  />
                  <label className='form-check-label' htmlFor='flexRadioDefault2'>
                    Organization
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-12 col-sm w-100 form-floating'>
          <div className='row mt-5'>
            <Select optionList={initialOptionsToSelectUser} placeholder='Select Users' selectedOption={selectedUser} dispatch={dispatch} useReducerDispatchType='SET_SELECTED_USER' />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-6 col-sm w-100 form-floating'>
            <div className='row mx-0 mt-1 mb-0 w-100'>
              <div className='col-12'>
                <label htmlFor='formFile' className='form-label'>
                  Vehicle Image
                </label>
                <input
                  className='form-control'
                  type='file'
                  id='formFile'
                  onChange={(e) => {
                    setVehicleImageFile(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <div className='col-6 col-sm w-100 form-floating'>
            <div className='mb-3'>
              <label htmlFor='formFile' className='form-label'>
                Bluebook Image
              </label>
              <input
                className='form-control'
                type='file'
                id='formFile'
                onChange={(e) => {
                  setBlueBookFile(e.target.files[0]);
                }}
              />
            </div>
          </div>
        </div>

        <div className='row mx-0 mt-1 mb-0 w-100'>
          <div className='col-12'>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              className='py-2 btn btstrp-shadow-effect w-100 mt-4 blue-bg text-white rounded-65'
            >
              <i className='bx bx-plus me-2'></i>
              Create
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Create;
