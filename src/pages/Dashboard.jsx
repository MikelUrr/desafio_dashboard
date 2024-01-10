import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Userbar from "../components/Userbar";
import HappychartDashboard from "../components/HappychartDashboard";

const Dashboard = () => {

    return (
        <>
        <Navbar />
        <Userbar />
        <HappychartDashboard />
    </>

    );

}

export default Dashboard;