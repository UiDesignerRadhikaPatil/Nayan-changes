import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function SiteMaster() {
  const [sitename, sitenamechange] = useState("");
  const [address1, address1change] = useState("");
  const [address2, address2change] = useState("");
  const [city, citychange] = useState("");
  const [state, statechange] = useState("");
  const [supervisor, supervisorchange] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const sitedata = { sitename, address1, address2, city, state, supervisor };

    axios
      .get("https://peapi.microtechsolutions.co.in/php/getcity.php", {
        method: "GET",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(sitedata),
      })
      .then((result) => {
        alert("Saved successfully.");
        console.log(result);
      })

      .catch((err) => {
        console.log(err.message);
      });
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
                <div className="page-wrapper" onSubmit={handlesubmit}>
                  <div className="content container-fluid">
                    <div
                      className="page-header"
                      style={{ backgroundColor: "#AFDBF5" }}
                    >
                      <div className="row align-items-center">
                        <div className="col-sm-12">
                          <div className="page-sub-header">
                            <h3
                              className="page-title"
                              style={{ color: "#00308F", textAlign: "center" }}
                            >
                              Site Master
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div
                          className="card comman-shadow"
                          style={{
                            backgroundColor: "#AFDBF5",
                            color: "#00308F",
                          }}
                        >
                          <div className="card-body">
                            <form>
                              <div className="row">
                                <div className="col-12"></div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Site Name{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Site Name"
                                      value={sitename}
                                      onChange={(e) =>
                                        sitenamechange(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms calendar-icon">
                                    <label>
                                      Address 1{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      className="form-control datetimepicker"
                                      type="text"
                                      placeholder="Address 1"
                                      value={address1}
                                      onChange={(e) =>
                                        address1change(e.target.value)
                                      }
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
                                      className="form-control"
                                      type="text"
                                      placeholder="Address 2"
                                      value={address2}
                                      onChange={(e) =>
                                        address2change(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>City </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="City"
                                      value={city}
                                      onChange={(e) =>
                                        citychange(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>State </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter State"
                                      value={state}
                                      onChange={(e) =>
                                        statechange(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>Supervisor </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Supervisor"
                                      value={supervisor}
                                      onChange={(e) =>
                                        supervisorchange(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <hr className="my-3" />

                                <div className="col-12 col-sm-4">
                                  <div className="student-submit">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="student-submit">
                                    <button
                                      type="submit"
                                      className="btn btn-secondary"
                                    >
                                      Clear
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
