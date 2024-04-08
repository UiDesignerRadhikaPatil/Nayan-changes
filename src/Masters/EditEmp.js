import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";

function EditEmp() {
    const [setId, changeId] = useState("");
    const [name, namechange] = useState("");
    const [address, addresschange] = useState("");
    const [cityId, cityIdchange] = useState("");
    const [statesId, stateidchange] = useState("");
    const [mobileNo, mobileNochange] = useState("");
    const [addharNo, addharNochange] = useState("");
    const [pan, panchange] = useState("");
    const [employeeCode, employeeCodechange] = useState();
    const [categoryId, CategoryIdchange] = useState();
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const postAPI = (e) => {
        e.preventDefault();
        let config = {
            method: 'post',
            mode: "cors",
            maxBodyLength: Infinity,

            url: "https://truecodeapi.microtechsolutions.co.in/api/Employee",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                'Id': setId,
                'Name': name,
                'Address': address,
                'CityId': cityId,
                'StateId': statesId,
                'MobileNo': mobileNo,
                'AdharNo': addharNo,
                'PAN': pan,
                'CategoryId': categoryId,
                'EmployeeCode': employeeCode,
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Data Updated Successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);

            });

    }

    const { Id } = useParams();

    useEffect(() => {
        const getcategory = async () => {
            const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/Employee?Id=" + Id);
            const getdata = await res.json();

            employeedata(getdata);
        };
        getcategory();

    }, [Id]);



    const employeedata = (getdata) => {

        changeId(getdata.Id);
        namechange(getdata.Name);
        addresschange(getdata.Address);
        cityIdchange(getdata.CityId);
        stateidchange(getdata.StateId);
        mobileNochange(getdata.MobileNo);
        addharNochange(getdata.AddharNo);
        panchange(getdata.PAN)
        employeeCodechange(getdata.EmployeeCode);
        CategoryIdchange(getdata.categoryId);

    };

    // useEffect(() => {
    //     setInterval(() => {
    //         employeedata();
    //     },1000);
    // }, [])
    const [cities, setcities] = useState([]);

    const getCityData = async () => {
        const url = "https://truecodeapi.microtechsolutions.co.in/api/City";
        let result = await fetch(url);
        result = await result.json();
        setcities(result);
        console.log("Fetch Successfully");
        console.log(cities);
    }

    const [States, setStates] = useState([]);
    const getStateData = async () => {
        const url = 'https://truecodeapi.microtechsolutions.co.in/api/State';
        let result = await fetch(url);
        result = await result.json();
        setStates(result);
        console.log("data Fetch Successfully");
        console.log(States);
    }

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

    useEffect(() => {
        setTimeout(() => {
            getCityData();
        }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            getStateData();
        }, 1000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            getCategoryData();
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
                            <div className="page-wrapper">
                                <div className="content container-fluid">
                                    <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}> Edit Employee </h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
                                                    <form>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <div className="form-group local-forms">
                                                                    <label>ID</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="id"
                                                                        value={Id}
                                                                        onChange={(e) => changeId(e.target.value)}


                                                                    />
                                                                </div>

                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Name</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        value={name}
                                                                        onChange={(e) => namechange(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Employee Code</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        value={employeeCode}
                                                                        onChange={(e) => employeeCodechange(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Category Id </label>
                                                                    <select
                                                                        className="form-control"
                                                                        type="text"
                                                                        value={categoryId}
                                                                        onChange={(e) => CategoryIdchange(e.target.value)}
                                                                    >
                                                                        {/* <option value="">Select Category</option> */}
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
                                                                        onChange={(e) => addresschange(e.target.value)}
                                                                        className="form-control"
                                                                        type="text"
                                                                    />
                                                                </div>
                                                            </div>


                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>City ID </label>


                                                                    <select value={cityId} onChange={e => cityIdchange(e.target.value)}

                                                                        className="form-control select">

                                                                        {cities
                                                                            ? cities.map((city) => {

                                                                                return <option key={city.Id} value={city.Id}>{city.Name}</option>
                                                                            })
                                                                            : null}
                                                                    </select>



                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>State ID </label>


                                                                    <select value={statesId} onChange={e => stateidchange(e.target.value)}

                                                                        className="form-control select">

                                                                        {States
                                                                            ? States.map((state) => {

                                                                                return <option key={state.Id} value={state.Id}>{state.StateName} </option>
                                                                            })
                                                                            : null}
                                                                    </select>



                                                                </div>
                                                            </div>




                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Mobile No</label>
                                                                    <input
                                                                        value={mobileNo}
                                                                        onChange={(e) => mobileNochange(e.target.value)}
                                                                        className="form-control"
                                                                        type="number"
                                                                    />
                                                                </div>
                                                            </div>


                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Adhar No</label>
                                                                    <input
                                                                        value={addharNo}
                                                                        onChange={(e) => addharNochange(e.target.value)}
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
                                                                        onChange={(e) => panchange(e.target.value)}
                                                                        className="form-control"
                                                                        type="text"
                                                                    />
                                                                </div>
                                                            </div>

                                                            <hr className="my-3" />

                                                            <div className="row">
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-submit">
                                                                        <button className="btn btn-primary" type="submit" onClick={postAPI}>
                                                                            Update
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-submit">
                                                                        <button className="btn btn-warning" type="button" onClick={() => navigate('/employeelist')}>
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

export default EditEmp;
