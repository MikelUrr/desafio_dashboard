import React, { useEffect, useState } from "react";
import "./components.css";
import { fetchUserData } from "./../js/fetch.js";
import getDaytime from "../js/functions.js";


const Userbar = () => {
    const [userData, setUserData] = useState(null);
    const [daytime, setDaytime] = useState(null);





    useEffect(() => {
        const fetchData = async () => {
            const {response,data} = await fetchUserData();
console.log(data);
            if (response.status === 200) {
                setUserData(data);
            }
        }
const getTime=()=>{ 
    const time = getDaytime();
    setDaytime(time);
}
        getTime();
        fetchData();
    }, []);

  console.log("holaaa22342",daytime);

  if (!userData) {
    
    return <div>Cargando...</div>;
    }

    return (

        <div className="userbar__container">
            <div className="userbar__container--greetings">
                <p className="userbar__container--name" >Hola {userData.name} 👋🏻</p>
                <p className="userbar__container--greeting">{daytime}</p>
            </div>
            <div className="userbar__container--user">
                <div className="userbar-notification">
                    <img src="/notification.svg" alt="user" />
                </div>
                <div className="userbar__container--user--item">
                    <img src="/woman.png" alt="user" />
                    <div className="userbar__container--user--content">

                        <p className="p-line1">Nombre Apellido</p>
                        <p className="p-line2" >Buenos dias</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Userbar;