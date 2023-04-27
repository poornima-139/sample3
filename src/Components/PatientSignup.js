import React from 'react';
import { Link } from "react-router-dom";
import a from"./css/patientSignup.module.css";

export default function PatientSignup() {
    return (
        <body class={a.patbody}>
        <div>
{/* <img src="https://genpactonline.sharepoint.com/sites/Pacers-Team2/Shared%20Documents/General/logo_transparent%20(2).png" alt="Logo" style={{"position": "absolute", "top": "0", "left": "0", "height":"150px", "width":"150px", "left":"20px"}}/>  */}
{/* {{!-- <h1 style="color:#f8fefe; "> DOCTOR SIGN-UP</h1> --}} */}
<div class={`${a.container} ${a.rightpanelactive}`}>
	<div class={`${a.container__form} ${a.container__signup}`}>
		<form action="/doctor_signup_data" class={a.patform} id="form1" method="POST">
			<h2 class={a.form__title}>Patient Sign Up</h2>
			<input type="text" placeholder="Full Name" class={a.input} name="user" />
			<input type="email" placeholder="Email" class={a.input} name="email" />
			<input type="password" placeholder="Password" class={a.input} name="password" />
			 <button class={a.btn} type="submit"><Link style={{"textDecoration": "none", "color": "white"}} to="/PatientCreateProfile">Sign Up</Link></button> 
		</form>
	</div>
    </div>
    </div>
	</body>
    );
    }