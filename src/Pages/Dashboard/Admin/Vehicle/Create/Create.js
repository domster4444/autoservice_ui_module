import React from "react";

const Create = () => {
  return (
    <form action='post' autocomplete='off' className='mt-3'>
      <div className='col-12 col-sm w-100 form-floating'>
        <input
          required
          type='tel'
          className='form-control'
          id='fullname'
          placeholder='Your mobile number'
          onChange={(e) => {
            // setPhoneNumber(e.target.value);
          }}
        />
        <label htmlFor='fullname'>Vehicle number</label>
      </div>

      <div className='w-100 mx-0 mt-3 mb-0'>
        <label className='ms-3 text-secondary' htmlFor='meeting person'>
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
                // setVehicleType("personal");
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
                // setVehicleType("organizational");
              }}
            />
            <label className='form-check-label' htmlFor='flexRadioDefault2'>
              Organization
            </label>
          </div>
        </div>
      </div>

      <div className='col-12 col-sm w-100 form-floating'>{/* <UserList setSelectedUsers={setSelectedUsers} selectedUsers={selectedUsers} users={allUser} entries={1} /> */}</div>

      <div className='row mt-5'>
        <div className='col-6 col-sm w-100 form-floating'>
          <div className='mb-3'>
            <label htmlFor='formFile' className='form-label'>
              Vehicle Image
            </label>
            <input
              className='form-control'
              type='file'
              id='formFile'
              onChange={(e) => {
                // setVehicleImg(e.target.files[0]);
              }}
            />
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
                // setBluebookImg(e.target.files[0]);
              }}
            />
          </div>
        </div>
      </div>

      <div className='row mx-0 mt-1 mb-0 w-100'>
        <div className='col-12'>
          <button
            onClick={(e) => {
              // handleSubmit(e);
            }}
            className='py-2 btn btstrp-shadow-effect w-100 mt-4 blue-bg text-white rounded-65'
          >
            <i className='bx bx-plus me-2'></i>
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default Create;
