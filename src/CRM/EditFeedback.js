import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";

function EditFeedback() {
    const [setId, changeId] = useState("");
    const [accountid, setAccountid] = useState('');
    const [date, setDate] = useState('');
    const [supervisorid, setSupervisorid] = useState('')
    const [feedbackform, setFeedbackform] = useState('');
    const [contactno, setContactno] = useState('');
    const [ontime, setOntime] = useState('');
    const [workquality, setWorkquality] = useState('');
    const [employeesatisfaction, setEmployeesatisfaction] = useState("");
    const [suggestions, setSuggestions] = useState('');
    const [message, setMessage] = useState('')

    const navigate = useNavigate();

    const postAPI = (e) => {
        e.preventDefault();
        let config = {
            method: 'post',
            mode: "cors",
            maxBodyLength: Infinity,

            url: "https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                'Id': setId,
                'FeedBackDate': date,
                'AccountId': accountid,
                'SupervisorId': 1,
                'FeedbackFrom': feedbackform,
                'ContactNo': contactno,
                'OnTime': ontime,
                'WorkQuality': workquality,
                'EmployeeSatisfaction': employeesatisfaction,
                'Message': message,
                'Suggestions': suggestions,
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Record Updated Successfully");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);

            });

    }

    const { Id } = useParams();

    useEffect(() => {
        const getcategory = async () => {
            const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry?Id=" + Id);
            const getdata = await res.json();

            employeedata(getdata);
        };
        getcategory();

    }, [Id]);

    const employeedata = (getdata) => {

        changeId(getdata.Id);
        setDate(getdata.FeedBackDate);
        setAccountid(getdata.AccountId);
        setSupervisorid(getdata.SupervisorId);
        setFeedbackform(getdata.FeedbackFrom);
        setContactno(getdata.ContactNo);
        setOntime(getdata.OnTime);
        setWorkquality(getdata.WorkQuality)
        setEmployeesatisfaction(getdata.EmployeeSatisfaction)
        setMessage(getdata.Message);
        setSuggestions(getdata.Suggestions);

    };

    const [account_id, setAccount_id] = useState([]);

    const getAccountData = async () => {
        try {
            const url = "https://truecodeapi.microtechsolutions.co.in/api/AccountMaster";
            let result = await fetch(url);
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            result = await result.json();
            setAccount_id(result);
            console.log("Fetch Successfully");
            console.log(account_id);
        } catch (error) {
            console.error("Error fetching account data:", error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getAccountData();
        }, 1000);
    }, []);

    const [customers, setcustomers] = useState([]);

    const getCustomerData = async () => {
        try {
            const url = 'https://truecodeapi.microtechsolutions.co.in/api/Employee';
            let result = await fetch(url);
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            result = await result.json();
            setcustomers(result);
            console.log("Data Fetch Successfully");
            console.log(customers);
        } catch (error) {
            console.error("Error fetching customer data:", error);
        }
    };



    useEffect(() => {
        setTimeout(() => {
            getCustomerData();
        }, 1000);
    }, []);

    const [supervisors, setsupervisors] = useState([]);

    const getSupervisorData = async () => {
        try {
            const url = 'https://truecodeapi.microtechsolutions.co.in/api/Employee';
            let result = await fetch(url);
            if (!result.ok) {
                throw new Error(`HTTP error! Status: ${result.status}`);
            }
            result = await result.json();
            setsupervisors(result);
            console.log('Data fetch successfully');
            console.log(supervisors);
        } catch (error) {
            console.error("Error fetching supervisor data:", error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getSupervisorData();
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
                                                <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}> Edit Feedback Entry </h3>
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
                                                                    <label>Date</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        value={date}
                                                                        onChange={(e) => setDate(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label> Account Id</label>

                                                                    <select value={accountid} onChange={e => setAccountid(e.target.value)} className="form-control select">
                                                                        {account_id
                                                                            ? account_id.map((account) => (
                                                                                <option key={account.Id} value={account.Id}>{account.AccountName}</option>
                                                                            ))
                                                                            : null}
                                                                    </select>



                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>
                                                                        supervisor
                                                                    </label>


                                                                    <select value={supervisorid} onChange={e => setSupervisorid(e.target.value)}

                                                                        className="form-control select">

                                                                        {supervisors
                                                                            ? supervisors.map((Supervisor) => {

                                                                                return <option key={Supervisor.SupervisorId} value={Supervisor.SupervisorId}>{Supervisor.Name}</option>
                                                                            })
                                                                            : null}
                                                                    </select>


                                                                </div>
                                                            </div>



                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Feedback Form<span className="login-danger"></span></label>

                                                                    <select value={feedbackform} onChange={e => setFeedbackform(e.target.value)} className="form-control select">
                                                                        {customers
                                                                            ? customers.map((feedback) => (
                                                                                <option key={feedback.Id} value={feedback.Name}>{feedback.Name}</option>
                                                                            ))
                                                                            : null}
                                                                    </select>



                                                                </div>
                                                            </div>


                                                           


                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>
                                                                        Contact No
                                                                    </label>
                                                                    <input required value={contactno}
                                                                        onChange={e => setContactno(e.target.value)}
                                                                        className="form-control"
                                                                        type="text"

                                                                    />
                                                                </div>
                                                            </div>


                                                            <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            On Time
                                                                        </label>
                                                                        {/* <input type="text" value={ontime} onChange={e => setOntime(e.target.value)} className="form-control" /> */}
                                                                        <select className="form-control select" required value={ontime} onChange={e => setOntime(e.target.value ==='true')}>
                                                                            <option>Select </option>
                                                                            <option>True</option>
                                                                            <option>False</option>

                                                                        </select>

                                                                    </div>
                                                                </div>



                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Work Quality
                                                                        </label>
                                                                        <input required value={workquality}
                                                                            onChange={e => setWorkquality(e.target.value)}
                                                                            className="form-control"
                                                                            type="text"

                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Employee Satisfaction
                                                                        </label>
                                                                        <input required value={employeesatisfaction}
                                                                            onChange={e => setEmployeesatisfaction(e.target.value)}
                                                                            className="form-control"
                                                                            type="text"

                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Message
                                                                        </label>
                                                                        <input required value={message}
                                                                            onChange={e => setMessage(e.target.value)}
                                                                            className="form-control"
                                                                            type="text"

                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Suggestions
                                                                        </label>
                                                                        <input required value={suggestions}
                                                                            onChange={e => setSuggestions(e.target.value)}
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
                                                                        <button className="btn btn-warning" type="button" onClick={() => navigate('/apilist')}>
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
            </div >
        </div >
    );
}

export default EditFeedback;
