import React from "react";

const Create = () => {
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
              id='address'
              placeholder='Contract start date'
              //    value={startDate}
              // onChange={(e) => setStartDate(e.target.value)}
            />
            <label for='address'>Contract start date</label>
          </div>

          <div class='col-12 col-sm w-100 form-floating'>
            <input
              type='date'
              class='form-control'
              id='address'
              placeholder='Contract end date'
              //    value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
            <label for='address'>Contract start date</label>
          </div>

          <div className='d-flex'>
            <button
              onClick={(e) => {
                //   handleAddContract(e);
              }}
              class='py-1 btn btstrp-shadow-effect mt-4 blue-bg text-white rounded-65'
            >
              <i class='bx bx-plus mx-2'></i>
              Add contract
            </button>
          </div>
        </div>

        {/* <div className='contract-user-container d-flex flex-sm-column flex-md-column flex-lg-row'>
        {(() => {
          if (contracts.length > 0) {
            return (
              <div className='left-division my-5'>
                <label for='address'>Contract start date</label>
                <div className='contract-container'>
                  {(() => {
                    return contracts.map((item, index) => {
                      return (
                        <Zoom>
                          <div className='contract-card mx-1'>
                            <div>Start date:&nbsp;{item.startDate}</div>
                            <div>End date:&nbsp;&nbsp;{item.endDate}</div>
                            <div className='d-flex mt-2 justify-content-end'>
                              <button
                                onClick={(e) => {
                                  handleDeleteContract(e, index);
                                }}
                                class='btn btn-sm btstrp-shadow-effect blue-bg text-white rounded-65'
                              >
                                <i class='bx bxs-trash'></i>
                              </button>
                            </div>
                          </div>
                        </Zoom>
                      );
                    });
                  })()}
                </div>
              </div>
            );
          }
        })()}
      </div> */}
        {/* <UserList 
      setSelectedUsers={setSelectedUsers}
       selectedUsers={selectedUsers}
        users={allUser} /> */}

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
