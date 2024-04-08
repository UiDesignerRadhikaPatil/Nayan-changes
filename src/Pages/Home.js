import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./Home.css";


export default function Home() {


    return (
        <div className="dashboard d-flex">
            <div>

                <Sidebar />
               

            </div>
            <div style={{ flex: "1 1 auto", display: "flex", flexFlow: "column", height: "100vh", overflow: "hidden" }}>
            </div>
            <Navbar/>
        </div>


    );
}
