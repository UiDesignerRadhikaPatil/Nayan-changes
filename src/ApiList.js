import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { Link, useNavigate } from "react-router-dom";
import { FeedbackEntry } from './CRM/FeedbackEntry';
import axios from 'axios';

function ApiList() {

    const [category, setCategory] = useState([]);


    useEffect(() => {
        const getcategory = async () => {
            const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry");
            const getdata = await res.json();
            setCategory(getdata);
            // console.log(getdata);
        };

        getcategory();
    }, []);

    {
        /*    const deleteStudent =(Id) =>{
            axios.delete("https://peapi.microtechsolutions.co.in/php/deleteenquiry.php",{data:{Id: Id}})
            .then((result) =>{
                getcategory();
            })
    
        }
        */
    }

    <div className="d-flex">
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

        </div>

    </div>

    const navigate = useNavigate();

    const UpdateEmployee = (Id) => {

        navigate("/editfeedback/" + Id)

    }

    const DeleteEmployee = (Id) => {
        axios.delete("https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry?Id=" + Id)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                
            })
            .catch((error) => {
                console.log(error);
                alert("Delete Record Successfully");

            });
    }

    const BackPage = () => {
        navigate("/newfeedbackentry");
    }




    return (

        <div className="d-flex">
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

                                <table className="table table-striped table-hover table-responsive-md table-bordered">
                                    <thead>
                                        <tr>

                                            <th scope="col-md-2">Sr. No</th>
                                            <th scope="col-md-2">Id</th>
                                            <th scope="col-md-2">Date</th>
                                            <th scope="col-md-2">Account Id</th>
                                            <th scope="col-md-2">Supervisor Id</th>
                                            <th scope="col-md-2">Feedback Form </th>
                                            <th scope="col-md-2">Contact No</th>
                                            <th scope="col-md-2">Work Quality</th>
                                            <th scope="col-md-2">On Time</th>
                                            <th scope="col-md-2">Employee Satisfaction</th>
                                            <th scope="col-md-2">Message </th>
                                            <th scope="col-md-2">Suggestions </th>
                                            <th scope="col-md-2">Active </th>
                                            <th scope="col-md-2">Created By </th>
                                            <th scope="col-xl-2">.................Action.................. </th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        {category.map((getcate, index) => (
                                            <tr key={getcate.Id}>
                                                <td scope="col-md-2">{index + 1}</td>
                                                <td scope="col-md-2">{getcate.Id}</td>
                                                <td scope="col-md-2">{getcate.FeedBackDate}</td>
                                                <td scope="col-md-2">{getcate.FeedbackFrom}</td>
                                                {/* <td scope="col-md-2">{(getcate.EnquiryDate.date).substring(0, 10)}</td> */}
                                                <td scope="col-md-2"> {getcate.SupervisorId}</td>
                                                <td scope="col-md-2"> {getcate.FeedbackFrom}</td>
                                                <td scope="col-md-2"> {getcate.ContactNo}</td>
                                                <td scope="col-md-2"> {getcate.WorkQuality}</td>
                                                <td scope="col-md-2"> {getcate.OnTime}</td>
                                                <td scope="col-md-2"> {getcate.EmployeeSatisfaction}</td>
                                                <td scope="col-md-2"> {getcate.Message}</td>
                                                <td scope="col-md-2"> {getcate.Suggestions}</td>
                                                <td scope="col-md-2"> {getcate.Active}</td>
                                                <td scope="col-md-2"> {getcate.CreatedBy}</td>

                                               
                                                <button className="btn btn-success mx-2" onClick={() => { UpdateEmployee(getcate.Id) }}> Edit</button>
                                                <button className="btn btn-danger mx-2" onClick={() => { DeleteEmployee(getcate.Id) }}> Delete </button>
                                                <button className="btn btn-warning mx-2" onClick={BackPage}> Back </button>
                                                <td scope="col-md-2">

                                               
                                                </td>




                                            </tr>
                                        ))}


                                    </tbody>

                                </table>

                            </>

                        </div>
                    </div>

                </div>


            </div>

        </div>

    );
};
export default ApiList;