import React from "react";
import {
    CDBBtn,
    CDBContainer,
    CDBRow,
    CDBCol,
    CDBCard,
    CDBCardBody,
    CDBInput,
    CDBIcon,
} from "cdbreact";

import Sidebar from "../Sidebar";
import Navbar from "../Navbar";


export default function CustomerTypeMaster () {



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
                                background: "#AFDBF5",
                                gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
                            }}
                        >
                            <>

                                <CDBContainer fluid>

                                    <CDBRow className='d-flex justify-content-center align-items-center h-100'>
                                        <CDBCol col='12'>

                                            <CDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                                <CDBCardBody className='p-5 w-100 d-flex flex-column'>

                                                    <h2 className="fw-bold mb-2 text-center text-primary">Customer Type Master</h2>

                                                    <p className="mb-3"></p>


                                                    <CDBInput wrapperClass='mb-4 w-100' label='Customer Id' id='formControlLg' type='customerid' size="lg" />
                                                    <p className="mb-3"></p>
                                                    <CDBInput wrapperClass='mb-4 w-100' label='Customer Name' id='formControlLg' type='customername' size="lg" />


                                                    <hr className="my-4" />

                                                    <div className="col-12">
                                                        <div className="state-submit">
                                                            <button type="submit" className="btn btn-primary mx-4">
                                                                Submit
                                                            </button>
                                                            <button type="clear" className="btn btn-primary">
                                                                Clear
                                                            </button>
                                                        </div>
                                                    </div>

                                                </CDBCardBody>
                                            </CDBCard>

                                        </CDBCol>
                                    </CDBRow>

                                </CDBContainer>

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
