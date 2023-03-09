import React from "react";
import { useNavigate } from "react-router-dom";

import { useGetVehicleQuery } from "redux/api/vehicle/vehicleApi";

import ModalBox from "components/ModalBox";
import AlertBody from "components/AlertBody";

//* components
import Table from "components/Table";

const List = () => {
  const navigate = useNavigate();
  const { data: vehicleData, isLoading: vehicleLoading, isError: vehicleError } = useGetVehicleQuery();

  console.log(vehicleData);

  const columns = [
    {
      name: "Vehicle number",
      selector: "number",
      sortable: true,
    },
    {
      name: "Identity number",
      selector: "identity_number",
      sortable: true,
    },
    {
      name: "Model",
      selector: "model",
      sortable: true,
    },
    {
      name: "Type",
      selector: "type",
      sortable: true,
    },
    // {
    //   name: "User",
    //   selector: "user_id",
    //   sortable: true,
    // },
    // {
    //   name: "Organization",
    //   selector: "organization_id",
    //   sortable: true,
    // },
    {
      name: "Bluebook",
      selector: "bluebook",
      sortable: true,
    },
    {
      name: "Vehicle image",
      selector: "vehicle_image",
      sortable: true,
    },
    {
      name: "State",
      selector: "state",
      sortable: true,
      cell: (row, index) => {
        function toggleVerification(indexNo) {
          var badge = document.getElementsByClassName("verification-badge")[index];
          badge.classList.toggle("badge-verified");
          badge.classList.toggle("badge-unverified");
          var badgeText = badge.querySelector("div");
          if (badgeText.textContent === "verified") {
            badgeText.textContent = "not verified";
          } else {
            badgeText.textContent = "verified";
          }
        }

        return (
          <div>
            {row.is_verified === true ? (
              <div onClick={toggleVerification} className='cursor pb-2 verification-badge d-flex align-items-center text-white badge-verified'>
                <div>verified</div>
              </div>
            ) : (
              <div onClick={toggleVerification} className='cursor pb-2 verification-badge d-flex align-items-center text-white badge-unverified'>
                <div>not verified</div>
              </div>
            )}
          </div>
        );
      },
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
              navigate(`/vehicle-update/${row._id}`);
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
                  <b>vehicle number : </b> <span>{row.number}</span>
                </div>
                <div>
                  <b>vehicle model : </b> <span>{row.model}</span>
                </div>
              </section>
            </AlertBody>
          </ModalBox>
        </div>
      ),
    },
  ];

  if (vehicleLoading) {
    return <div>Loading...</div>;
  }
  if (vehicleError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Table columns={columns} data={vehicleData.data} />
    </div>
  );
};

export default List;
