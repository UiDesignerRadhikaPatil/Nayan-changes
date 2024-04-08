import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function Attendancelist  ()  {
    const [category, setCategory] = useState([]);


    useEffect(() => {
        const getcategory = async () => {
            const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/Getattendancedaily");
            const getdata = await res.json();
            setCategory(getdata);
            // console.log(getdata);
        };

        getcategory();
    }, []);

 

  return (
    <>
    <div className="d-flex">
    {/* <Sidebar/> */}
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
                  
                      <th scope="col-md-2">Id</th>
                    
                      <th scope="col-md-2">In Date</th>
                      <th scope="col-md-2">Superviser Name</th>
                      <th scope="col-md-2">Employee Name </th>
                      <th scope="col-md-2">Shift Id </th>
                      <th scope="col-md-2">Photo Path </th>
                      <th scope="col-md-2">Hours  </th>
                      <th scope="col-md-2"> Active </th>
                      <th scope="col-md-2"> Created By </th>
                      {/* <th scope="col-md-2">
                      
                        ....Action....
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((getcate, index) => (
                      <tr key={getcate.Id}>
        
                        <td scope="col-md-2">{getcate.Id}</td>
                        <td scope="col-md-2">{getcate.InDate}</td>
                        <td scope="col-md-2"> {getcate.SuperviserName}</td>
                        <td scope="col-md-2">{getcate.EmployeeName}</td>
              
                        <td scope="col-md-2"> {getcate.ShiftId}</td>
                        <td scope="col-md-2"> {getcate.PhotoPath}</td>
                        <td scope="col-md-2"> {getcate.Hours}</td>
                        
                        
                        <td scope="col-md-2">{getcate.Active}</td>
                        <td scope="col-md-2">{getcate.CreatedBy}</td>

                  
                        <td scope="col-md-2"></td>
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


    
    </>
  )
}

export default Attendancelist
