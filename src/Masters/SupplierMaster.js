

import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SupplierMaster() {
  const [companycode, setCompanycode] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [address1, address1change] = useState("");
  const [address2, address2change] = useState("");
  const [city, citychange] = useState("");
  const [state, statechange] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gstno, gstnochahge] = useState("");
  
  const [contact_person, setContact_person] = useState("");

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
        StateId: state,
        URL: "abc",
        GSTNumber: gstno,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Supplier Address Data Saved Successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        AccountCode: companycode,
        GroupId: 1,
        SubGroupId: 6,
        AccountName: companyname,
        TypeCode: "S",
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

  const navigate = useNavigate();
  const Supplierlist = () => {
    navigate("/supplierlist");
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
                            Supplier Master
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
                                     Company Code
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                   
                                      value={companycode}
                                      onChange={(e) =>
                                        setCompanycode(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                      
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4 ">
                                  <div className="form-group local-forms">
                                    <label>
                                      Company Name
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                   
                                      value={companyname}
                                      onChange={(e) =>
                                        setCompanyname(e.target.value)
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
                                      <option value="">select city</option>
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
                                      value={state}
                                      onChange={(e) =>
                                        statechange(e.target.value)
                                      }
                                      className="form-control select"
                                    ><option value="">select state</option>
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

                                <hr className="my-3" />

                                <div className="col-12 col-sm-4">
                                  <div className="supplier-submit">
                                    <button  onClick={postAccountMaster}
                                      type="submit"
                                      className="btn btn-primary"
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
                                      onClick={Supplierlist}
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
