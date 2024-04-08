import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';

function CustomerMasterApi() {
    const [customerData, setCustomerData] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);
    const [combinedData, setCombinedData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getCustomerData = async () => {
            const res = await fetch('https://truecodeapi.microtechsolutions.co.in/api/Address');
            const data = await res.json();
            setCustomerData(data);
        };
        getCustomerData();
        
    }, []);

    useEffect(()=>{
        const getEmployeeData = async () => {
            const res = await fetch('https://truecodeapi.microtechsolutions.co.in/api/AccountMaster');
            const data = await res.json();
            setEmployeeData(data);
        };
        getEmployeeData();
    }, [])


    const UpdateCustomer = (Id) => {
        navigate('/editcustomermaster/' + Id);
    };


    
    const BackPage = () => {
        navigate('/customermaster');
    };

    const DeleteEmployee = (Id) => {
        axios.delete(`https://truecodeapi.microtechsolutions.co.in/api/Address?Id=` + Id)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
                alert('Delete Record Successfully');
            });
    };

    return (
        <div className="d-flex">
            <div
                style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexFlow: 'column',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                <Navbar />
                <div style={{ height: '100%' }}>
                    <div
                        style={{
                            padding: '20px 5%',
                            height: 'calc(100% - 64px)',
                            overflow: 'scroll',
                            background: 'whitesmoke',
                        }}
                    >
                        <div
                            style={{
                                display: 'grid',
                                background: 'white',
                                gridTemplateColumns: 'repeat(1, minmax(200px, 1200px))',
                            }}
                        >
                            <table className="table table-striped table-bordered table-hover table-responsive-md">
                                <thead>
                                    <tr>

                                        <th scope="col-md-2">Id</th>
                                        <th scope="col-md-2">Name</th>
                                        <th scope="col-md-2">........................Action.........................</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {employeeData.map((data, index) => (


                                        <tr key={index}>

                                            <td scope="col-md-2">{data.Id}</td>
                                            <td scope="col-md-2">{data.AccountName}</td>


                                            <td scope="col-md-2">
                                                <button className="btn btn-success mx-2" onClick={() => UpdateCustomer(data.Id)}>Edit</button>
                                                <button className="btn btn-danger mx-2" onClick={() => DeleteEmployee(data.Id)}>Delete</button>
                                                <button className="btn btn-warning mx-2" onClick={BackPage}>Back</button>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerMasterApi;
