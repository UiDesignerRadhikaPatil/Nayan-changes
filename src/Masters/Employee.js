// import React, { useEffect } from "react";
// import Sidebar from "../Sidebar";
// import Navbar from "../Navbar";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// function Employee() {

//     const [name, setName] = useState();
//     const [address, setAddress] = useState();
//     const [cityId, setCityId] = useState()
//     const [stateId, setStateId] = useState();
//     const [mobileNo, setMobileNo] = useState();
//     const [adharNo, setAdharNo] = useState();
//     const [pan, setPAN] = useState();
//     const [employeeCode, employeeCodechange] = useState();
//     const [categoryId, CategoryIdchange] = useState();

//     const postAPI = (e) => {
//         e.preventDefault()

//         let config = {
//             method: 'post',
//             mode: "cors",
//             maxBodyLength: Infinity,

//            url: "https://truecodeapi.microtechsolutions.co.in/api/Employee",

//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             data: {
//                 // 'Name': name,
//                 // 'Address': address,
//                 // 'CityId': cityId,
//                 // 'StateId': stateId,
//                 // 'MobileNo': mobileNo,
//                 // 'AddharNo': adharNo,
//                 // 'PAN': pan,
//                 // 'CategoryId': categoryId,
//                 // 'EmployeeCode': employeeCode,
//                 "EmployeeCode": employeeCode,
//                 "CategoryId": categoryId,
//                 "Name": name,
//                 "Address": address,
//                 "CityId": cityId,
//                 'StateId': stateId,
//                 "MobileNo": mobileNo,
//                 "AddharNo": adharNo,
//                 "PAN": pan,
//             },

//         };

//         axios.request(config)
//             .then((response) => {
//                 console.log(JSON.stringify(response.data));
//                 alert("Saved Successfully");
//                 window.location.reload();
//                 //console.log(name, address, cityId, stateId, mobileNo, pan)

//             })
//             .catch((error) => {
//                 console.log(error);

//             });

//     }

//     const navigate = useNavigate();
//     const EmployeeList = () => {
//         navigate('/EmployeeList');
//     }

//     const [cities, setcities] = useState([]);

//     const getCityData = async () => {
//         const url = "https://truecodeapi.microtechsolutions.co.in/api/City";
//         let result = await fetch(url);
//         result = await result.json();
//         setcities(result);
//         console.log("Fetch Successfully")
//         console.log(cities)
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             getCityData();
//         }, 1000);
//     }, []);

//     const [States, setStates] = useState([]);
//     const getStateData = async () => {
//         const url = 'https://truecodeapi.microtechsolutions.co.in/api/State';
//         let result = await fetch(url);
//         result = await result.json();
//         setStates(result);
//         console.log("data Fetch Successfully");
//         console.log(States);
//     }

//     useEffect(() => {
//         setTimeout(() => {
//             getStateData();
//         }, 1000);
//     }, []);

//     return (
//         <div className="d-flex">
//             <div>
//                 <Sidebar />
//             </div>
//             <div
//                 style={{
//                     flex: "1 1 auto",
//                     display: "flex",
//                     flexFlow: "column",
//                     height: "100vh",
//                     overflow: "hidden",
//                 }}
//             >
//                 <Navbar />
//                 <div style={{ height: "100%" }}>
//                     <div
//                         style={{
//                             padding: "20px 5%",
//                             height: "calc(100% - 64px)",
//                             overflow: "scroll",
//                             background: "whitesmoke",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 display: "grid",
//                                 background: "white",
//                                 gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
//                             }}
//                         >

//                             <>
//                                 <div className="page-wrapper">
//                                     <div className="content container-fluid">
//                                         <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
//                                             <div className="row align-items-center">
//                                                 <div class="col">
//                                                     <h3 class="page-title" style={{ color: "#00308F", textAlign: 'center' }}> Employee </h3>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="row">
//                                             <div className="col-sm-12">
//                                                 <div className="card">
//                                                     <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
//                                                         <form>
//                                                             <div className="row">
//                                                                 <div className="col-12">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Name
//                                                                         </label>
//                                                                         <input required value={name}
//                                                                             onChange={e => setName(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Employee Code
//                                                                         </label>
//                                                                         <input required value={employeeCode}
//                                                                             onChange={e => employeeCodechange(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Category Id
//                                                                         </label>
//                                                                         <input required value={categoryId}
//                                                                             onChange={e => CategoryIdchange(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Address
//                                                                         </label>
//                                                                         <input required value={address}
//                                                                             onChange={e => setAddress(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             City Id
//                                                                         </label>
//                                                                         <select className="form-control select" required value={cityId} onChange={e => setCityId(e.target.value)}>
//                                                                             {cities
//                                                                                 ? cities.map((city) => {
//                                                                                     return <option key={city.Id} value={city.Id}>{city.Name}</option>
//                                                                                 })
//                                                                                 : null}

//                                                                         </select>

//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                 <div className="form-group local-forms">
//                                                                     <label>State ID </label>

//                                                                     <select value={stateId} onChange={e => setStateId(e.target.value)}

//                                                                         className="form-control select">

//                                                                         {States
//                                                                             ? States.map((state) => {

//                                                                                 return <option key={state.Id} value={state.Id}>{state.StateName} </option>
//                                                                             })
//                                                                             : null}
//                                                                     </select>

