import React from "react";
import { useNavigate } from "react-router-dom";

import { useGetOrganizationQuery } from "redux/api/organization/organizationApi";

//* components
import Table from "components/Table";

import ModalBox from "components/ModalBox";
import AlertBody from "components/AlertBody";

const List = () => {
  const navigate = useNavigate();

  const { data: organizationData, isLoading: organizationLoading, isError: organizationError } = useGetOrganizationQuery();

  const convertDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return `${day}-${month}-${year}`;
  };

  const columns = [
    {
      name: "Organization",
      selector: "name",
      sortable: true,
    },

    {
      name: "Contract Details",
      selector: "contracts",
      sortable: true,
      cell: (d) => (
        <span>
          {d.contracts.map((contract) => (
            <div style={{ background: "#0f5288", margin: ".2rem", padding: ".5rem", borderRadius: ".55rem" }}>
              <span style={{ color: "#ffffff" }}> Start Date: {convertDate(contract.start_date)}</span> <br />
              <span style={{ color: "#ffffff" }}> End Date: {convertDate(contract.end_date)}</span>
            </div>
          ))}
        </span>
      ),
    },

    {
      name: "Users Details",
      selector: "user",
      sortable: true,
      cell: (d) => (
        <span>
          {d.user.map((user) => (
            <div style={{ background: "#0f5288", margin: ".2rem", padding: ".5rem", borderRadius: ".55rem" }}>
              <span style={{ color: "#ffffff" }}>Id: {user}</span>
              <br />
            </div>
          ))}
        </span>
      ),
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
              navigate(`/organization-update/${row._id}`);
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
                  <b>Organization name : </b> <span>{row.name}</span>
                </div>
              </section>
            </AlertBody>
          </ModalBox>
        </div>
      ),
    },
  ];

  if (organizationLoading) return <div>Loading...</div>;

  return (
    <div>
      <Table columns={columns} data={organizationData.data} />
    </div>
  );
};

export default List;
