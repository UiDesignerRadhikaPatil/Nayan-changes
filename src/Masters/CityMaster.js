import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";


export default function CityMaster() {

    const [Name, Namechange] = useState("");
    const [StateId, Statechange] = useState("")


    const postAPI = (e) => {

        let config = {
            method: 'post',
            mode: "cors",
            maxBodyLength: Infinity,
            url: "https://truecodeapi.microtechsolutions.co.in/api/City",

            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                // 'CityId': CityId,
                'Name': Name,
                'StateId': StateId,

            },

        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                alert("Saved Successfully");
                window.location.reload();
                console.log(Name, StateId)

            })
            .catch((error) => {
                console.log(error);

            });

    }

    const [states, setStates] = useState([]);

    useEffect(() => {
        const getStateData = async () => {
            const url = "https://truecodeapi.microtechsolutions.co.in/api/State";
            let result = await fetch(url);
            result = await result.json();
            setStates(result);
            console.log("fetch Data Successfully");
            // console.log(states);
        };

        setTimeout(() => {
            getStateData();
        }, 1000);
    }, []); // Empty dependency array since getStateData doesn't have dependencies

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
                                                    <h3 class="page-title" style={{ color: "#00308F", textAlign: 'center' }}> City Master </h3>
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
                                                                            City Id
                                                                        </label>
                                                                        <input required
                                                                            onChange={e => CityIdchange(e.target.value)}
                                                                            className="form-control"
                                                                            type="number"

                                                                        />
                                                                    </div>
                                                                </div> */}

                                                                <div className="col-12 col-sm-4">
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


                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            State
                                                                        </label>


                                                                        <select value={StateId} onChange={e => Statechange(e.target.value)}

                                                                            className="form-control select">
                                                                            <option value=""> select state</option>

                                                                            {states
                                                                                ? states.map((state) => {

                                                                                    return <option key={state.Id} value={state.Id}>{state.StateName}</option>
                                                                                })
                                                                                : null}
                                                                        </select>



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