//                                                                 </div>
//                                                             </div>
//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Mobile No
//                                                                         </label>
//                                                                         <input required value={mobileNo}
//                                                                             onChange={e => setMobileNo(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="number"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Adhar No
//                                                                         </label>
//                                                                         <input required value={adharNo}
//                                                                             onChange={e => setAdharNo(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="number"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             PAN
//                                                                         </label>
//                                                                         <input required value={pan}
//                                                                             onChange={e => setPAN(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="number"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <hr className="my-3" />

//                                                                 <div className="row">
//                                                                     <div className="col-12 col-sm-4">
//                                                                         <div className="supplier-submit">
//                                                                             <button className="btn btn-primary" type="button" onClick={postAPI}>
//                                                                                 Submit
//                                                                             </button>
//                                                                         </div>
//                                                                     </div>

//                                                                     <div className="col-12 col-sm-4">
//                                                                         <div className="supplier-submit">
//                                                                             <button className="btn btn-warning" type="button" onClick={EmployeeList}>
//                                                                                 List
//                                                                             </button>
//                                                                         </div>
//                                                                     </div>

//                                                                 </div>
//                                                             </div>
//                                                         </form>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>

//                             </>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };
// export default Employee



import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Employee() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cityId, setCityId] = useState("");
  const [stateId, setStateId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [adharNo, setAdharNo] = useState("");
  const [pan, setPAN] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [categories, setCategories] = useState([]);

  const postAPI = (e) => {
    e.preventDefault();

    let config = {
      method: "post",
      mode: "cors",
      maxBodyLength: Infinity,

      url: "https://truecodeapi.microtechsolutions.co.in/api/Employee",

      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        EmployeeCode: employeeCode,
        CategoryId: categoryId,
        Name: name,
        Address: address,
        CityId: cityId,
        StateId: 2,
        MobileNo: mobileNo,
        AddharNo: adharNo,
        PAN: pan,
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("Saved Successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const EmployeeList = () => {
    navigate("/EmployeeList");
  };

  useEffect(() => {
    const getCityData = async () => {
      try {
        const response = await fetch(
          "https://truecodeapi.microtechsolutions.co.in/api/City"
        );
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };

    const getStateData = async () => {
      try {
        const response = await fetch(
          "https://truecodeapi.microtechsolutions.co.in/api/State"
        );
        const data = await response.json();
        setStates(data);
      } catch (error) {
        console.error("Error fetching state data:", error);
      }
    };

    const getCategoryData = async () => {
      try {
        const response = await fetch(
          "https://truecodeapi.microtechsolutions.co.in/api/EmployeeCategory"
        );
        const data = await response.json();
        setCategories(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    getCityData();
    getStateData();
    getCategoryData();
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
                          Employee
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
                          <form onSubmit={postAPI}>
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group local-forms">
                                  <label>Name</label>
                                  <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    type="text"
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>Employee Code</label>
                                  <input
                                    value={employeeCode}
                                    onChange={(e) =>
                                      setEmployeeCode(e.target.value)
                                    }
                                    className="form-control"
                                    type="text"
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>Category</label>

                                  <select
                                    value={categoryId}
                                    onChange={(e) =>
                                      setCategoryId(e.target.value)
                                    }
                                    className="form-control select"
                                  >
                                    <option value="">Select Category</option>
                                    {categories.map((category) => (
                                      <option
                                        key={category.Id}
                                        value={category.Id}
                                      >
                                        {category.Category}
                                      </option>
                                    ))}
                                  </select>
                              
                                </div>
                              </div>

                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>Address</label>
                                  <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control"
                                    type="text"
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>City</label>
                                  <select
                                    className="form-control select"
                                    value={cityId}
                                    onChange={(e) => setCityId(e.target.value)}
                                  >
                                    <option value="">Select City</option>
                                    {cities.map((city) => (
                                      <option key={city.Id} value={city.Id}>
                                        {city.Name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>

                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>State</label>
                                  <select
                                    value={stateId}
                                    onChange={(e) => setStateId(e.target.value)}
                                    className="form-control select"
                                  >
                                    <option value="">Select State</option>
                                    {states.map((state) => (
                                      <option
                                        key={state.Id}
                                        value={state.StateId}
                                      >
                                        {state.StateName}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>Mobile No</label>
                                  <input
                                    value={mobileNo}
                                    onChange={(e) =>
                                      setMobileNo(e.target.value)
                                    }
                                    className="form-control"
                                    type="number"
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>Aadhar No</label>
                                  <input
                                    value={adharNo}
                                    onChange={(e) => setAdharNo(e.target.value)}
                                    className="form-control"
                                    type="number"
                                  />
                                </div>
                              </div>

                              <div className="col-12 col-sm-4">
                                <div className="form-group local-forms">
                                  <label>PAN</label>
                                  <input
                                    value={pan}
                                    onChange={(e) => setPAN(e.target.value)}
                                    className="form-control"
                                    type="number"
                                  />
                                </div>
                              </div>

                              <hr className="my-3" />

                              <div className="row">
                                <div className="col-12 col-sm-4">
                                  <div className="supplier-submit">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>

                                <div className="col-12 col-sm-4">
                                  <div className="supplier-submit">
                                    <button
                                      className="btn btn-warning"
                                      type="submit"
                                      onClick={EmployeeList}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;
