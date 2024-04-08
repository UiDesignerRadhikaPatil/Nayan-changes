import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import axios from "axios";



function FeedbackEntry() {
  const [name, setName] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)



    let config = {
      method: 'post',
      mode: "cors",
      maxBodyLength: Infinity,
      url: 'https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {

        "FeedBackDate": "2024-01-10",
        "AccountId": 3,
        "SupervisorId": 200,
        "FeedbackFrom": "radhika",
        "ContactNo": "9876543215",
        "OnTime": false,
        "WorkQuality": "bad",
        "EmployeeSatisfaction": true,
        "Message": "good",
        "Suggestions": "no"

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


  return (
    <form onSubmit={handleSubmit}>
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

export default FeedbackEntry








