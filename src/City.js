import React from "react";
import { useState } from "react";
import axios from "axios";

export default function City ()  {


  const [Name, NameChange] = useState("");



  const postAPI = (e) => {

    let config = {
      method: 'post',
      mode: "cors",
      maxBodyLength: Infinity,
    //   url: "https://peapi.microtechsolutions.co.in/php/postsubjmst.php",
     url: "https://truecodeapi.microtechsolutions.co.in/api/Employee",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        'Name': Name,

      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);

      });

  }


  return (
    <div className="d-flex">
      <div>
       
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
                <div class="page-wrapper">
                  <div class="content container-fluid">
                    <div class="row">
                      <div class="col-xl-12">

                        <div class="page-header" style={{ backgroundColor: '#0b6fa1' }} >
                          <div class="row">
                            <div class="col-sm-12">
                              <h3 class="page-title" style={{ color: "white", textAlign: 'center' }}>Subject</h3>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-body" style={{ backgroundColor: '#55a6cf' }} >
                            <div class="bank-inner-details">
                              <div class="row">
                              
                                <div className="col-12 col-sm-4">
                                  <div className="form-group local-forms">
                                    <label>
                                       Name <span className="login-danger">*</span>
                                    </label>
                                    <input required
                                      onChange={e => NameChange(e.target.value)}
                                      className="form-control"
                                      type="text"
                                      placeholder="Enter Name"
                                    />
                                  </div>
                                </div>


                              </div>
                            </div>
                            <div class=" blog-categories-btn pt-0">
                              <div class="bank-details-btn ">
                                <button onClick={postAPI} className="btn btn-primary">
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                </div>

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