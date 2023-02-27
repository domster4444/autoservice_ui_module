import React from "react";
import { useNavigate } from "react-router-dom";

//* components
import Table from "components/Table";

// static data for table
const data = [
  {
    user: "Binod Giri",
    vehicle: "BHA 10 J",
    issue: ["Punctured tyre", "Needs a wash"],
    solutions: ["Need more repair fixes on rear"],
    state: "completed",
    discount: {
      type: "percentage",
      value: "10",
    },
    completed_date: "15-01-2022",
  },

  {
    user: "Shyam Shrestha",
    vehicle: "RA 1 Ka",
    issue: ["Oli leakage", "Needs servicing"],
    solutions: ["Need fix for engine."],
    state: "completed",
    discount: {
      type: "percentage",
      value: "10",
    },
    completed_date: "15-02-2022",
  },
  {
    user: "Rajesh Shrestha",
    vehicle: "KA 1 LA",
    issue: ["Flat tyre", "Needs maintenance"],
    solutions: ["Need new tyre"],
    state: "pending",
    discount: {
      type: "percentage",
      value: "5",
    },
    completed_date: "15-02-2022",
  },
  {
    user: "Sita Sharma",
    vehicle: "MA 1 BA",
    issue: ["Overheating engine", "Needs oil change"],
    solutions: ["Need radiator repair"],
    state: "completed",
    discount: {
      type: "fixed",
      value: "1000",
    },
    completed_date: "20-03-2022",
  },
  {
    user: "Bikram Singh",
    vehicle: "SA 1 RA",
    issue: ["Brakes not working", "Needs new battery"],
    solutions: ["Need new brake pads"],
    state: "pending",
    discount: {
      type: "percentage",
      value: "7",
    },
    completed_date: "11-02-2022",
  },
  {
    user: "Ganga Shahi",
    vehicle: "TA 1 MA",
    issue: ["Transmission issues", "Needs tune-up"],
    solutions: ["Need transmission repair"],
    state: "completed",
    discount: {
      type: "fixed",
      value: "2000",
    },
    completed_date: "12-02-2022",
  },
  {
    user: "Anil Aryal",
    vehicle: "GA 1 DA",
    issue: ["Suspension problems", "Needs oil change"],
    solutions: ["Need new suspension"],
    state: "pending",
    discount: {
      type: "percentage",
      value: "5",
    },
    completed_date: "16-02-2022",
  },
  {
    user: "Suresh Sharma",
    vehicle: "DA 6 NA",
    issue: ["Exhaust system issues", "Needs servicing"],
    solutions: ["Need new exhaust pipes"],
    state: "completed",
    discount: {
      type: "fixed",
      value: "3000",
    },
    completed_date: "30-05-2022",
  },
  {
    user: "Anil Rajbhandari",
    vehicle: "KA 2 NA",
    issue: ["Engine not starting", "Needs oil change"],
    solutions: ["Need new starter motor"],
    state: "pending",
    discount: {
      type: "percentage",
      value: "5",
    },
    completed_date: "14-04-2022",
  },
  {
    user: "Sudip Shrestha",
    vehicle: "NA 1 PA",
    issue: ["Transmission slipping", "Needs tune-up"],
    solutions: ["Need new transmission fluid"],
    state: "completed",
    discount: {
      type: "fixed",
      value: "1000",
    },
    completed_date: "20-06-2022",
  },
  {
    user: "Sabin Shrestha",
    vehicle: "PA 1 SA",
    issue: ["Clutch not working", "Needs new battery"],
    solutions: ["Need new clutch"],
    state: "pending",
    discount: {
      type: "percentage",
      value: "7",
    },
    completed_date: "04-01-2022",
  },
  {
    user: "Bikram Karki",
    vehicle: "RA 1 BA",
    issue: ["Power steering issues", "Needs oil change"],
    solutions: ["Need new power steering pump"],
    state: "completed",
    discount: {
      type: "fixed",
      value: "2000",
    },
    completed_date: "25-07-2022",
  },
  {
    user: "Nabin Shah",
    vehicle: "MA 1 TA",
    issue: ["Alternator not working", "Needs maintenance"],
    solutions: ["Need new alternator"],
    state: "pending",
    discount: {
      type: "percentage",
      value: "5",
    },
    completed_date: "05-01-2022",
  },
  {
    user: "Sarita Karki",
    vehicle: "DA 1 GA",
    issue: ["Fuel system issues", "Needs servicing"],
    solutions: ["Need new fuel pump"],
    state: "completed",
    discount: {
      type: "fixed",
      value: "3000",
    },
    completed_date: "30-08-2022",
  },
  {
    user: "Prakash Sharma",
    vehicle: "KA 1 RA",
    issue: ["Timing belt issues", "Needs oil change"],
    solutions: ["Need new timing belt"],
    state: "pending",
    discount: {
      type: "percentage",
      value: "5",
    },
    completed_date: "",
  },
  {
    user: "Sabin Ghimire",
    vehicle: "NA 1 MA",
    issue: ["Water pump issues", "Needs tune-up"],
    solutions: ["Need new water pump"],
    state: "completed",
    discount: {
      type: "fixed",
      value: "1000",
    },
    completed_date: "",
  },
];

const List = () => {
  const navigate = useNavigate();

  // column defination for tables
  const columns = [
    {
      name: "Vehicle number",
      selector: "vehicle",
      sortable: true,
    },
    {
      name: "User",
      selector: "user",
      sortable: true,
    },
    {
      name: "Issues",
      selector: "issue",
      sortable: true,
      cell: (d) => <span>{d.issue.join(", ")}</span>,
    },
    {
      name: "Created date",
      selector: "completed_date",
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
          if (badgeText.textContent === "completed") {
            badgeText.textContent = "incomplete";
          } else {
            badgeText.textContent = "completed";
          }
        }

        return (
          <div>
            {row.state === "completed" ? (
              <div onClick={toggleVerification} className='cursor pb-2 verification-badge d-flex align-items-center text-white badge-verified'>
                <div>{row.state}</div>
              </div>
            ) : (
              <div onClick={toggleVerification} className='cursor pb-2 verification-badge d-flex align-items-center text-white badge-unverified'>
                <div>{row.state}</div>
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
              navigate(`/service-update/${row._id}`);
            }}
          >
            <i className='bx bxs-edit me-2'></i>
            Edit
          </button>
          <button className='btn-sm mx-2 my-1 btn btn-danger'>
            <i className='bx bxs-trash me-2'></i>
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default List;
