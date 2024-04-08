import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Sales from "./Pages/Sales";
import Purchase from "./Pages/Purchase";
import Store from "./Pages/Store";
import Nopage from "./Pages/Nopage";

import SiteMaster from "./Masters/SiteMaster";

import EmployeeList from "./EmployeeList";
import Employee from "./Masters/Employee";
import EditEmp from "./Masters/EditEmp";

import CustomerMaster from "./Masters/CustomerMaster";
import CustomerMasterApi from "./Masters/CustomerMasterApi.js";
import EditCustomerMaster from "./Masters/EditCustomerMaster.js";
import CityMaster from "./Masters/CityMaster";
import StateMaster from "./Masters/StateMaster";
import CustomerTypeMaster from "./Masters/CustomerTypeMaster";
import MaterialMaster from "./Masters/MaterialMaster";
import SupplierMaster from "./Masters/SupplierMaster";
import UserMaster from "./Masters/UserMaster";

import feedback_entry from "./feedback/Feedbak_Entry.js";


import CompanyInformation from "./Utility/CompanyInformation";

import NewFeedbackEntry from "./CRM/NewFeedBackEntry.js";
import ApiList from "./ApiList";
import EditFeedback from "./CRM/EditFeedback";
import CustomerEmployeeDetails from "./CRM/CustomerEmployeeDetails";
import CustomerApi from "./CRM/CustomerApi";
import CalculatorApi from "./CRM/CalculatorApi.js";
import EditCustomerEmployee from "./CRM/EditCustomerEmployee";
import Attendancelist from "./CRM/Attendancelist.js";

import City from "./City";
import Update from "./Update";
import Emp from "./Masters/Emp";
import Sum from "./CRM/Sum.js";
import FeedbackEntry from "./CRM/FeedbackEntry.js";
import SalaryCalculator from "./CRM/SalaryCalculator.js";
import AccountId from "./CRM/AccountId.js";
import Feedbak_Entry from "./feedback/Feedbak_Entry.js";
import Sitewise_Purchase from './Purchase/Sitewise_Purchase.js';
import SuplierMasterApi from "./Masters/SupplierMaster_api.js";

import EditSupplierMaster from "./Masters/EditSupplierMaster.js";



function Path() {
  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/sales" element={<Sales />} />
            {/* <Route path="/purchase" element={<Purchase />} /> */}
            <Route path="/sitwisepurchase" element={<Sitewise_Purchase />} />
            <Route path="/store" element={<Store />} />

            <Route path="/sitemaster" element={<SiteMaster />} />

            <Route path="/employee" element={<Employee />} />
            <Route path="/employeelist" element={<EmployeeList />} />
            <Route path="/editemp/:Id" element={<EditEmp />} />

            <Route path="/citymaster" element={<CityMaster />} />

            <Route path="/statemaster" element={<StateMaster />} />

            <Route path="/customermaster" element={<CustomerMaster />} />
            <Route path="/customermasterapi" element={<CustomerMasterApi />} />
            <Route
              path="/editcustomermaster/:Id"
              element={<EditCustomerMaster />}
            />

            <Route path="/feedback" element={<Feedbak_Entry />} />

            <Route
              path="/customertypemaster"
              element={<CustomerTypeMaster />}
            />
            <Route path="/materialmaster" element={<MaterialMaster />} />
            <Route path="/suppliermaster" element={<SupplierMaster />} />
            <Route path="/usermaster" element={<UserMaster />} />

            <Route path="/newfeedbackentry" element={<NewFeedbackEntry />} />
            <Route path="/apilist" element={<ApiList />} />
            <Route path="/editfeedback/:Id" element={<EditFeedback />} />
            <Route path="/customeremployeedetails" element={<CustomerEmployeeDetails />} />
            <Route path="/customerapi" element={<CustomerApi />} />
            <Route path="/editcustomeremployee/:Id" element={<EditCustomerEmployee />} />
            <Route path="/salarycalculator" element={<SalaryCalculator />} />
            <Route path="/calculatorapi" element={<CalculatorApi />} />
            <Route path="/attendanceapi" element={<Attendancelist />} />

            <Route path="/companyinformation" element={<CompanyInformation />} />
            <Route path="/supplierlist" element={<SuplierMasterApi />} />
            <Route path="/editsuppliermaster/:Id" element={<EditSupplierMaster />} />




            <Route path="/city" element={<City />} />
            <Route path="/update" element={<Update />} />
            <Route path="/emp" element={<Emp />} />
            <Route path="/sum" element={<Sum />} />
            <Route path="/feedbackentry" element={<FeedbackEntry />} />
            <Route path="/accountid" element={<AccountId />} />


         
            <Route path="/nopage" element={<Nopage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default Path;
