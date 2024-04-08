import React, { useState } from "react";


import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";


export default function CityMaster() {
    const [Id, Idchange] = useState();
    const [Name, Namechange] = useState("");
    const [Pincode, Pincodechange] = useState();


    const postAPI = (e) => {

        let config = {
            method: 'post',
            mode: "cors",
            maxBodyLength: Infinity,
            url: "https://truecodeapi.microtechsolutions.co.in/api/State",

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                "Id": Id,
                "StateName": Name,
               "PinCode": Pincode,
                
            },

        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Saved Successfully");
                console.log(Name,Id,Pincode)

            })
            .catch((error) => {
                console.log(error);

            });

    }


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

                            <>
                                <div className="page-wrapper">
                                    <div className="content container-fluid">
                                        <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                            <div className="row align-items-center">
                                                <div class="col">
                                                    <h3 class="page-title" style={{ color: "#00308F", textAlign: 'center' }}> State Master </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
                                                        <form>
                                                            <div className="row">

                                                                {/* <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            State Id
                                                                        </label>
                                                                        <input required
                                                                            onChange={e => Idchange(e.target.value)}
                                                                            className="form-control"
                                                                            type="number"

                                                                        />
                                                                    </div>
                                                                </div> */}

                                                                <div className="col-12 ">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Name
                                                                        </label>
                                                                        <input required value={Name}
                                                                            onChange={e => Namechange(e.target.value)}
                                                                            className="form-control"
                                                                            type="text"

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 ">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            Pincode
                                                                        </label>
                                                                        <input required value={Pincode}
                                                                            onChange={e => Pincodechange(e.target.value)}
                                                                            className="form-control"
                                                                            type="number"

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <hr className="my-3" />

                                                                <div className="row">
                                                                    <div className="col-12 col-sm-4">
                                                                        <div className="supplier-submit">
                                                                            <button className="btn btn-primary" type="button" onClick={postAPI}>
                                                                                Submit
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12 col-sm-4">
                                                                        <div className="supplier-clear">
                                                                            <button type="reset" className="btn btn-secondary">
                                                                                Clear
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




                            </>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
