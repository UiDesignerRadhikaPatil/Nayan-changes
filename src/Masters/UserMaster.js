// import { useState } from "react";

// import Sidebar from "../Sidebar";
// import Navbar from "../Navbar";
// import axios from "axios";

// function UserMaster() {
//   const [salesmancode, salesmancodechange] = useState();
//   const [salesmanname, salesmannamechange] = useState("");
//   const [address, addresschange] = useState("");

//   const [city, citychange] = useState("");

//   const [phone, setPhone] = useState("");
//   const [iserror, setIserror] = useState(false);
//   const phonepattern = new RegExp(/^\d{1,10}$/);

//   const [mobile, setMobile] = useState("");
//   const [isError, setIsError] = useState(false);
//   const pattern = new RegExp(/^\d{1,10}$/);

//   const [email, setEmail] = useState("");
//   const [error, setError] = useState(null);

//   function isValidEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
//   }

//   const handleChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setError(null);

//     if (isValidEmail(email)) {
//       console.log("The email is valid");
//     } else {
//       setError("Email is invalid");
//     }
//   };
//   const [designation, designationchange] = useState("");
//   const [localaddress, localaddresschange] = useState("");
//   const [levelid, levelidchange] = useState();
//   const [branchid, branchidchange] = useState();
//   const [managerid, manageridchange] = useState();
//   const [targetsalesrs, targetsalesrschange] = useState("");

//   const [nooftargetcustomer, nooftargetcustomerchange] = useState("");

//   const handlesubmit = (e) => {
//     e.preventDefault();
//     const supplierdata = {
//       salesmancode,
//       salesmanname,
//       address,
//       city,
//       phone,
//       mobile,
//       email,
//       designation,
//       localaddress,
//       levelid,
//       branchid,
//       managerid,
//       targetsalesrs,
//       nooftargetcustomer,
//     };

//     axios
//       .get("https://peapi.microtechsolutions.co.in/php/getcity.php", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(supplierdata),
//       })
//       .then((result) => {
//         alert("Saved successfully.");
//         console.log(result);
//       })

//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

