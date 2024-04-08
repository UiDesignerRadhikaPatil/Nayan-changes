import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCustomerMaster() {
  //All Field coming throw in the Address api//
  const [setId, changeId] = useState("");
  const [setAddressId, changeAddressId] = useState("");
  const [comapnycode, comapnycodechange] = useState("");
  const [companyname, companynamechange] = useState("");
  const [accountId, account_idchange] = useState("");
  const [address1, address1change] = useState("");
  const [address2, address2change] = useState("");
  const [city, citychange] = useState("");
  const [StateId, statechange] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [contactperson, contactpersonchange] = useState("");
  const [gstno, gstnochahge] = useState("");
  //   const [pan, panchange] = useState("");

  const postAPI = (accountId, AddressId) => {
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
        Id: setAddressId,
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
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Customer Data Update Successfully");
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
        Id: setId,
        AccountCode: comapnycode,
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
        alert("Update Successfully");

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

  const navigate = useNavigate();

  const CustomerMasterList = () => {
    navigate("/suppliermasterapi");
  };

  const { Id } = useParams();
  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch(
        "https://truecodeapi.microtechsolutions.co.in/api/Address?Id=" + Id
      );
      const getdata = await res.json();
      console.log("API Response:", getdata.Id);
      CustomerData(getdata);
    };

    getcategory();
  }, []);

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch(
        "https://truecodeapi.microtechsolutions.co.in/api/AccountMaster?Id=" +
          Id
      );
      const getdata = await res.json();

      AccountData(getdata);
    };

    getcategory();
  }, []);

  const CustomerData = (getdata) => {
    console.log(getdata);

    changeAddressId(getdata.Id);
    account_idchange(getdata.AccountId);
    address1change(getdata.Address1);
    address2change(getdata.Address2);
    citychange(getdata.CityId);
    statechange(getdata.StateId);
    setMobile(getdata.Mobile);
    setEmail(getdata.Email);
    gstnochahge(getdata.GSTNumber);
  };

  const AccountData = (getdata) => {
    changeId(getdata.Id);
    comapnycodechange(getdata.AccountCode);
    companynamechange(getdata.AccountName);
  };

  const supplierMaster = () => {
    navigate("/suppliermaster");
  };

  // const navigate = useNavigate();
  const Supplierlist = () => {
    navigate("/supplierlist");
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
                            Edit Supplier Master
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
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Company code{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={comapnycode}
                                      onChange={(e) =>
                                        comapnycodechange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                      readOnly
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Company Name{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={companyname}
                                      onChange={(e) =>
                                        companynamechange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Address 1{" "}
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
                                      Address 2{" "}
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
                                      State{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <select
                                      value={StateId}
                                      onChange={(e) =>
                                        statechange(e.target.value)
                                      }
                                      className="form-control select"
                                    >
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
                                      Email{" "}
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

                                {/* <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Contact Person{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={contactperson}
                                      onChange={(e) =>
                                        contactpersonchange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div> */}

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      GST No{" "}
                                      <span className="login-danger"></span>
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
                                  <div className="supplier-clear">
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={postAccountMaster}
                                    >
                                      Update
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
