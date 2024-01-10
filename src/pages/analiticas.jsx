import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Userbar from "../components/Userbar";
import Happycharts from "../components/Happycharts";

const Analiticas = () => {

    return (
        <>
            <Navbar />
            <Userbar />
            <Happycharts />

        </>

    );

}

export default Analiticas;