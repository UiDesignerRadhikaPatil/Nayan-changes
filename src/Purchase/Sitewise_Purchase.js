import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const SitewisePurchase = () => {
  const [cities, setCities] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [sgst, setSgst] = useState(0);
  const [igst, setIgst] = useState(0);
  const [other, setOther] = useState(0);
  const [roundOff, setRoundOff] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchCities();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form submitted successfully!");
  };

  const fetchCities = async () => {
    try {
      const response = await axios.get(
        "https://truecodeapi.microtechsolutions.co.in/api/City"
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities: ", error);
    }
  };

  const calculateTotal = () => {
    const sum = subtotal + cgst + sgst + igst + other + roundOff;
    setTotal(sum);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "subtotal":
        setSubtotal(parseFloat(value) || 0);
        break;
      case "cgst":
        setCgst(parseFloat(value) || 0);
        break;
      case "sgst":
        setSgst(parseFloat(value) || 0);
        break;
      case "igst":
        setIgst(parseFloat(value) || 0);
        break;
      case "other":
        setOther(parseFloat(value) || 0);
        break;
      case "roundOff":
        setRoundOff(parseFloat(value) || 0);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [subtotal, cgst, sgst, igst, other, roundOff]);

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
                          Sitewise Purchase
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
                          <form onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-12 col-sm-5">
                                <div className="purchase-forms">
                                  <label>Purchase No</label>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="purchaseNo"
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-12 col-sm-5">
                                <div className="form-group local-forms">
                                  <label>Purchase Date</label>
                                  <input
                                    className="form-control"
                                    type="date"
                                    name="purchaseDate"
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-10 ">
                                <div className="form-group local-forms">
                                  <label>City</label>
                                  <select
                                    className="form-control select"
                                    name="city"
                                    onChange={handleInputChange}
                                  >
                                    <option>Select City</option>
                                    {cities.map((city, index) => (
                                      <option key={index}>{city.Name}</option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-10">
                                <div className="form-group local-forms">
                                  <label>Supplier</label>
                                  <select
                                    className="form-control select"
                                    name="supplier"
                                    onChange={handleInputChange}
                                  >
                                    <option></option>
                                    <option>1 </option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <table className="table table-striped table-hover table-responsive-md table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col-md-2">Item Code</th>
                                  <th scope="col-md-2">Item Name</th>
                                  <th scope="col-md-2">Quantity</th>
                                  <th scope="col-md-2">Rate</th>
                                  <th scope="col-md-2">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td scope="col-md-2">Item Code</td>
                                  <td scope="col-md-2">Item Name</td>
                                  <td scope="col-md-2">Quantity</td>
                                  <td scope="col-md-2">Rate</td>
                                  <td scope="col-md-2">Amount</td>
                                </tr>
                              </tbody>
                            </table>

                            <div
                              className=" col-10"
                              style={{ display: "flex", gap: "45%" }}
                            >
                              <div className="row">
                                <div className="col-10 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>Vehicle No </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="vehicleNo"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div
                                className="row"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div className="col-12 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>Sub Total </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="subtotal"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>CGST </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="cgst"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>SGST </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="sgst"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>IGST</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="igst"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>Other </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="other"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>Round Off </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="roundOff"
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>

                                <div className="col-12 col-sm-12">
                                  <div className="purchase-forms">
                                    <label>Total </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      value={total}
                                      readOnly
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-sm-10">
                              <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                >
                                  Submit
                                </button>
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
      </div>
    </div>
  );
};

export default SitewisePurchase;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Navbar from "../Navbar";

// const SitewisePurchase = () => {
//   const [cities, setCities] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [cgst, setCgst] = useState(0);
//   const [sgst, setSgst] = useState(0);
//   const [igst, setIgst] = useState(0);
//   const [other, setOther] = useState(0);
//   const [roundOff, setRoundOff] = useState(0);
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     fetchCities();
//   }, []);

//   const fetchCities = async () => {
//     try {
//       const response = await axios.get("https://peapi.microtechsolutions.co.in/php/getcity.php");
//       setCities(response.data);
//     } catch (error) {
//       console.error("Error fetching cities: ", error);
//     }
//   };

//   const calculateTotal = () => {
//     const sum = subtotal + cgst + sgst + igst + other + roundOff;
//     setTotal(sum);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "subtotal":
//         setSubtotal(parseFloat(value) || 0);
//         break;
//       case "cgst":
//         setCgst(parseFloat(value) || 0);
//         break;
//       case "sgst":
//         setSgst(parseFloat(value) || 0);
//         break;
//       case "igst":
//         setIgst(parseFloat(value) || 0);
//         break;
//       case "other":
//         setOther(parseFloat(value) || 0);
//         break;
//       case "roundOff":
//         setRoundOff(parseFloat(value) || 0);
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     calculateTotal();
//   }, [subtotal, cgst, sgst, igst, other, roundOff]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your submission logic
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
//           overflow: "hidden",
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
//                 background: "white",
//                 gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
//               }}
//             >
//               <div className="page-wrapper">
//                 <div className="content container-fluid">
//                   <div
//                     className="page-header"
//                     style={{ backgroundColor: "#AFDBF5" }}
//                   >
//                     <div className="row align-items-center">
//                       <div className="col">
//                         <h3
//                           className="page-title"
//                           style={{ color: "#00308F", textAlign: "center" }}
//                         >
//                           Sitewise Purchase
//                         </h3>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-sm-12">
//                       <div className="card">
//                         <div
//                           className="card-body"
//                           style={{ backgroundColor: "#AFDBF5" }}
//                         >
//                           <form onSubmit={handleSubmit}>
//                             <div className="row">
//                               <div className="col-12 col-sm-5">
//                                 <div className="purchase-forms">
//                                   <label>Purchase No</label>
//                                   <input
//                                     className="form-control"
//                                     type="text"
//                                     name="purchaseNo"
//                                     onChange={handleInputChange}
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-12 col-sm-5">
//                                 <div className="form-group local-forms">
//                                   <label>Purchase Date</label>
//                                   <input
//                                     className="form-control"
//                                     type="date"
//                                     name="purchaseDate"
//                                     onChange={handleInputChange}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="col-12 col-sm-10 ">
//                                 <div className="form-group local-forms">
//                                   <label>City</label>
//                                   <select
//                                     className="form-control select"
//                                     name="city"
//                                     onChange={handleInputChange}
//                                   >
//                                     <option>Select City</option>
//                                     {cities.map((city, index) => (
//                                       <option key={index}>{city.Name}</option>
//                                     ))}
//                                   </select>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="row">
//                               <div className="col-12 col-sm-10">
//                                 <div className="form-group local-forms">
//                                   <label>Supplier</label>
//                                   <select
//                                     className="form-control select"
//                                     name="supplier"
//                                     onChange={handleInputChange}
//                                   >
//                                     <option></option>
//                                     <option>1 </option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                   </select>
//                                 </div>
//                               </div>
//                             </div>
//                             <table className="table table-striped table-hover table-responsive-md table-bordered">
//                               <thead>
//                                 <tr>
//                                   <th scope="col-md-2">Item Code</th>
//                                   <th scope="col-md-2">Item Name</th>
//                                   <th scope="col-md-2">Quantity</th>
//                                   <th scope="col-md-2">Rate</th>
//                                   <th scope="col-md-2">Amount</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 <tr>
//                                   <td scope="col-md-2">Item Code</td>
//                                   <td scope="col-md-2">Item Name</td>
//                                   <td scope="col-md-2">Quantity</td>
//                                   <td scope="col-md-2">Rate</td>
//                                   <td scope="col-md-2">Amount</td>
//                                 </tr>
//                               </tbody>
//                             </table>

//                             <div
//                               className=" col-10"
//                               style={{ display: "flex", gap: "45%" }}
//                             >
//                               <div className="row">
//                                 <div className="col-10 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>Vehicle No </label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       name="vehicleNo"
//                                       onChange={handleInputChange}
//                                     />
//                                   </div>
//                                 </div>
//                               </div>

//                               <div
//                                 className="row"
//                                 style={{
//                                   display: "flex",
//                                   flexDirection: "column",
//                                 }}
//                               >
//                                 <div className="col-12 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>Sub Total </label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       name="subtotal"
//                                       onChange={handleInputChange}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>CGST </label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       name="cgst"
//                                       onChange={handleInputChange}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>SGST </label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       name="sgst"
//                                       onChange={handleInputChange}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>IGST</label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       name="igst"
//                                       onChange={handleInputChange}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>Other </label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       name="other"
//                                       onChange={handleInputChange}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>Round Off </label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       name="roundOff"
//                                       onChange={handleInputChange}
//                                     />
//                                   </div>
//                                 </div>

//                                 <div className="col-12 col-sm-12">
//                                   <div className="purchase-forms">
//                                     <label>Total </label>
//                                     <input
//                                       className="form-control"
//                                       type="text"
//                                       value={total}
//                                       readOnly
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>

//                             <div className="col-12 col-sm-10">
//                               <div className="position-absolute bottom-0 start-50 translate-middle-x">
//                                 <button
//                                   className="btn btn-primary"
//                                   type="submit"
//                                 >
//                                   Submit
//                                 </button>
//                               </div>
//                             </div>
//                             {/* </div> */}
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SitewisePurchase;
