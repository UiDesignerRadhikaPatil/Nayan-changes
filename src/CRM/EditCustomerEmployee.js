import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";

function EditCustomerEmployee() {
    const [setId, changeId] = useState("");
    const [customer, setCustomer] = useState("");
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

    /////////////////..........................................................................................////////


    const navigate = useNavigate();
    const EmployeeDetails = () => {
        navigate("/customerapi");
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
                'Id': setId,
                "AccountId": customer,
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



    const { Id } = useParams();

    useEffect(() => {
        const getcategory = async () => {
            const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/CustomerEmployee?Id=" + Id);
            const getdata = await res.json();

            employeedata(getdata);
        };
        getcategory();

    }, []);

    const employeedata = (getdata) => {

        changeId(getdata.Id);
        setCustomer(getdata.AccountId);
        setEmployee(getdata.EmployeeId);
        setFromdate(getdata.FromDate);
        setTodate(getdata.ToDate);
        setBasic(getdata.Basic);
        setHRA(getdata.HRA);
        setTea(getdata.Tea)
        setConveyance(getdata.Conveyance)
        setCCA(getdata.CCA);
        setOCC(getdata.OCC);
        setGrosssalary(getdata.GrossSalary);
        setPF(getdata.PF);
        setPT(getdata.PT);
        setLabourwelfare(getdata.LabourWelfare);
        setESI(getdata.ESI);
        setTotaldeduction(getdata.TotaDeduction);



    };

    const [customerid, setcustomerid] = useState([]);

    const getCustomerData = async () => {
        const url = 'https://truecodeapi.microtechsolutions.co.in/api/AccountMaster';
        let result = await fetch(url);
        result = await result.json();
        setcustomerid(result);
        console.log("data Fetch Successfully");
        console.log(customerid);
    }

    useEffect(() => {
        setTimeout(() => {
            getCustomerData();
        }, 1000);
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


    useEffect(() => {
        setTimeout(() => {
            getCustomerData();
        }, 1000);
    }, []);

    const BackPage = () =>{
        navigate("/customeremployeedetails");
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
                            <div className="page-wrapper">
                                <div className="content container-fluid">
                                    <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}> Edit Customer Employee Details </h3>
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
                                                                    <label> Customer </label>

                                                                    <select value={customer} onChange={e => setCustomer(e.target.value)}

                                                                        className="form-control select">

                                                                        {customerid
                                                                            ? customerid.map((customers) => {

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
                                                                    <input value={fromdate} onChange={e => setFromdate(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>To Date </label>
                                                                    <input value={toDate} onChange={e => setTodate(e.target.value)} type="text" className="form-control" />
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
                                                                    <input value={tea} onChange={e => setTea(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Conveyance <span className="login-danger"></span></label>
                                                                    <input value={conveyance} onChange={e => setConveyance(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>CCA <span className="login-danger"></span></label>
                                                                    <input value={cca} onChange={e => setCCA(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>OCC <span className="login-danger"></span></label>
                                                                    <input value={occ} onChange={e => setOCC(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
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
                                                                    <input value={labourwelfare} onChange={e => setLabourwelfare(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>ESI <span className="login-danger"></span></label>
                                                                    <input value={esi} onChange={e => setESI(parseFloat(e.target.value) || 0)} type="text" class="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Total Deduction </label>
                                                                    <input value={totaldeduction} type="text" className="form-control" readOnly />
                                                                </div>
                                                            </div>

                                                            <hr className="my-3" />

                                                            <div className="row">
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-submit">
                                                                        <button className="btn btn-success" type="submit" onClick={postAPI}>
                                                                            Update
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-submit">
                                                                        <button className="btn btn-warning" type="button" onClick={EmployeeDetails}>
                                                                            List
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="supplier-submit">
                                                                        <button className="btn btn-secondary" type="button" onClick={BackPage}>
                                                                            Back
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
            </div >
        </div >
    );
}

export default EditCustomerEmployee;
