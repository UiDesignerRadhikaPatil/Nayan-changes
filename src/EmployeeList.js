import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


function EmployeeList() {

    const [category, setCategory] = useState([]);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");



    useEffect(() => {
        const getcategory = async () => {
            const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/Employee");
            const getdata = await res.json();
            setCategory(getdata);
            //console.log(getdata);
        };

        getcategory();
    }, []);

    const navigate = useNavigate();

    const UpdateEmployee = (Id) => {

        navigate("/editemp/" + Id)

    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         UpdateEmployee();
    //     }, 1000);
    // },[]);

    const BackPage = () => {
        navigate("/employee");
    }

    // const DeleteEmployee = (Id) => {
    //     if (window.confirm("Do you want to remove records?")) {
    //         fetch("https://truecodeapi.microtechsolutions.co.in/api/Employee?Id=" + Id,
    //             { method: "DELETE" }).then(() => {

    //                 window.location.reload();

    //             }).catch((err) => {
    //                 console.log(err.message)
    //             })
    //     }
    // }

    // const DeleteEmployee = (Id) => {
    //     fetch("https://truecodeapi.microtechsolutions.co.in/api/Employee?Id=" + Id, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .catch(error => console.error(error));

    // }
    const DeleteEmployee = (Id) => {
        axios.delete("https://truecodeapi.microtechsolutions.co.in/api/Employee?Id=" + Id)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                
            })
            .catch((error) => {
                console.log(error);
                alert("Delete Record Successfully");

            });
    }

    return (

        <div className="d-flex">
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


                                <table className="table table-striped table-bordered table-hover table-responsive-md">
                                    <thead>
                                        <tr>


                                            <th scope="col-md-2">Sr. No</th>
                                            <th scope="col-md-2">Id</th>
                                            <th scope="col-md-2">Name</th>
                                            <th scope="col-md-2">Employee Code</th>
                                            <th scope="col-md-2">Category Id</th>
                                            <th scope="col-md-2">Address</th>
                                            <th scope="col-md-2">City Id</th>
                                            <th scope="col-md-2">State Id</th>
                                            <th scope="col-md-2">Mobile No.</th>
                                            <th scope="col-md-2">Adhar No.</th>
                                            <th scope="col-md-2">PAN</th>
                                            <th scope="col-md-2">Active</th>
                                            <th scope="col-md-2">Created By</th>
                                            <th scope="col-md-2">...................Action.................</th>


                                        </tr>
                                    </thead>
                                    <tbody>

                                        {category.map((getcate, index) => (
                                            <tr key={getcate.Id}>
                                                <td scope="col-md-2 mx-2">{index + 1}</td>
                                                <td scope="col-md-2">{getcate.Id}</td>
                                                <td scope="col-md-2">{getcate.Name}</td>
                                                {/*   
                                                   <td scope="col-md-2">{(getcate.EnquiryDate.date).substring(0, 10)}</td>  */}

                                                <td scope="col-md-2">{getcate.EmployeeCode}</td>
                                                <td scope="col-md-2">{getcate.CategoryId}</td>
                                                <td scope="col-md-2"> {getcate.Address}</td>
                                                <td scope="col-md-2"> {getcate.CityId}</td>
                                                <td scope="col-md-2"> {getcate.StateId}</td>
                                                <td scope="col-md-2"> {getcate.MobileNo}</td>
                                                <td scope="col-md-2"> {getcate.AddharNo}</td>
                                                <td scope="col-md-2"> {getcate.PAN}</td>
                                                <td scope="col-md-2"> {getcate.Active}</td>
                                                <td scope="col-md-2"> {getcate.CreatedBy}</td>



                                                <button className="btn btn-success mx-2" onClick={() => { UpdateEmployee(getcate.Id) }}> Edit</button>
                                                <button className="btn btn-danger mx-2" onClick={() => { DeleteEmployee(getcate.Id) }}> Delete </button>
                                                <button className="btn btn-warning mx-2" onClick={BackPage}> Back </button>


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
export default EmployeeList;