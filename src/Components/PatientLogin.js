import React from 'react';
import { Link } from "react-router-dom";
import z from "./css/patientLogin.module.css";

export default function PatientLogin() {
    return (
        <body class={z.patientbody}>
        <div>
            {/* <img src="https://genpactonline.sharepoint.com/sites/Pacers-Team2/Shared%20Documents/General/logo_transparent%20(2).png" alt="Logo" style={{"position": "absolute", "top": "0", "left":"0", "height":"150px", "width":"150px", "left":"20px"}}/>  */}
		<div class={`${z.container} ${z.rightpanelactive}`}>
	            <div class={`${z.container__form} ${z.container__signin}`}>
		            <form action="/doctor_login_data" class={z.patientform} id="form2" method="POST">
			            <h2 class={z.form__title}>Patient Login</h2>
			            <input type="email" placeholder="Email" class={z.input} name="email"/>
			            <input type="password" placeholder="Password" class={z.input} name="password" />
			            <p style={{"color":"rgb(254, 0, 0)" , "textAlign": "left"}}></p>
			            <Link to="/PatientSignup" class={z.link}>New User? Sign Up</Link>
			            <input class={z.btn} type="submit" value="Log In" /> 
		            </form>
	            </div> 
            </div>
        </div>
		</body>
    );
}