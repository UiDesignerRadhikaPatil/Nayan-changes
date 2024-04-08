import { useState } from "react";


import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";



function CompanyInformation() {


    const [companyname, companynamechange] = useState("");
    const [address, addresschange] = useState("");

    const [city, citychange] = useState("");
    const [state, statechange] = useState('');

    const [phone, setPhone] = useState('');
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^\d{1,10}$/);

    const [emailid, setEmailid] = useState('');
    const [error, setError] = useState(null)
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }


    const handleChange = event => {
        setEmailid(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        setError(null);

        if (isValidEmail(emailid)) {
            console.log('The email is valid');
        } else {
            setError('Email is invalid');
        }
    }

    const [url, urlchange] = useState("");
    const [cin, cinchange] = useState("");
    const [pan, panchange] = useState();
    const [branchid, branchidchange] = useState();
    const [gstno, gstnochange] = useState();
    const [bankname, banknamechange] = useState('');
    const [acno, acnochange] = useState('');
    const [branch, branchchange] = useState('');
    const [ifsc, ifscchange] = useState('');




    const handlesubmit = (e) => {
        e.preventDefault();
        const companyinfo = { companyname, address, city, state, phone, emailid, url, cin, pan, gstno, bankname, branch, acno, ifsc };


        axios.get("https://peapi.microtechsolutions.co.in/php/getcity.php", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(companyinfo)
        })
            .then
            ((result) => {
                alert('Saved successfully.')
                console.log(result)

            })
            .catch((err) => {
                console.log(err.message)
            })

    }

    return (<div className="d-flex">
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


                            <div className="page-wrapper" onSubmit={handlesubmit}>
                                <div className="content container-fluid">

                                    <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}> Comapny Information</h3>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="card">
                                                <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
                                                    <form>
                                                        <div className="row">


                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Comapny Name <span className="login-danger"></span></label>
                                                                    <input value={companyname} onChange={e => companynamechange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Address  <span className="login-danger"></span></label>
                                                                    <input value={address} onChange={e => addresschange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>City  <span className="login-danger"></span></label>
                                                                    <input value={city} onChange={e => citychange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Phone<span className="login-danger"></span></label>
                                                                    <input value={phone} type="number" className="form-control" onChange={(e) => {
                                                                        setPhone(e.target.value);
                                                                        if (!pattern.test(e.target.value))
                                                                            setIsError(true);
                                                                        else setIsError(false);
                                                                    }} />
                                                                    {error && <h6 style={{ color: 'red' }}>{error}</h6>}
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Email Id <span className="login-danger"></span></label>
                                                                    <input id="email" value={emailid} onChange={handleChange} name="email" className="form-control" />
                                                                    {error && <h6 style={{ color: 'red' }}>{error}</h6>}
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>URL <span className="login-danger"></span></label>
                                                                    <input value={url} onChange={e => urlchange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>CIN <span className="login-danger"></span></label>
                                                                    <input value={cin} onChange={e => cin(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>PAN <span className="login-danger"></span></label>
                                                                    <input value={pan} onChange={e => panchange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>GST No. <span className="login-danger"></span></label>
                                                                    <input value={gstno} onChange={e => gstno(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <hr className="my-3" />

                                                            <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                                                <div className="row align-items-center">
                                                                    <div className="col">
                                                                        <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}>Bank Details</h3>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>Bank Name <span className="login-danger"></span></label>
                                                                    <input value={bankname} onChange={e => banknamechange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label> Branch <span className="login-danger"></span></label>
                                                                    <input value={branch} onChange={e => branchchange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>AC/No. <span className="login-danger"></span></label>
                                                                    <input value={acno} onChange={e => acnochange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="form-group local-forms">
                                                                    <label>IFSC <span className="login-danger"></span></label>
                                                                    <input value={ifsc} onChange={e => ifscchange(e.target.value)} type="text" className="form-control" />
                                                                </div>
                                                            </div>

                                                            <hr className="my-3" />


                                                            <div className="col-12 col-sm-4">
                                                                <div className="supplier-submit">
                                                                    <button type="submit" className="btn btn-primary">
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            <div className="col-12 col-sm-4">
                                                                <div className="supplier-clear">
                                                                    <button type="clear" className="btn btn-primary">
                                                                        Clear
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
        </div>
    </div>
    );
};

export default CompanyInformation;
