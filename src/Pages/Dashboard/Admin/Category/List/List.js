import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetCategoryQuery } from "redux/api/category/categoryApi";

import ModalBox from "components/ModalBox";
import AlertBody from "components/AlertBody";

//* components
import Table from "components/Table";

const List = () => {
  const navigate = useNavigate();

  const { data: categoryData, isLoading: categoryLoading, isError: categoryError } = useGetCategoryQuery();

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Description",
      selector: "description",
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div className='d-flex justify-content-center   w-100 flex-wrap'>
          <button
            type='button'
            className='btn-sm mx-2 my-1 btn text-white'
            style={{ background: "#50B351" }}
            onClick={() => {
              navigate(`/category-update/${row._id}`);
            }}
          >
            <i className='bx bxs-edit me-2'></i>
            Edit
          </button>

          <ModalBox
            btnName={"delete"}
            deleteRecordCall={() => {
              alert("delete function called");
            }}
            row={row}
          >
            <AlertBody>
              <section>
                <p>Do you really want to delete the following record ?</p>
                <div>
                  <b>Category name : </b> <span>{row.name}</span>
                </div>
                <div>
                  <b>Category description : </b> <span>{row.description}</span>
                </div>
              </section>
            </AlertBody>
          </ModalBox>
        </div>
      ),
    },
  ];

  if (categoryLoading) return <div>Loading...</div>;

  return (
    <div>
      <Table columns={columns} data={categoryData.data} />
    </div>
  );
};

export default List;
