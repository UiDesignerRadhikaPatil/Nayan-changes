import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function CalculatorApi() {

    const [category, setCategory] = useState([]);


    useEffect(() => {
        const getcategory = async () => {
            const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/MonthlySalary");
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
        axios.delete("https://truecodeapi.microtechsolutions.co.in/api/CustomerEmployee?Id=" + Id)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                
            })
            .catch((error) => {
                console.log(error);
                alert("Delete Record Successfully");

            });
    }

    const BackPage = () => {
        navigate("/salarycalculator");
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
                {/* <Navbar /> */}
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

                                            {/* <th scope="col-md-2">Sr. No</th> */}
                                            <th scope="col-md-2">Id </th>
                                            <th scope="col-md-2">Employee Code</th>
                                            {/* <th scope="col-md-2">Name Of The Employee</th> */}
                                            <th scope="col-md-2">Month Days </th>
                                            <th scope="col-md-2">Total Days</th>
                                            <th scope="col-md-2">Basic </th>
                                            <th scope="col-md-2">HRA </th>
                                            <th scope="col-md-2">Tea </th>
                                            <th scope="col-md-2">Conveyance </th>
                                            <th scope="col-md-2">CCA </th>
                                            <th scope="col-md-2">OCC </th>
                                            <th scope="col-md-2">Gross Salary  </th>
                                            <th scope="col-md-2">PF </th>
                                            <th scope="col-md-2"> PT</th>
                                            <th scope="col-md-2"> Labour Welfare</th>
                                            <th scope="col-md-2"> ESI </th>
                                            <th scope="col-md-2"> Total Deduction </th>
                                            <th scope="col-md-2">  Salary </th>
                                            <th scope="col-md-2">At Atual Pay</th>
                                           
                                            <th scope="col-xl-2">.................Action.................. </th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                    {category.map((getcate, index) => (
                                            <tr key={getcate.Id}>
                                                {/* <td scope="col-md-2">{index + 1}</td> */}
                                                <td scope="col-md-2">{getcate.Id}</td>
                                                <td scope="col-md-2">{getcate.EmployeeId}</td>
                                                <td scope="col-md-2"> {getcate.MonthDays}</td>
                                                <td scope="col-md-2">{(getcate.TotalDays)}</td>
                                                {/* <td scope="col-md-2" >{getcate.FromDate}</td> */}
                                                {/* <td scope="col-md-2"> {getcate.ToDate}</td> */}
                                                <td scope="col-md-2"> {getcate.Basic}</td>
                                                <td scope="col-md-2"> {getcate.HRA}</td>
                                                <td scope="col-md-2"> {getcate.Tea}</td>
                                                <td scope="col-md-2"> {getcate.Conveyance}</td>
                                                <td scope="col-md-2"> {getcate.CCA}</td>
                                                <td scope="col-md-2"> {getcate.OCC}</td>
                                                <td scope="col-md-2"> {getcate.GrossSalary}</td>
                                                <td scope="col-md-2"> {getcate.PF}</td>
                                                <td scope="col-md-2">{getcate.PT}</td>
                                                <td scope="col-md-2">{getcate.LabourWelfare}</td>
                                                <td scope="col-md-2">{getcate.ESI}</td>
                                                <td scope="col-md-2 ">{getcate.TotalDeduction}</td>
                                                <td scope="col-md-2 ">{getcate.Salary}</td>
                                                <td scope="col-md-2 ">{getcate.AtActualPay}</td>
                                                
                                                

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
export default CalculatorApi;