//   return (
//     <div className="d-flex">
//       <div>
//         <Sidebar />
//       </div>
//       <div
//         style={{
//           flex: "1 1 auto",
//           display: "flex",
//           flexFlow: "column",
//           height: "100vh",
//           overflowY: "hidden",
//         }}
//       >
//         <Navbar />
//         <div style={{ height: "100%" }}>
//           <div
//             style={{
//               padding: "20px 5%",
//               height: "calc(100% - 64px)",
//               overflow: "scroll",
//               background: "whitesmoke",
//             }}
//           >
//             <div
//               style={{
//                 display: "grid",
//                 background: "#FFF",
//                 gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
//               }}
//             >
//               <>
//                 <div className="page-wrapper" onSubmit={handlesubmit}>
//                   <div className="content container-fluid">
//                     <div
//                       className="page-header"
//                       style={{ backgroundColor: "#AFDBF5" }}
//                     >
//                       <div className="row align-items-center">
//                         <div className="col">
//                           <h3
//                             className="page-title"
//                             style={{ color: "#00308F", textAlign: "center" }}
//                           >
//                             User Master
//                           </h3>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-sm-12">
//                         <div className="card">
//                           <div
//                             className="card-body"
//                             style={{ backgroundColor: "#AFDBF5" }}
//                           >
//                             <form>
//                               <div className="row">
//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Salesman Code{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={salesmancode}
//                                       onChange={(e) =>
//                                         salesmancodechange(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Salesman Name{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={salesmanname}
//                                       onChange={(e) =>
//                                         salesmannamechange(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Address{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={address}
//                                       onChange={(e) =>
//                                         addresschange(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div>
//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       City{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={city}
//                                       onChange={(e) =>
//                                         citychange(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Phone
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={mobile}
//                                       type="number"
//                                       className="form-control"
//                                       onChange={(e) => {
//                                         setMobile(e.target.value);
//                                         if (!pattern.test(e.target.value))
//                                           setIsError(true);
//                                         else setIsError(false);
//                                       }}
//                                     />
//                                     {error && (
//                                       <h6 style={{ color: "red" }}>{error}</h6>
//                                     )}
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Mobile
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={mobile}
//                                       type="number"
//                                       className="form-control"
//                                       onChange={(e) => {
//                                         setMobile(e.target.value);
//                                         if (!pattern.test(e.target.value))
//                                           setIsError(true);
//                                         else setIsError(false);
//                                       }}
//                                     />
//                                     {error && (
//                                       <h6 style={{ color: "red" }}>{error}</h6>
//                                     )}
//                                   </div>
//                                 </div>
//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Email{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       id="email"
//                                       value={email}
//                                       onChange={handleChange}
//                                       name="email"
//                                       className="form-control"
//                                     />
//                                     {error && (
//                                       <h6 style={{ color: "red" }}>{error}</h6>
//                                     )}
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Designation{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={designation}
//                                       onChange={(e) =>
//                                         designationchange(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Level Id
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <select
//                                       className="form-control select"
//                                       value={levelid}
//                                       onChange={(e) =>
//                                         levelidchange(e.target.value)
//                                       }
//                                     >
//                                       <option>Select Level Id</option>
//                                       <option>Export</option>
//                                       <option>Export Reports</option>
//                                     </select>
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Branch Id
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <select
//                                       className="form-control select"
//                                       value={branchid}
//                                       onChange={(e) =>
//                                         branchidchange(e.target.value)
//                                       }
//                                     >
//                                       <option>Select Head Office</option>
//                                       <option>ifm Kolhapur- Head Office</option>
//                                       <option>Sangali</option>
//                                     </select>
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Manager Id
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <select
//                                       className="form-control select"
//                                       value={managerid}
//                                       onChange={(e) =>
//                                         manageridchange(e.target.value)
//                                       }
//                                     >
//                                       <option>Select Manager Id</option>
//                                       <option>Radhika</option>
//                                       <option> Rubina</option>
//                                     </select>
//                                   </div>
//                                 </div>
//                                 <hr className="my-3" />

//                                 <div
//                                   className="page-header"
//                                   style={{ backgroundColor: "#AFDBF5" }}
//                                 >
//                                   <div className="row align-items-center">
//                                     <div className="col">
//                                       <h3
//                                         className="page-title"
//                                         style={{
//                                           color: "#00308F",
//                                           textAlign: "center",
//                                         }}
//                                       >
//                                         Targets
//                                       </h3>
//                                     </div>
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Target Sales Rs{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={targetsalesrs}
//                                       onChange={(e) =>
//                                         targetsalesrschange(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div>
//                                 {/* <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       Target Sales Euro{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={targetsaleseuro}
//                                       onChange={(e) =>
//                                         targetsaleseuro(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div> */}
//                                 <div className="col-12 col-sm-4">
//                                   <div className="form-group local-forms">
//                                     <label>
//                                       No. of Target Customer{" "}
//                                       <span className="login-danger"></span>
//                                     </label>
//                                     <input
//                                       value={nooftargetcustomer}
//                                       onChange={(e) =>
//                                         nooftargetcustomerchange(e.target.value)
//                                       }
//                                       type="text"
//                                       className="form-control"
//                                     />
//                                   </div>
//                                 </div>

//                                 <hr className="my-3" />

//                                 <div className="col-12 col-sm-4">
//                                   <div className="supplier-submit">
//                                     <button
//                                       type="submit"
//                                       className="btn btn-primary"
//                                     >
//                                       Submit
//                                     </button>
//                                   </div>
//                                 </div>
//                               </div>
//                             </form>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             </div>
//             <footer className="mx-auto my-3 text-center">
//               <small>&copy; Microtech, 2023. All rights reserved.</small>
//             </footer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserMaster;





import { useState } from "react";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";

function UserMaster() {
  const [salesmancode, salesmancodechange] = useState();
  const [salesmanname, salesmannamechange] = useState("");
  const [address, addresschange] = useState("");

  const [city, citychange] = useState("");

  const [phone, setPhone] = useState("");
  const [iserror, setIserror] = useState(false);
  const phonepattern = new RegExp(/^\d{1,10}$/);

  const [mobile, setMobile] = useState("");
  const [isError, setIsError] = useState(false);
  const pattern = new RegExp(/^\d{1,10}$/);

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError(null);

    if (isValidEmail(email)) {
      console.log("The email is valid");
    } else {
      setError("Email is invalid");
    }
  };
  const [designation, designationchange] = useState("");
  const [localaddress, localaddresschange] = useState("");
  const [levelid, levelidchange] = useState();
  const [branchid, branchidchange] = useState();
  const [managerid, manageridchange] = useState();
  const [targetsalesrs, targetsalesrschange] = useState("");

  const [nooftargetcustomer, nooftargetcustomerchange] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const supplierdata = {
      salesmancode,
      salesmanname,
      address,
      city,
      phone,
      mobile,
      email,
      designation,
      localaddress,
      levelid,
      branchid,
      managerid,
      targetsalesrs,
      nooftargetcustomer,
    };

    axios
      .get("https://peapi.microtechsolutions.co.in/php/getcity.php", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(supplierdata),
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
          overflowY: "hidden",
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
                background: "#FFF",
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
                        <div className="col">
                          <h3
                            className="page-title"
                            style={{ color: "#00308F", textAlign: "center" }}
                          >
                            User Master
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
                                <div className="col-12 ">
                                  <div className="form-group local-forms">
                                    <label>
                                      Salesman Code{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={salesmancode}
                                      onChange={(e) =>
                                        salesmancodechange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 ">
                                  <div className="form-group local-forms">
                                    <label>
                                      Salesman Name{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={salesmanname}
                                      onChange={(e) =>
                                        salesmannamechange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 ">
                                  <div className="form-group local-forms">
                                    <label>
                                      Address{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={address}
                                      onChange={(e) =>
                                        addresschange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      City{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={city}
                                      onChange={(e) =>
                                        citychange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Phone
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={mobile}
                                      type="number"
                                      className="form-control"
                                      onChange={(e) => {
                                        setMobile(e.target.value);
                                        if (!pattern.test(e.target.value))
                                          setIsError(true);
                                        else setIsError(false);
                                      }}
                                    />
                                    {error && (
                                      <h6 style={{ color: "red" }}>{error}</h6>
                                    )}
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
                                      type="number"
                                      className="form-control"
                                      onChange={(e) => {
                                        setMobile(e.target.value);
                                        if (!pattern.test(e.target.value))
                                          setIsError(true);
                                        else setIsError(false);
                                      }}
                                    />
                                    {error && (
                                      <h6 style={{ color: "red" }}>{error}</h6>
                                    )}
                                  </div>
                                </div>
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Email{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      id="email"
                                      value={email}
                                      onChange={handleChange}
                                      name="email"
                                      className="form-control"
                                    />
                                    {error && (
                                      <h6 style={{ color: "red" }}>{error}</h6>
                                    )}
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Designation{" "}
                                      <span className="login-danger"></span>
                                    </label>
                                    <input
                                      value={designation}
                                      onChange={(e) =>
                                        designationchange(e.target.value)
                                      }
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Level Id
                                      <span className="login-danger"></span>
                                    </label>
                                    <select
                                      className="form-control select"
                                      value={levelid}
                                      onChange={(e) =>
                                        levelidchange(e.target.value)
                                      }
                                    >
                                      <option>Select Level Id</option>
                                      <option>Export</option>
                                      <option>Export Reports</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Branch Id
                                      <span className="login-danger"></span>
                                    </label>
                                    <select
                                      className="form-control select"
                                      value={branchid}
                                      onChange={(e) =>
                                        branchidchange(e.target.value)
                                      }
                                    >
                                      <option>Select Head Office</option>
                                      <option>ifm Kolhapur- Head Office</option>
                                      <option>Sangali</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                      Manager Id
                                      <span className="login-danger"></span>
                                    </label>
                                    <select
                                      className="form-control select"
                                      value={managerid}
                                      onChange={(e) =>
                                        manageridchange(e.target.value)
                                      }
                                    >
                                      <option>Select Manager Id</option>
                                      <option>Radhika</option>
                                      <option> Rubina</option>
                                    </select>
                                  </div>
                                </div>
                                <hr className="my-3" />
                               

                                <div className="col-12 col-sm-12">
                                  <div className="supplier-submit">
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
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

export default UserMaster;