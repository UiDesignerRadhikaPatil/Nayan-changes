import { useState } from "react";


import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";


export default function MaterialMaster () {

    const [materialcode, materialcodechange] = useState();
    const [materialgroup, materialgroupchange] = useState("");
    const [materialname, materialnamechange] = useState("");
    const [uom, uomchange] = useState('');
    const [rate, ratechange] = useState("");
    const [recorderlevel, recorderlevelchange] = useState('');
    const [cgt, cgtchange] = useState();
    const [sgst, sgstchange] = useState();
    const [igst, igstchange] = useState();
    const [hsncode, hsncodechange] = useState();



    const handlesubmit = (e) => {
        e.preventDefault();
        const materialdata = { materialcode, materialgroup, materialname, uom, rate, recorderlevel, cgt, sgst, igst, hsncode };


        axios.get("https://peapi.microtechsolutions.co.in/php/postenquiry.php", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(materialdata)
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

    const handleclear = (e) => {
        e.preventDefault();
        const materialdata = { materialcode, materialgroup, materialname, uom, rate, recorderlevel, cgt, sgst, igst, hsncode };


        axios.get("https://peapi.microtechsolutions.co.in/php/getsubjmst.php", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(materialdata)
        })
            .then
            ((result) => {
                alert('Data Clear successfully.')
                console.log(result)

            })
            .catch((err) => {
                console.log(err.message)
            })

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


                                <div className="page-wrapper" >
                                    <div className="content container-fluid">

                                        <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}>Material Master</h3>

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
                                                                        <label>Material Code <span clclassNameass="login-danger"></span></label>
                                                                        <input value={materialcode} onChange={e => materialcodechange(e.target.value)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Material Group  <span className="login-danger"></span></label>
                                                                        <input value={materialgroup} onChange={e => materialgroupchange(e.target.value)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Material Name <span className="login-danger"></span></label>
                                                                        <input value={materialname} onChange={e => materialnamechange(e.target.value)} type="text" class="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>
                                                                            UOM<span className="login-danger"></span>
                                                                        </label>
                                                                        <select className="form-control select" value={uom} onChange={e => uomchange(e.target.value)}>
                                                                            <option>Select UOM</option>
                                                                            <option>UOM1</option>
                                                                            <option>UOM2</option>

                                                                        </select>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Rate<span className="login-danger"></span></label>
                                                                        <input value={rate} onChange={e => ratechange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Reacoder Level <span className="login-danger"></span></label>
                                                                        <input value={recorderlevel} onChange={e => recorderlevelchange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div clasclassNames="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>CGT % <span className="login-danger"></span></label>
                                                                        <input value={cgt} onChange={e => cgtchange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>SGST % <span className="login-danger"></span></label>
                                                                        <input value={sgst} onChange={e => sgstchange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>IGST % <span className="login-danger"></span></label>
                                                                        <input value={igst} onChange={e => igstchange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>HSN Code <span className="login-danger"></span></label>
                                                                        <input value={hsncode} onChange={e => hsncodechange(e.target.value)} type="text" className="form-control" />
                                                                    </div>
                                                                </div>


                                                                <hr className="my-3" />

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="student-submit">
                                                                        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="student-submit">
                                                                        <button type="submit" className="btn btn-secondary" onClick={handleclear}>
                                                                            Clear
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                        <div className="supplier-list">
                                                                            <button type="list" className="btn btn-primary">
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
            </div>
        </div>
    );
};
