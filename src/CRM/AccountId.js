import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";



export default function AccountId() {
  const [name, setName] = useState("");
  const [accountid, setAccountId] = useState("");
  const [customer, setCustomer] = useState("");




const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
    


let config = {
  method: 'post',
  mode: "cors",
  maxBodyLength: Infinity,
  url: 'https://truecodeapi.microtechsolutions.co.in/api/CustomerEmployee',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: {
    "AccountId": accountid,
    "EmployeeId": 24,
    "FromDate": "2024-01-30T00:00:00",
    "ToDate": "2024-02-11T00:00:00",
    "Basic": 121.00,
    "HRA": 2323.00,
    "Tea": 3232.00,
    "Conveyance": 332.00,
    "CCA": 22.00,
    "OCC": 121.00,
    "GrossSalary": 6151.00,
    "PF": 1212.00,
    "PT": 21212.00,
    "LabourWelfare": 2121.00,
    "ESI": 2122.00,
    "TotaDeduction": 26667.00,

},
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

  }

  const [customer_data, setCustomer_Data] = useState([]);

    const getCustomerData = async () =>{
       const url = 'https://truecodeapi.microtechsolutions.co.in/api/AccountMaster';
       let result = await fetch(url);
       result = await result.json();
       setCustomer_Data(result);
       console.log("Customer data is here");
    }

    useEffect(()=>{
        setTimeout(()=>{
            getCustomerData();

        },1000)
    },[]);

  

  return (
    <form onSubmit={handleSubmit}>

<div className="col-12 col-sm-4">
         <div className="form-group local-forms">
                                                                    <label> Customer </label>

                                                                    <select value={customer} onChange={e => setCustomer(e.target.value)}

                                                                        className="form-control select">

                                                                        {customer_data
                                                                            ? customer_data.map((employee) => {

                                                                                return <option key={employee.AccountId} value={employee.AccountId}>{employee.AccountName}</option>
                                                                            })
                                                                            : null}
                                                                    </select>



                                                                </div>
                                                            </div>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}











// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Sidebar from "../Sidebar";
// import Navbar from "../Navbar";
// import axios from "axios";

// function FeedbackEntry() {
//     const [setId, changeId] = useState("");
//     const [accountid, setAccountid] = useState('');
//     const [date, setDate] = useState('');
//     const [supervisorid, setSupervisorid] = useState('')
//     const [feedbackform, setFeedbackform] = useState('');
//     const [contactno, setContactno] = useState('');
//     const [ontime, setOntime] = useState('');
//     const [workquality, setWorkquality] = useState('');
//     const [employeesatisfaction, setEmployeesatisfaction] = useState("");
//     const [suggestions, setSuggestions] = useState('');
//     const [message, setMessage] = useState('')

//     const navigate = useNavigate();

//     const postAPI = (e) => {
//         e.preventDefault();

//         let data = JSON.stringify({
//             "FeedBackDate": "2024-01-10",
//             "AccountId": 3,
//             "SupervisorId": 200,
//             "FeedbackFrom": "radhika",
//             "ContactNo": "9876543215",
//             "OnTime": false,
//             "WorkQuality": "bad",
//             "EmployeeSatisfaction": true,
//             "Message": "good",
//             "Suggestions": "no"
//           });
          
//           let config = {
//             method: 'post',
//             mode: "cors",
//             maxBodyLength: Infinity,
//             url: 'https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry',
//             headers: { 
//               'Content-Type': 'application/json'
//             },
//             data : data
//           };
          
//           axios.request(config)
//           .then((response) => {
//             console.log(JSON.stringify(response.data));
//           })
//           .catch((error) => {
//             console.log(error);
//           });
          
//         // let config = {
//         //     method: 'post',
//         //     mode: "cors",
//         //     maxBodyLength: Infinity,

//         //     url: "https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry",
//         //     headers: {
//         //         'Content-Type': 'application/x-www-form-urlencoded'
//         //     },
//         //     data: {
//         //         'Id': setId,
//         //         'FeedBackDate': date,
//         //         'AccountId': accountid,
//         //         'SupervisorId': supervisorid,
//         //         'FeedbackFrom': feedbackform,
//         //         'ContactNo': contactno,
//         //         'OnTime': ontime,
//         //         'WorkQuality': workquality,
//         //         'EmployeeSatisfaction': employeesatisfaction,
//         //         'Message': message,
//         //         'Suggestions': suggestions,
//         //     }
//         // };

//         // axios.request(config)
//         //     .then((response) => {
//         //         console.log(JSON.stringify(response.data));
//         //         alert("Saved Successfully");
//         //     })
//         //     .catch((error) => {
//         //         console.log(error);

//         //     });

//     }

//     // const { Id } = useParams();

//     // useEffect(() => {
//     //     const getcategory = async () => {
//     //         const res = await fetch("https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry?Id=" + Id);
//     //         const getdata = await res.json();

//     //         employeedata(getdata);
//     //     };
//     //     getcategory();

//     // }, [Id]);

//     // const employeedata = (getdata) => {

//     //     changeId(getdata.Id);
//     //     setDate(getdata.FeedBackDate);
//     //     setAccountid(getdata.AccountId);
//     //     setSupervisorid(getdata.SupervisorId);
//     //     setFeedbackform(getdata.FeedbackFrom);
//     //     setContactno(getdata.ContactNo);
//     //     setOntime(getdata.OnTime);
//     //     setWorkquality(getdata.WorkQuality)
//     //     setEmployeesatisfaction(getdata.EmployeeSatisfaction)
//     //     setMessage(getdata.Message);
//     //     setSuggestions(getdata.Suggestions);

//     // };

   

//     //      changeId(getdata.Id);
//     //     setDate(getdata.Name);
//     //     setAccountid(getdata.account_id);
//     //     setSupervisorid(getdata.supervisorid);
//     //     setFeedbackform(getdata.feedbackform);
//     //     setContactno(getdata.ContactNo);
//     //     setOntime(getdata.ontime);
//     //     setEmployeesatisfaction(getdata.employeesatisfaction)
//     //     setMessage(getdata.message);
//     //     setSuggestions(getdata.suggestions);

//     //     // getdata.map((item) => {
//     //     //     changeId(item.Id),
//     //     //         setDate(item.date),
//     //     //         setAccountid(item.account_id),
//     //     //         setSupervisorid(item.supervisorid),
//     //     //         setFeedbackform(item.feedbackform),
//     //     //         setContactno(item.ContactNo),
//     //     //         setOntime(item.ontime),
//     //     //         setEmployeesatisfaction(item.employeesatisfaction),
//     //     //         setMessage(item.message),
//     //     //         setSuggestions(item.suggestions)

//     //     // })

//     // };

//     const [account_id, setAccount_id] = useState([]);

//     const getAccountData = async () => {
//         try {
//             const url = "https://truecodeapi.microtechsolutions.co.in/api/AccountMaster";
//             let result = await fetch(url);
//             if (!result.ok) {
//                 throw new Error(`HTTP error! Status: ${result.status}`);
//             }
//             result = await result.json();
//             setAccount_id(result);
//             console.log("Fetch Successfully");
//             console.log(account_id);
//         } catch (error) {
//             console.error("Error fetching account data:", error);
//         }
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             getAccountData();
//         }, 1000);
//     }, []);

//     const [customers, setcustomers] = useState([]);

//     const getCustomerData = async () => {
//         try {
//             const url = 'https://truecodeapi.microtechsolutions.co.in/api/Employee';
//             let result = await fetch(url);
//             if (!result.ok) {
//                 throw new Error(`HTTP error! Status: ${result.status}`);
//             }
//             result = await result.json();
//             setcustomers(result);
//             console.log("Data Fetch Successfully");
//             console.log(customers);
//         } catch (error) {
//             console.error("Error fetching customer data:", error);
//         }
//     };



//     useEffect(() => {
//         setTimeout(() => {
//             getCustomerData();
//         }, 1000);
//     }, []);

//     const [supervisors, setsupervisors] = useState([]);

//     const getSupervisorData = async () => {
//         try {
//             const url = 'https://truecodeapi.microtechsolutions.co.in/api/Employee';
//             let result = await fetch(url);
//             if (!result.ok) {
//                 throw new Error(`HTTP error! Status: ${result.status}`);
//             }
//             result = await result.json();
//             setsupervisors(result);
//             console.log('Data fetch successfully');
//             console.log(supervisors);
//         } catch (error) {
//             console.error("Error fetching supervisor data:", error);
//         }
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             getSupervisorData();
//         }, 1000);
//     }, []);


//     return (
//         <div className="d-flex">
//             <div>
//                 <Sidebar />
//             </div>
//             <div
//                 style={{
//                     flex: "1 1 auto",
//                     display: "flex",
//                     flexFlow: "column",
//                     height: "100vh",
//                     overflow: "hidden",
//                 }}
//             >
//                 <Navbar />
//                 <div style={{ height: "100%" }}>
//                     <div
//                         style={{
//                             padding: "20px 5%",
//                             height: "calc(100% - 64px)",
//                             overflow: "scroll",
//                             background: "whitesmoke",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 display: "grid",
//                                 background: "white",
//                                 gridTemplateColumns: "repeat(1, minmax(200px, 1200px))",
//                             }}
//                         >
//                             <div className="page-wrapper">
//                                 <div className="content container-fluid">
//                                     <div className="page-header" style={{ backgroundColor: '#AFDBF5' }}>
//                                         <div className="row align-items-center">
//                                             <div className="col">
//                                                 <h3 className="page-title" style={{ color: "#00308F", textAlign: 'center' }}>  Feedback Entry </h3>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="row">
//                                         <div className="col-sm-12">
//                                             <div className="card">
//                                                 <div className="card-body" style={{ backgroundColor: '#AFDBF5' }}>
//                                                     <form>
//                                                         <div className="row">
//                                                             {/* <div className="col-12">
//                                                                 <div className="form-group local-forms">
//                                                                     <label>ID</label>
//                                                                     <input
//                                                                         className="form-control"
//                                                                         type="id"
//                                                                         value={Id}
//                                                                         onChange={(e) => changeId(e.target.value)}


//                                                                     />
//                                                                 </div>

//                                                             </div> */}

//                                                             <div className="col-12 col-sm-4">
//                                                                 <div className="form-group local-forms">
//                                                                     <label>Date</label>
//                                                                     <input
//                                                                         className="form-control"
//                                                                         type="date"
//                                                                         value={date}
//                                                                         onChange={(e) => setDate(e.target.value)}
//                                                                     />
//                                                                 </div>
//                                                             </div>

//                                                             <div className="col-12 col-sm-4">
//                                                                 <div className="form-group local-forms">
//                                                                     <label> Account Id</label>

//                                                                     <select value={accountid} onChange={e => setAccountid(e.target.value)} className="form-control select">
//                                                                         {account_id
//                                                                             ? account_id.map((account) => (
//                                                                                 <option key={account.Id} value={account.Id}>{account.AccountName}</option>
//                                                                             ))
//                                                                             : null}
//                                                                     </select>



//                                                                 </div>
//                                                             </div>

//                                                             <div className="col-12 col-sm-4">
//                                                                 <div className="form-group local-forms">
//                                                                     <label>
//                                                                         supervisor
//                                                                     </label>


//                                                                     <select value={supervisorid} onChange={e => setSupervisorid(e.target.value)}

//                                                                         className="form-control select">

//                                                                         {supervisors
//                                                                             ? supervisors.map((Supervisor) => {

//                                                                                 return <option key={Supervisor.SupervisorId} value={Supervisor.SupervisorId}>{Supervisor.Name}</option>
//                                                                             })
//                                                                             : null}
//                                                                     </select>


//                                                                 </div>
//                                                             </div>



//                                                             <div className="col-12 col-sm-4">
//                                                                 <div className="form-group local-forms">
//                                                                     <label>Feedback Form<span className="login-danger"></span></label>

//                                                                     <select value={feedbackform} onChange={e => setFeedbackform(e.target.value)} className="form-control select">
//                                                                         {customers
//                                                                             ? customers.map((feedback) => (
//                                                                                 <option key={feedback.Id} value={feedback.Id}>{feedback.Name}</option>
//                                                                             ))
//                                                                             : null}
//                                                                     </select>



//                                                                 </div>
//                                                             </div>
//                                                             <div className="col-12 col-sm-4">
//                                                                 <div className="form-group local-forms">
//                                                                     <label>
//                                                                         Contact No
//                                                                     </label>
//                                                                     <input required value={contactno}
//                                                                         onChange={e => setContactno(e.target.value)}
//                                                                         className="form-control"
//                                                                         type="text"

//                                                                     />
//                                                                 </div>
//                                                             </div>


//                                                             <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             On Time
//                                                                         </label>
//                                                                         <input type="text" value={ontime} onChange={e => setOntime(e.target.value)} className="form-control" />
//                                                                         {/* <select className="form-control select" required value={ontime} onChange={e => setOntime(e.target.value)}>
//                                                                             <option>Select </option>
//                                                                             <option>True</option>
//                                                                             <option>False</option>

//                                                                         </select> */}

//                                                                     </div>
//                                                                 </div>



//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Work Quality
//                                                                         </label>
//                                                                         <input required value={workquality}
//                                                                             onChange={e => setWorkquality(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Employee Satisfaction
//                                                                         </label>
//                                                                         <input required value={employeesatisfaction}
//                                                                             onChange={e => setEmployeesatisfaction(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Message
//                                                                         </label>
//                                                                         <input required value={message}
//                                                                             onChange={e => setMessage(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="form-group local-forms">
//                                                                         <label>
//                                                                             Suggestions
//                                                                         </label>
//                                                                         <input required value={suggestions}
//                                                                             onChange={e => setSuggestions(e.target.value)}
//                                                                             className="form-control"
//                                                                             type="text"

//                                                                         />
//                                                                     </div>
//                                                                 </div>

//                                                             <hr className="my-3" />

//                                                             <div className="row">
//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="supplier-submit">
//                                                                         <button className="btn btn-primary" type="button" onClick={postAPI}>
//                                                                             Submit
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>

//                                                                 <div className="col-12 col-sm-4">
//                                                                     <div className="supplier-submit">
//                                                                         <button className="btn btn-warning" type="button" onClick={() => navigate('/apilist')}>
//                                                                             List
//                                                                         </button>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </form>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </div >
//     );
// }

// export default FeedbackEntry;
