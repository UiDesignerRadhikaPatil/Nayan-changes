import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";
import { Validator } from "react";
import { useNavigate } from "react-router-dom";
import CustomerApi from "./CustomerApi";


export default function CustomerEmployeeDetails() {

    const [accountid, setAccountId] = useState("");
    const [employee, setEmployee] = useState("");
    const [fromdate, setFromdate] = useState('');
    const [toDate, setTodate] = useState('');
    const [basic, setBasic] = useState(0);
    const [hra, setHRA] = useState(0);
    const [tea, setTea] = useState(0);
    const [conveyance, setConveyance] = useState(0);
    const [cca, setCCA] = useState(0);
    const [occ, setOCC] = useState(0);
    const [grosssalary, setGrosssalary] = useState(0);
    const [pf, setPF] = useState(0);
    const [pt, setPT] = useState(0);
    const [labourwelfare, setLabourwelfare] = useState(0);
    const [esi, setESI] = useState(0);
    const [totaldeduction, setTotaldeduction] = useState(0);

    ///................Salary Calculator Table.....................////



    //................Calculation Of Gross Salary.................

    // Function to calculate the sum of specified values
    const calculateSum = () => {
        const sum = parseFloat(basic) + parseFloat(hra) + parseFloat(tea) + parseFloat(conveyance) + parseFloat(cca) + parseFloat(occ);
        return isNaN(sum) ? 0 : sum;
    };

    // Update Gross Salary whenever relevant values change
    useEffect(() => {
        const sum = calculateSum();
        setGrosssalary(sum);
    }, [basic, hra, tea, conveyance, cca, occ]);

    //..............Calculation Of Total Deduction........................

    const calculatesum = () => {
        const Sum = parseFloat(pf) + parseFloat(pt) + parseFloat(labourwelfare) + parseFloat(esi);
        return isNaN(Sum) ? 0 : Sum;
    };

    // Update Gross Salary whenever relevant values change
    useEffect(() => {
        const Sum = calculatesum();
        setTotaldeduction(Sum);
    }, [pf, pt, labourwelfare, esi]);



    const navigate = useNavigate();
    const EmployeeDetails = () => {
        navigate("/customerapi");
    }

    const Salary_calculator = () => {
        navigate('/salarycalculator');
    }

    const postAPI = (e) => {
        e.preventDefault();
        let config = {
            method: 'post',
            mode: "cors",
            maxBodyLength: Infinity,
            url: 'https://truecodeapi.microtechsolutions.co.in/api/CustomerEmployee',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {

                "AccountId": accountid,
                "EmployeeId": employee,
                "FromDate": fromdate,
                "ToDate": toDate,
                "Basic": basic,
                "HRA": hra,
                "Tea": tea,
                "Conveyance": conveyance,
                "CCA": cca,
                "OCC": occ,
                "GrossSalary": grosssalary,
                "PF": pf,
                "PT": pt,
                "LabourWelfare": labourwelfare,
                "ESI": esi,
                "TotaDeduction": totaldeduction,


            },
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Record Save Successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });

    }



    const [customer_data, setCustomer_Data] = useState([]);

    const getCustomerData = async () => {
        const url = 'https://truecodeapi.microtechsolutions.co.in/api/AccountMaster';
        let result = await fetch(url);
        result = await result.json();
        setCustomer_Data(result);
        console.log("Customer data is here");
    }

    useEffect(() => {
        setTimeout(() => {
            getCustomerData();

        }, 1000)
    }, []);


    const [employees, setemployees] = useState([]);

    const getEmployeeData = async () => {
        const url = 'https://truecodeapi.microtechsolutions.co.in/api/Employee';
        let result = await fetch(url);
        result = await result.json();
        setemployees(result);
        console.log("data Fetch Successfully");
        console.log(employees);
    }

    useEffect(() => {
        setTimeout(() => {
            getEmployeeData();
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


                                <div className="page-wrapper" >
                                    <div className="content container-fluid">

                                        <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}>Customer Employee Details</h3>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
                                                        <form onSubmit={postAPI}>
                                                            <div className="row">

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label> Customer </label>

                                                                        <select value={accountid} onChange={e => setAccountId(e.target.value)}

                                                                            className="form-control select">
                                                                            <option value="">Select Customer</option>
                                                                            {customer_data
                                                                                ? customer_data.map((customers) => {

                                                                                    return <option key={customers.AccountId} value={customers.AccountId}>{customers.Id}</option>
                                                                                })
                                                                                : null}
                                                                        </select>


                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label> Employee</label>

                                                                        <select value={employee} onChange={e => setEmployee(e.target.value)}

                                                                            className="form-control select">
                                                                            <option value="">Select Employee</option>

                                                                            {employees
                                                                                ? employees.map((employee) => {

                                                                                    return <option key={employee.Id} value={employee.Id}>{employee.Name}</option>
                                                                                })
                                                                                : null}
                                                                        </select>


                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>From Date <span className="login-danger"></span></label>
                                                                        <input value={fromdate} onChange={e => setFromdate(e.target.value)} type="date" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>To Date <span className="login-danger"></span></label>
                                                                        <input value={toDate} onChange={e => setTodate(e.target.value)} type="date" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label> Basic </label>
                                                                        <input value={basic} onChange={e => setBasic(parseFloat(e.target.value) || 0)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>


                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label> HRA </label>
                                                                        <input value={hra} onChange={e => setHRA(parseFloat(e.target.value) || 0)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label> Tea <span className="login-danger"></span></label>
                                                                        <input onChange={e => setTea(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Conveyance <span className="login-danger"></span></label>
                                                                        <input onChange={e => setConveyance(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>CCA <span className="login-danger"></span></label>
                                                                        <input onChange={e => setCCA(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>OCC <span className="login-danger"></span></label>
                                                                        <input onChange={e => setOCC(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Gross Salary </label>
                                                                        <input value={grosssalary} type="text" className="form-control" readOnly />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label> PF </label>
                                                                        <input value={pf} onChange={e => setPF(parseFloat(e.target.value) || 0)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label> PT </label>
                                                                        <input value={pt} onChange={e => setPT(parseFloat(e.target.value) || 0)} type="number" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Labour Welfare <span className="login-danger"></span></label>
                                                                        <input onChange={e => setLabourwelfare(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>ESI <span className="login-danger"></span></label>
                                                                        <input onChange={e => setESI(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Total Deduction </label>
                                                                        <input value={totaldeduction} type="text" className="form-control" readOnly />
                                                                    </div>
                                                                </div>


                                                                <hr className="my-3" />

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-submit">
                                                                        <button type="button" className="btn btn-primary" onClick={postAPI}>
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-clear">
                                                                        <button type="button" className="btn btn-warning" onClick={EmployeeDetails}>
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
            </div >
        </div >
    );
};
