import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { Calculate } from "@mui/icons-material";
import CalculatorApi from "./CalculatorApi";

export default function SalaryCalculator() {
  const [salaryforthemonth, setSalaryforthemonth] = useState("");
  const [year, setYear] = useState("");
  const [customer, setCustomer] = useState("");
  const [customerData, setCustomerData] = useState([]);
  const navigate = useNavigate();
  const [showList, setShowList] = useState(false);

  const postAPI = (e) => {
    let config = {
      method: "post",
      mode: "cors",
      maxBodyLength: Infinity,
      url: "https://truecodeapi.microtechsolutions.co.in/api/MonthlySalary",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        
        EmployeeId: 4,
        MonthDays: 31,
        TotalDays: 31.0,
        Basic: 13.0,
        HRA: 8.0,
        Tea: 89.0,
        Conveyance: 7.0,
        CCA: 8.0,
        OCC: 9.0,
        GrossSalary: 30000.0,
        PF: 7.0,
        PT: 7.0,
        LabourWelfare: 45.0,
        TotalDeduction: 78.0,
        ESI: 7.0,
        Salary: 788.0,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Saved Successfully");
        // window.location.reload();
        setShowList(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCustomerData = async () => {
    try {
      const response = await axios.get(
        "https://truecodeapi.microtechsolutions.co.in/api/AccountMaster"
      );
      setCustomerData(response.data);
    } catch (error) {
      console.error("Error fetching customer data: ", error);
    }
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  const calculator = () => {
    navigate("/calculatorapi");
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Navbar/>
        <div style={{ height: "100%" }}>
          <div
            style={{
              padding: "20px 5%",
              height: "calc(100% - 64px)",
              overflow: "scroll",
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
                <div className="page-wrapper">
                  <div className="content container-fluid">
                    <div
                      className="page-header"
                      style={{ backgroundColor: "#AFDBF5" }}
                    >
                      <div className="row align-items-center">
                        <div class="col">
                          <h3
                            class="page-title"
                            style={{ color: "#00308F", textAlign: "center" }}
                          >
                            {" "}
                            Salary Calculator{" "}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-body"
                        
                            style={{ backgroundColor: "#AFDBF5" }}
                          >
                            <form>
                              <div className="row">
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>Salary For The Month</label>
                                    <input
                                      required
                                      value={salaryforthemonth}
                                      onChange={(e) =>
                                        setSalaryforthemonth(e.target.value)
                                      }
                                      className="form-control"
                                      type="month"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>Year</label>
                                    <select
                                      className="form-control"
                                      value={year}
                                      onChange={(e) =>
                                        setYear(parseInt(e.target.value))
                                      }
                                    >
                                      {Array.from(
                                        { length: 11 },
                                        (_, i) => 2024 + i
                                      ).map((yearOption) => (
                                        <option
                                          key={yearOption}
                                          value={yearOption}
                                        >
                                          {yearOption}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>Customer</label>
                                    <select
                                      className="form-control"
                                      value={customer}
                                      onChange={(e) =>
                                        setCustomer(e.target.value)
                                      }
                                    >
                                      <option value="">Select Customer</option>
                                      {customerData.map((customer) => (
                                        <option
                                          key={customer.AccountId}
                                          value={customer.AccountName}
                                        >
                                          {customer.AccountName}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>

                                <hr className="my-3" />

                                <div className="row">
                                  <div className="col-12 col-sm-4">
                                    <div className="supplier-submit">
                                      <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={postAPI}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-4">
                                    <div className="supplier-clear">
                                      <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => setShowList(true)}
                                      >
                                        List
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
              
                      </div>
                    </div>
                    {showList && <CalculatorApi />}
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


















