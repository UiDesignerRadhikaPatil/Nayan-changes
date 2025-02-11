import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CustomerMaster() {
  //All Field coming throw in the Address api//

  const [address1, address1change] = useState("");
  const [address2, address2change] = useState("");
  const [city, citychange] = useState("");
  const [StateId, statechange] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [supervisor, supervisorchange] = useState("");
  const [gstoption, gstoptionchange] = useState("");
  const [gstno, gstnochahge] = useState("");
  const [statatorycompliance, statatorycompliancechange] = useState("");

  const postAPI = (accountId) => {
    const id = accountId;
    let config = {
      method: "post",
      mode: "cors",

      maxBodyLength: Infinity,
      url: "https://truecodeapi.microtechsolutions.co.in/api/Address",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        AccountId: accountId,
        Address1: address1,
        Address2: address2,
        CityId: city,
        Pin: "416006",
        Email: email,
        Mobile: mobile,
        StateId: StateId,
        URL: "abc",
        GSTNumber: gstno,
        GSTYesNo: gstoption,
        Compliance: statatorycompliance,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Customer Data Saved Successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [customercode, setCustomercode] = useState("");
  const [customer_name, setCustomer_name] = useState("");
  const [supervisorId, setSupervisorid] = useState("");

  const postAccountMaster = async (e) => {
    e.preventDefault();
    let config = {
      method: "post",
      mode: "cors",

      maxBodyLength: Infinity,
      url: "https://truecodeapi.microtechsolutions.co.in/api/AccountMaster",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        AccountCode: customercode,
        GroupId: 1,
        SubGroupId: 6,
        AccountName: customer_name,
        TypeCode: "C",
        IsSystem: true,
        Salesman: 1,
        DebitCreditId: 1,
        CurrentBalance: 123.0,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("account data Saved Successfully");

        postAPI(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [cities, setcities] = useState([]);
  const getCityData = async () => {
    const url = "https://truecodeapi.microtechsolutions.co.in/api/City";
    let result = await fetch(url);
    result = await result.json();
    setcities(result);
    console.log("city data Fetch Successfully");
    console.log(cities);
  };

  useEffect(() => {
    setTimeout(() => {
      getCityData();
    }, 1000);
  }, []);
  

  const [States, setStates] = useState([]);
  const getStateData = async () => {
    const url = "https://truecodeapi.microtechsolutions.co.in/api/State";
    let result = await fetch(url);
    result = await result.json();
    setStates(result);
    console.log("State data Fetch Successfully");
    console.log(States);
  };

  useEffect(() => {
    setTimeout(() => {
      getStateData();
    }, 1000);
  }, []);

  const [supervisors, setsupervisors] = useState([]);

  const getSupervisorData = async () => {
    const url = "https://truecodeapi.microtechsolutions.co.in/api/Employee";
    let result = await fetch(url);
    result = await result.json();
    setsupervisors(result);
    console.log("Supervisor data fetch successfully");
    console.log(supervisors);
  };

  useEffect(() => {
    setTimeout(() => {
      getSupervisorData();
    }, 1000);
  }, []);

  const navigate = useNavigate();

  const CustomerMasterList = () => {
    navigate("/customermasterapi");
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
                <div className="page-wrapper">
                  <div className="content container-fluid">
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
                            Customer Master
                          </h3>
                        </div>
                      </div>
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
                                <div className="col-12 col-sm-4 ">
                                  <div className="form-group local-forms">
                                    <label>
                                      Customer Name
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                   
                                      value={customer_name}
                                      onChange={(e) =>
                                        setCustomer_name(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Address 1
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={address1}
                                      onChange={(e) =>
                                        address1change(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Address 2
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={address2}
                                      onChange={(e) =>
                                        address2change(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>City </label>

                                    <select
                                      value={city}
                                      onChange={(e) =>
                                        citychange(e.target.value)
                                      }
                                      className="form-control select"
                                    >
                                      <option value="">Select City</option>
                                      {cities
                                        ? cities.map((city) => {
                                            return (
                                              <option
                                                key={city.Id}
                                                value={city.Id}
                                              >
                                                {city.Name}
                                              </option>
                                            );
                                          })
                                        : null}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      State
                                      <span className="login-danger"></span>
                                    </label>
                                    <select
                                      value={StateId}
                                      onChange={(e) =>
                                        statechange(e.target.value)
                                      }
                                      className="form-control select"
                                    >
                                      <option value="">Select State</option>
                                      {States
                                        ? States.map((stateid) => {
                                            return (
                                              <option
                                                key={stateid.Id}
                                                value={stateid.Id}
                                              >
                                                {stateid.StateName}
                                              </option>
                                            );
                                          })
                                        : null}
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Mobile
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={mobile}
                                      type="text"
                                      className="form-control"
                                      onChange={(e) =>
                                        setMobile(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Email
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>supervisor</label>

                                    <select
                                      value={supervisor}
                                      onChange={(e) =>
                                        supervisorchange(e.target.value)
                                      }
                                      className="form-control select"
                                    >
                                      <option value="">Select Supervisor</option>
                                      {supervisors
                                        ? supervisors.map((Supervisor) => {
                                            return (
                                              <option
                                                key={Supervisor.SupervisorId}
                                                value={Supervisor.SupervisorId}
                                              >
                                                {Supervisor.Name}
                                              </option>
                                            );
                                          })
                                        : null}
                                    </select>
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      GST Option
                                      <span className="login-danger"></span>
                                    </label>
                                    <select
                                      value={gstoption}
                                      onChange={(e) =>
                                        gstoptionchange(
                                          e.target.value === "true"
                                        )
                                      }
                                      className="form-control"
                                    > <option value="">Select option</option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      GST <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={gstno}
                                      onChange={(e) =>
                                        gstnochahge(e.target.value)
                                      }
                                      type="text"
                                      class="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Statatory Compliance
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={statatorycompliance}
                                      onChange={(e) =>
                                        statatorycompliancechange(
                                          e.target.value
                                        )
                                      }
                                      type="text"
                                      class="form-control"
                                    />
                                  </div>
                                </div>

                                <hr className="my-3" />

                                <div className="col-12 col-sm-4">
                                  <div className="supplier-clear">
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={postAccountMaster}
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
                                      onClick={CustomerMasterList}
                                    >
                                      List
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
              </>
            </div>
            <footer className="mx-auto my-3 text-center">
              <small>&copy; Microtech, 2023. All rights reserved.</small>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
