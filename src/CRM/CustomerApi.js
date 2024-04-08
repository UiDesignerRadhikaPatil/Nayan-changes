import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerEmployeeDetails from "./CustomerEmployeeDetails";
import axios from "axios";
import Navbar from "../Navbar";

function CustomerApi() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch(
        "https://truecodeapi.microtechsolutions.co.in/api/CustomerEmployee"
      );
      const getdata = await res.json();
      setCategory(getdata);
    };

    getcategory();
  }, []);

  const navigate = useNavigate();

  const UpdateCustomer = (Id) => {
    navigate("/editcustomeremployee/" + Id);
  };

  const DeleteEmployee = (Id) => {
    axios
      .delete(
        "https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry?Id=" +
        Id
      )
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        alert("Delete Record Successfully");
      });
  };

  const BackPage = () => {
    navigate("/customeremployeedetails");
  };

  //>>>>>>>>>>..........................................>>>>>>>>>>>>>>>>>>>>//

  return (
    <div className="d-flex">
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />
        <div style={{ height: "100%" }}>
          <div
            style={{
              padding: "20px 5%",
              height: "calc(100% - 64px)",
              overflowY: "scroll",
              background: "whitesmoke",
            }}
          >
            <div
              style={{
                display: "grid",
                background: "white",
                gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
              }}
            >
              <>
                <table className="table table-striped table-hover table-responsive-md table-bordered">
                  <thead>
                    <tr>
                      {/* <th scope="col-md-2">Sr. No</th> */}
                      <th scope="col-md-2">Id</th>
                      {/* <th scope="col-md-2">Date</th> */}
                      <th scope="col-md-2">Account Id</th>
                      <th scope="col-md-2">Employee Id</th>
                      <th scope="col-md-2">From Date </th>
                      <th scope="col-md-2">To Date </th>
                      <th scope="col-md-2">Basic </th>
                      <th scope="col-md-2">HRA </th>
                      <th scope="col-md-2">Tea </th>
                      <th scope="col-md-2">Conveyance </th>
                      <th scope="col-md-2">CCA </th>
                      <th scope="col-md-2">OCC </th>
                      <th scope="col-md-2">Gross Salary </th>
                      <th scope="col-md-2">PF </th>
                      <th scope="col-md-2"> PT</th>
                      <th scope="col-md-2"> Labour Welfare</th>
                      <th scope="col-md-2"> ESI </th>
                      <th scope="col-md-2"> Total Deduction </th>
                      <th scope="col-md-2"> Active </th>
                      <th scope="col-md-2"> Created By </th>
                      <th scope="col-md-2">
                        {" "}
                        ........................Action.........................{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((getcate, index) => (
                      <tr key={getcate.Id}>
                        {/* <td scope="col-md-2">{index + 1}</td> */}
                        <td scope="col-md-2">{getcate.Id}</td>
                        <td scope="col-md-2">{getcate.AccountId}</td>
                        <td scope="col-md-2"> {getcate.EmployeeId}</td>
                        <td scope="col-md-2">{getcate.FromDate}</td>
                        {/* <td scope="col-md-2" >{getcate.FromDate}</td> */}
                        <td scope="col-md-2"> {getcate.ToDate}</td>
                        <td scope="col-md-2"> {getcate.Basic}</td>
                        <td scope="col-md-2"> {getcate.HRA}</td>
                        <td scope="col-md-2"> {getcate.Tea}</td>
                        <td scope="col-md-2"> {getcate.Conveyance}</td>
                        <td scope="col-md-2"> {getcate.CCA}</td>
                        <td scope="col-md-2"> {getcate.OCC}</td>
                        <td scope="col-md-2"> {getcate.GrossSalary}</td>
                        <td scope="col-md-2"> {getcate.PF}</td>
                        <td scope="col-md-2">{getcate.PT}</td>
                        <td scope="col-md-2">{getcate.LabourWelfare}</td>
                        <td scope="col-md-2">{getcate.ESI}</td>
                        <td scope="col-md-2 ">{getcate.TotaDeduction}</td>
                        <td scope="col-md-2">{getcate.Active}</td>
                        <td scope="col-md-2">{getcate.CreatedBy}</td>

                        <button
                          className="btn btn-success mx-2"
                          onClick={() => {
                            UpdateCustomer(getcate.Id);
                          }}
                        >
                          {" "}
                          Edit
                        </button>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => {
                            DeleteEmployee(getcate.Id);
                          }}
                        >
                          {" "}
                          Delete{" "}
                        </button>
                        <button
                          className="btn btn-warning mx-2"
                          onClick={BackPage}
                        >
                          {" "}
                          Back{" "}
                        </button>
                        <td scope="col-md-2"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomerApi;
