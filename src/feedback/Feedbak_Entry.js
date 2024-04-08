import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Feedbak_Entry = () => {
  const [customerData, setCustomerData] = useState([]);
  const [customer, setCustomer] = useState("");
  // const [showList, setShowList] = useState(false);
  const [tableVisible, setTableVisible] = useState(false);

  const postAPI = (e) => {
    let config = {
      method: "post",
      mode: "cors",
      maxBodyLength: Infinity,
      url: "https://truecodeapi.microtechsolutions.co.in/api/MonthlySalary",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      // .request(config)
      // .then((response) => {
      //   console.log(JSON.stringify(response.data));
      //   alert("Saved Successfully");
      //   // window.location.reload();
      //   setShowList(true);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

      //
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Saved Successfully");
        setTableVisible(true);
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
        <Navbar />
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
              <div className="feedback_entry_report">
                <div className="feedback-container-fluid">
                  <div
                    className="page-header"
                    style={{ backgroundColor: "#AFDBF5" }}
                  >
                    <div className="row align-items-center">
                      <div className="col">
                        <h3
                          className="page-title"
                          style={{ color: "#00308F", textAlign: "center" }}
                        >
                          {" "}
                          Feedback Entry Report{" "}
                        </h3>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="card">
                            <div
                              className="card-body"
                              style={{ backgroundColor: "#AFDBF5" }}
                            >
                              <form>
                                <div className="row">
                                  <div className="col-12 col-sm-4">
                                    <div className="form-group local-forms">
                                      <label>From</label>
                                      <input
                                        required
                                        className="form-control"
                                        type="date"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-12 col-sm-4">
                                    <div className="form-group local-forms">
                                      <label>To</label>
                                      <input
                                        required
                                        className="form-control"
                                        type="date"
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div
                                  className="col-12 col-sm-4"
                                  style={{ display: "flex" }}
                                >
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

                                  <div className="col-12 col-sm-1 ">
                                    <div className="feeback-submit">
                                      <button
                                        className="btn btn-primary"
                                        type="button"
                                        // onClick={postAPI}
                                        onClick={() =>
                                          setTableVisible(!tableVisible)
                                        }
                                        style={{
                                          margin: "25px",
                                        }}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* table */}
            {tableVisible && (
              <table className="table table-striped table-hover table-responsive-md table-bordered">
                <thead>
                  <tr>
                    <th scope="col-md-2">Date</th>
                    <th scope="col-md-2">Supervisor</th>
                    <th scope="col-md-2">Feedback From</th>
                    <th scope="col-md-2">Contact No</th>
                    <th scope="col-md-2">Ontime</th>
                    <th scope="col-md-2">Work Quality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col-md-2">22</td>
                    <td scope="col-md-2">ac</td>
                    <td scope="col-md-2">ddf</td>
                    <td scope="col-md-2">9970237756</td>
                    <td scope="col-md-2">yes</td>
                    <td scope="col-md-2">good</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedbak_Entry;
