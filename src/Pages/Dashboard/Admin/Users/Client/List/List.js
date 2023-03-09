import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetUserByRoleQuery } from "redux/api/users/userApi";
import { dateFormatter } from "library/utilities/dateFormatter";

import Table from "components/Table";
import ModalBox from "components/ModalBox";
import AlertBody from "components/AlertBody";

const List = () => {
  const navigate = useNavigate();
  const { data: userData, isLoading: userLoading, isError: userError } = useGetUserByRoleQuery("user");

  const columns = [
    {
      name: "Profile",
      selector: "avatar",
      sortable: true,

      cell: (row, index) => {
        return (
          <div className='avatar'>
            <img src={row.avatar} alt='avatar' />
          </div>
        );
      },
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Phone number",
      selector: "phone_number",
      sortable: true,
    },

    {
      name: "Type",
      selector: "type",
      sortable: true,
    },
    {
      name: "Roles",
      selector: "roles",
      sortable: true,
      cell: (d) => <span>{d.roles.join(", ")}</span>,
    },
    {
      name: "Created at",
      selector: "created_at",
      sortable: true,
      cell: (d) => <span>{dateFormatter(d.created_at)}</span>,
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
              navigate(`/users-admin-update/${row._id}`);
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
                  <b>Name : </b> <span>{row.name}</span>
                </div>
                <div>
                  <b>Phone number : </b> <span>{row.phone_number}</span>
                </div>
              </section>
            </AlertBody>
          </ModalBox>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} data={userData} />
    </div>
  );
};

export default List;
