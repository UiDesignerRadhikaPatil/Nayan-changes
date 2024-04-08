import React, { useState } from "react";

function MyComponent() {
  const [message, setMessage] = useState('')


  const handlePostRequest = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("https://truecodeapi.microtechsolutions.co.in/api/FeedbackEntry", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log("Response Data:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Post Request Example</h2>
      <lable>Message</lable>
      <input value={message}  onChange={ e => setMessage(e.target.value)}/>
      <button onClick={handlePostRequest}>Make POST Request</button>
    </div>
  );
}

export default MyComponent;
