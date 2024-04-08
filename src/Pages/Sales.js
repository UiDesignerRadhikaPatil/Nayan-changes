import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";


export default function Sales() {

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

                                        <div className="page-header" style={{ backgroundColor: '#0b6fa1' }}>
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="page-title" style={{ color: "white", textAlign: 'center' }}>Branch Master</h3>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-body" style={{ backgroundColor: '#55a6cf' }}>
                                                        <form>
                                                            <div className="row">

                                                                <div className="col-12 col-sm-4" >
                                                                    <div className="form-group local-forms" >
                                                                        <label>Branch ID  <span className="login-danger">*</span></label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Branch Name Name <span className="login-danger">*</span></label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>Address <span className="login-danger">*</span></label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>

                                                                <div className="col-12 col-sm-4">
                                                                    <div className="form-group local-forms">
                                                                        <label>City <span className="login-danger">*</span></label>
                                                                        <input type="text" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="student-submit">
                                                                        <button type="submit" className="btn btn-primary">Submit</button>
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
}